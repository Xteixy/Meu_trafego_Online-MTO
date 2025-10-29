"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Building,
  Phone,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Shield,
  Users,
  BarChart3
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"

export default function AuthPage() {
  const { login, register, isLoading } = useAuth()
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
    phone: "",
    acceptTerms: false,
    acceptMarketing: true
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isLogin) {
      // Login
      const success = await login(formData.email, formData.password)
      if (success) {
        toast({
          title: "Login realizado com sucesso! 🎉",
          description: "Redirecionando para o dashboard...",
        })
        setTimeout(() => router.push("/dashboard"), 1500)
      } else {
        toast({
          title: "Erro no login! ❌",
          description: "Verifique suas credenciais e tente novamente.",
          variant: "destructive",
        })
      }
    } else {
      // Registro
      if (!formData.acceptTerms) {
        toast({
          title: "Termos não aceitos! ⚠️",
          description: "Você deve aceitar os termos de uso para continuar.",
          variant: "destructive",
        })
        return
      }

      const success = await register({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        plan: "starter"
      })

      if (success) {
        toast({
          title: "Conta criada com sucesso! 🎉",
          description: "Redirecionando para o dashboard...",
        })
        setTimeout(() => router.push("/dashboard"), 1500)
      } else {
        toast({
          title: "Erro ao criar conta! ❌",
          description: "Tente novamente ou entre em contato com o suporte.",
          variant: "destructive",
        })
      }
    }
  }

  const benefits = [
    {
      icon: Target,
      title: "Tráfego Qualificado",
      description: "Alcance o público certo para seu negócio"
    },
    {
      icon: TrendingUp,
      title: "Conversões Reais",
      description: "Transforme visitantes em clientes"
    },
    {
      icon: BarChart3,
      title: "Métricas Detalhadas",
      description: "Acompanhe cada centavo investido"
    },
    {
      icon: Users,
      title: "Suporte Especializado",
      description: "Equipe dedicada para seu sucesso"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-4 py-2">
              🚀 Sistema de Autenticação
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              <span className="text-primary">Compra Tráfego</span> e Conquista o Mercado
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Acesse sua conta e solicite serviços de tráfego para mídias sociais. 
              Transforme sua presença digital e domine seu mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Auth Form */}
            <div className="space-y-8">
              <Card className="border-primary/20 shadow-xl">
                <CardHeader className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">
                    {isLogin ? "Entrar na Sua Conta" : "Criar Nova Conta"}
                  </CardTitle>
                  <CardDescription>
                    {isLogin 
                      ? "Acesse seu dashboard e gerencie seus serviços de tráfego"
                      : "Junte-se a centenas de empresas que já dominam o mercado digital"
                    }
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <Tabs value={isLogin ? "login" : "register"} onValueChange={(value) => setIsLogin(value === "login")}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Entrar</TabsTrigger>
                      <TabsTrigger value="register">Criar Conta</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="login-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="login-email"
                              type="email"
                              placeholder="seu@email.com"
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="login-password">Senha</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="login-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Sua senha"
                              value={formData.password}
                              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                              className="pl-10 pr-10"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember" className="text-sm">Lembrar de mim</Label>
                          </div>
                          <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                            Esqueceu a senha?
                          </Link>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                              <span>Entrando...</span>
                            </div>
                          ) : (
                            <>
                              Entrar na Conta
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="register" className="space-y-4">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="register-name">Nome Completo</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="register-name"
                                type="text"
                                placeholder="Seu nome completo"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="register-company">Empresa</Label>
                            <div className="relative">
                              <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="register-company"
                                type="text"
                                placeholder="Nome da empresa"
                                value={formData.company}
                                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="register-email">Email Profissional</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="register-email"
                                type="email"
                                placeholder="seu@empresa.com"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="register-phone">Telefone</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="register-phone"
                                type="tel"
                                placeholder="(11) 99999-9999"
                                value={formData.phone}
                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="register-password">Senha</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="register-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Crie uma senha forte"
                              value={formData.password}
                              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                              className="pl-10 pr-10"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="accept-terms"
                              checked={formData.acceptTerms}
                              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptTerms: !!checked }))}
                              required
                            />
                            <Label htmlFor="accept-terms" className="text-sm leading-relaxed">
                              Concordo com os{" "}
                              <Link href="/termos" className="text-primary hover:underline">
                                termos de uso
                              </Link>{" "}
                              e{" "}
                              <Link href="/privacidade" className="text-primary hover:underline">
                                política de privacidade
                              </Link>
                            </Label>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="accept-marketing"
                              checked={formData.acceptMarketing}
                              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptMarketing: !!checked }))}
                            />
                            <Label htmlFor="accept-marketing" className="text-sm leading-relaxed">
                              Quero receber dicas exclusivas e ofertas especiais para multiplicar meus resultados
                            </Label>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                              <span>Criando conta...</span>
                            </div>
                          ) : (
                            <>
                              Criar Conta e Começar
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Benefits & Features */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Por que escolher a <span className="text-primary">MTO</span>?
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Nossa plataforma oferece tudo que você precisa para dominar o tráfego digital
                  </p>
                </div>

                <div className="grid gap-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Separator />

                <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-primary/20 rounded-2xl p-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">
                      Comece a <span className="text-primary">Dominar</span> Hoje Mesmo
                    </h3>
                    <p className="text-muted-foreground">
                      Junte-se a mais de 500 empresas que já transformaram seus resultados
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Setup em menos de 5 minutos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
