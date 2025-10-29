"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Zap, Target, TrendingUp } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface LeadCaptureFormProps {
  title?: string
  subtitle?: string
  variant?: "default" | "premium" | "newsletter"
  showCompany?: boolean
  showPhone?: boolean
  showMessage?: boolean
  showInterests?: boolean
  ctaText?: string
  className?: string
}

export function LeadCaptureForm({
  title = "Transforme Seu Negócio",
  subtitle = "Receba estratégias exclusivas e ofertas especiais",
  variant = "default",
  showCompany = true,
  showPhone = true,
  showMessage = true,
  showInterests = true,
  ctaText = "Quero Transformar Meu Negócio",
  className = "",
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interests: [] as string[],
    newsletter: true,
    terms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const interests = [
    { value: "marketing", label: "Marketing Digital", icon: TrendingUp },
    { value: "seo", label: "SEO & Tráfego", icon: Target },
    { value: "development", label: "Desenvolvimento", icon: Zap },
    { value: "ecommerce", label: "E-commerce", icon: Target },
    { value: "automation", label: "Automação", icon: Zap },
    { value: "hardware", label: "Hardware Premium", icon: Target },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envio para API
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "Sucesso! 🎉",
        description: "Seus dados foram enviados. Em breve entraremos em contato!",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        interests: [],
        newsletter: true,
        terms: false,
      })
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

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <div className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 ${className}`}>
      <div className="text-center mb-8">
        <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
          {variant === "premium" ? "🚀 Oferta Exclusiva" : "💎 Transformação Garantida"}
        </Badge>
        <h3 className="text-2xl lg:text-3xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Seu nome completo"
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Profissional *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="seu@email.com"
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>
        </div>

        {showCompany && (
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              placeholder="Nome da sua empresa"
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>
        )}

        {showPhone && (
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="(11) 99999-9999"
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>
        )}

        {showMessage && (
          <div className="space-y-2">
            <Label htmlFor="message">Como podemos ajudar?</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Conte-nos sobre seus objetivos e desafios..."
              rows={3}
              className="bg-background/50 border-border/50 focus:border-primary resize-none"
            />
          </div>
        )}

        {showInterests && (
          <div className="space-y-3">
            <Label>Áreas de Interesse</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interests.map((interest) => {
                const Icon = interest.icon
                return (
                  <div key={interest.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest.value}
                      checked={formData.interests.includes(interest.value)}
                      onCheckedChange={() => handleInterestChange(interest.value)}
                      className="border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label
                      htmlFor={interest.value}
                      className="text-sm cursor-pointer flex items-center space-x-1"
                    >
                      <Icon className="h-3 w-3" />
                      <span>{interest.label}</span>
                    </Label>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: !!checked }))}
              className="border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label htmlFor="newsletter" className="text-sm cursor-pointer">
              Quero receber dicas exclusivas e ofertas especiais
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              required
              checked={formData.terms}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: !!checked }))}
              className="border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-1"
            />
            <Label htmlFor="terms" className="text-sm cursor-pointer">
              Concordo com os{" "}
              <a href="/termos" className="text-primary hover:underline">
                termos de uso
              </a>{" "}
              e{" "}
              <a href="/privacidade" className="text-primary hover:underline">
                política de privacidade
              </a>
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 hover-lift neon-border"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              <span>Enviando...</span>
            </div>
          ) : (
            <>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          🔒 Seus dados estão seguros. Nunca compartilharemos suas informações.
        </p>
      </form>

      {variant === "premium" && (
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <div className="flex items-center space-x-2 text-primary font-medium mb-2">
            <CheckCircle className="h-4 w-4" />
            <span>Bônus Exclusivo</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Receba gratuitamente o e-book "Marketing Digital Dominante" + consultoria de 30 minutos
          </p>
        </div>
      )}
    </div>
  )
}



