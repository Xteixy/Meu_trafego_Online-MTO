"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  sizes,
  fill = false,
  objectFit = "cover",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    const element = document.querySelector(`[data-image-src="${src}"]`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [src, priority])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div
        className={cn(
          "bg-muted flex items-center justify-center text-muted-foreground",
          className
        )}
        style={{ width: fill ? "100%" : width, height: fill ? "100%" : height }}
      >
        <div className="text-center p-4">
          <div className="text-4xl mb-2">🖼️</div>
          <div className="text-sm">Imagem não disponível</div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={fill ? {} : { width, height }}
      data-image-src={src}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}

      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            fill ? "object-cover" : `object-${objectFit}`
          )}
          priority={priority}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes}
          fill={fill}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}

      {!isInView && !priority && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
    </div>
  )
}

// Componente para imagens de fundo otimizadas
export function OptimizedBackgroundImage({
  src,
  alt,
  className,
  children,
  overlay = false,
  overlayOpacity = 0.3,
}: {
  src: string
  alt: string
  className?: string
  children?: React.ReactNode
  overlay?: boolean
  overlayOpacity?: number
}) {
  return (
    <div className={cn("relative", className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
      
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  )
}

// Componente para imagens responsivas
export function ResponsiveImage({
  src,
  alt,
  className,
  aspectRatio = "16/9",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  sizes?: string
}) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  )
}



