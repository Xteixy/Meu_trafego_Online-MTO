"use client"

import { useEffect, useCallback } from "react"
import { usePathname, useSearchParams } from "next/navigation"

interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
  timestamp: number
  sessionId: string
  userId?: string
}

interface PageView {
  path: string
  title: string
  timestamp: number
  sessionId: string
  referrer?: string
}

class AnalyticsTracker {
  private sessionId: string
  private events: AnalyticsEvent[] = []
  private pageViews: PageView[] = []
  private isInitialized = false

  constructor() {
    this.sessionId = this.generateSessionId()
    this.init()
  }

  private init() {
    if (typeof window === "undefined" || this.isInitialized) return

    // Rastrear eventos de clique
    this.trackClickEvents()
    
    // Rastrear scroll
    this.trackScroll()
    
    // Rastrear tempo na página
    this.trackTimeOnPage()
    
    // Rastrear formulários
    this.trackForms()
    
    // Rastrear downloads
    this.trackDownloads()
    
    this.isInitialized = true
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private trackClickEvents() {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      
      // Rastrear CTAs
      if (target.closest("button") || target.closest("a")) {
        const element = target.closest("button") || target.closest("a")
        if (element) {
          const text = element.textContent?.trim() || "Unknown"
          const href = (element as HTMLAnchorElement).href
          
          this.trackEvent("engagement", "click", text, href)
        }
      }
    })
  }

  private trackScroll() {
    let maxScroll = 0
    let scrollEvents = 0
    
    window.addEventListener("scroll", () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        
        // Rastrear marcos de scroll
        if (scrollPercent >= 25 && scrollEvents < 1) {
          this.trackEvent("engagement", "scroll", "25%", undefined, 25)
          scrollEvents++
        } else if (scrollPercent >= 50 && scrollEvents < 2) {
          this.trackEvent("engagement", "scroll", "50%", undefined, 50)
          scrollEvents++
        } else if (scrollPercent >= 75 && scrollEvents < 3) {
          this.trackEvent("engagement", "scroll", "75%", undefined, 75)
          scrollEvents++
        } else if (scrollPercent >= 90 && scrollEvents < 4) {
          this.trackEvent("engagement", "scroll", "90%", undefined, 90)
          scrollEvents++
        }
      }
    })
  }

  private trackTimeOnPage() {
    let startTime = Date.now()
    
    // Rastrear tempo na página
    const trackTime = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      
      if (timeSpent >= 30 && timeSpent % 30 === 0) {
        this.trackEvent("engagement", "time_on_page", `${timeSpent}s`, undefined, timeSpent)
      }
    }
    
    const interval = setInterval(trackTime, 1000)
    
    // Limpar quando sair da página
    window.addEventListener("beforeunload", () => {
      clearInterval(interval)
      const finalTime = Math.round((Date.now() - startTime) / 1000)
      this.trackEvent("engagement", "page_exit", `${finalTime}s`, undefined, finalTime)
    })
  }

  private trackForms() {
    document.addEventListener("submit", (e) => {
      const form = e.target as HTMLFormElement
      const formId = form.id || form.className || "unknown_form"
      
      this.trackEvent("conversion", "form_submit", formId)
    })
  }

  private trackDownloads() {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      const link = target.closest("a") as HTMLAnchorElement
      
      if (link && this.isDownloadLink(link.href)) {
        const filename = link.href.split("/").pop() || "unknown"
        this.trackEvent("conversion", "download", filename)
      }
    })
  }

  private isDownloadLink(href: string): boolean {
    const downloadExtensions = [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".zip", ".rar"]
    return downloadExtensions.some(ext => href.toLowerCase().includes(ext))
  }

  trackEvent(category: string, action: string, label?: string, value?: number) {
    const event: AnalyticsEvent = {
      event: "custom_event",
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: this.sessionId,
    }
    
    this.events.push(event)
    this.sendToAnalytics(event)
  }

  trackPageView(path: string, title: string, referrer?: string) {
    const pageView: PageView = {
      path,
      title,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      referrer,
    }
    
    this.pageViews.push(pageView)
    this.sendToAnalytics({ event: "page_view", ...pageView })
  }

  private sendToAnalytics(data: any) {
    // Enviar para Google Analytics 4
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", data.event, {
        event_category: data.category,
        event_action: data.action,
        event_label: data.label,
        value: data.value,
        custom_parameter_session_id: this.sessionId,
      })
    }

    // Enviar para Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", data.event, {
        content_name: data.label,
        content_category: data.category,
        value: data.value,
      })
    }

    // Console para desenvolvimento
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Analytics Event:", data)
    }
  }

  getSessionData() {
    return {
      sessionId: this.sessionId,
      events: this.events,
      pageViews: this.pageViews,
      sessionDuration: this.pageViews.length > 0 
        ? Date.now() - this.pageViews[0].timestamp 
        : 0,
    }
  }
}

// Hook para usar o analytics
export function useAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const trackEvent = useCallback((category: string, action: string, label?: string, value?: number) => {
    if (typeof window !== "undefined") {
      if (!(window as any).analyticsTracker) {
        (window as any).analyticsTracker = new AnalyticsTracker()
      }
      (window as any).analyticsTracker.trackEvent(category, action, label, value)
    }
  }, [])

  const trackPageView = useCallback((title: string) => {
    if (typeof window !== "undefined") {
      if (!(window as any).analyticsTracker) {
        (window as any).analyticsTracker = new AnalyticsTracker()
      }
      (window as any).analyticsTracker.trackPageView(pathname, title, document.referrer)
    }
  }, [pathname])

  useEffect(() => {
    trackPageView(document.title)
  }, [pathname, trackPageView])

  return { trackEvent, trackPageView }
}

// Componente para rastrear conversões
export function ConversionTracker({ 
  eventName, 
  category = "conversion", 
  action = "click",
  label,
  value,
  children 
}: {
  eventName: string
  category?: string
  action?: string
  label?: string
  value?: number
  children: React.ReactNode
}) {
  const { trackEvent } = useAnalytics()

  const handleClick = () => {
    trackEvent(category, action, label || eventName, value)
  }

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  )
}

// Componente para rastrear formulários
export function FormTracker({ 
  formId, 
  children 
}: {
  formId: string
  children: React.ReactNode
}) {
  const { trackEvent } = useAnalytics()

  const handleSubmit = () => {
    trackEvent("conversion", "form_submit", formId)
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}



