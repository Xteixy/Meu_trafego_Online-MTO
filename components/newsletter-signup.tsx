"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, TrendingUp, Target, ArrowRight } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface NewsletterSignupProps {
  variant?: "default" | "premium" | "minimal"
  title?: string
  subtitle?: string
  showBenefits?: boolean
  className?: string
}

export function NewsletterSignup({
  variant = "default",
  title = "Receba Estratégias Exclusivas",
  subtitle = "Insights que multiplicam seus resultados + ofertas especiais",
  showBenefits = true,
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const benefits = [
    { icon: Zap, text: "Dicas semanais de marketing digital" },
    { icon: TrendingUp, text: "Estratégias de crescimento comprovadas" },
    { icon: Target, text: "Ofertas exclusivas para assinantes" },
    { icon: CheckCircle, text: "Conteúdo premium gratuito" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    try {
      // Simular envio para API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast({
        title: "Inscrição Confirmada! 🎉",
        description: "Você receberá nossas estratégias exclusivas em breve!",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Erro! ❌",
        description: "Algo deu errado. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === "minimal") {
    return (
      <div className={`bg-card/30 backdrop-blur-sm border border-border rounded-xl p-4 ${className}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Seu email profissional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background/50 border-border/50 focus:border-primary flex-1"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
          >
            {isSubmitting ? "..." : "Inscrever"}
          </Button>
        </form>
      </div>
    )
  }

  return (
    <div className={`bg-gradient-to-r from-primary/10 via-card/50 to-secondary/10 border border-border/50 rounded-2xl p-6 lg:p-8 ${className}`}>
      <div className="text-center mb-6">
        <Badge className="bg-primary/20 text-primary border-primary/30 mb-3">
          💎 Newsletter Premium
        </Badge>
        <h3 className="text-2xl lg:text-3xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background/50 border-border/50 focus:border-primary flex-1"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover-lift"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                <span>Enviando...</span>
              </div>
            ) : (
              <>
                Inscrever
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>

      {showBenefits && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{benefit.text}</span>
              </div>
            )
          })}
        </div>
      )}

      <p className="text-xs text-muted-foreground text-center mt-6">
        🔒 100% gratuito. Cancele a qualquer momento. Respeitamos sua privacidade.
      </p>
    </div>
  )
}



