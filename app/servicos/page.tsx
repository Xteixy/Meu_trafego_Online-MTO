import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  TrendingUp,
  Code,
  ShoppingCart,
  BarChart3,
  Globe,
  Smartphone,
  Database,
  Zap,
  Target,
  BookOpen,
  Settings,
  CheckCircle,
  Star,
  Users,
  Clock,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-lg px-4 py-2">
              Serviços Digitais Premium
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Soluções que <span className="text-primary">Multiplicam</span> Seus
              <span className="text-secondary"> Resultados</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Do tráfego qualificado ao desenvolvimento completo de sistemas. Oferecemos tudo que sua empresa precisa
              para <strong className="text-primary">dominar</strong> o mercado digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Consultoria Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="marketing" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-card">
              <TabsTrigger
                value="marketing"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Marketing
              </TabsTrigger>
              <TabsTrigger
                value="desenvolvimento"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Code className="mr-2 h-4 w-4" />
                Desenvolvimento
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                E-commerce
              </TabsTrigger>
              <TabsTrigger
                value="automacao"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Settings className="mr-2 h-4 w-4" />
                Automação
              </TabsTrigger>
            </TabsList>

            {/* Marketing Tab */}
            <TabsContent value="marketing" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary">Mais Procurado</Badge>
                    </div>
                    <CardTitle className="text-xl">Tráfego Pago Premium</CardTitle>
                    <CardDescription>Google Ads + Facebook Ads otimizados para conversão</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Setup completo das campanhas
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Otimização diária por IA
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Relatórios semanais detalhados
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        ROI garantido em 30 dias
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">R$ 2.997</span>
                          <span className="text-sm text-muted-foreground">/mês</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.9</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Começar Agora</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">SEO Pro</Badge>
                    </div>
                    <CardTitle className="text-xl">SEO Dominação Total</CardTitle>
                    <CardDescription>Primeira página do Google em 90 dias garantidos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Auditoria técnica completa
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Otimização on-page e off-page
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Link building premium
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Monitoramento 24/7
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">R$ 1.997</span>
                          <span className="text-sm text-muted-foreground">/mês</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.8</span>
                        </div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Dominar Google
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">Social Media</Badge>
                    </div>
                    <CardTitle className="text-xl">Gestão de Redes Sociais</CardTitle>
                    <CardDescription>Presença digital que converte seguidores em clientes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Conteúdo diário personalizado
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Stories e reels profissionais
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Engajamento ativo
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Relatórios de performance
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">R$ 1.497</span>
                          <span className="text-sm text-muted-foreground">/mês</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.7</span>
                        </div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline">
                        Crescer nas Redes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Development Tab */}
            <TabsContent value="desenvolvimento" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Code className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">Full Stack</Badge>
                    </div>
                    <CardTitle className="text-xl">Desenvolvimento Completo</CardTitle>
                    <CardDescription>Sites, apps e sistemas sob medida para seu negócio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        React, Next.js, Node.js
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Design responsivo premium
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Integração com APIs
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Deploy e manutenção
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">R$ 8.997</span>
                          <span className="text-sm text-muted-foreground">/projeto</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm">30 dias</span>
                        </div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary">Enterprise</Badge>
                    </div>
                    <CardTitle className="text-xl">Sistema ERP Personalizado</CardTitle>
                    <CardDescription>Gestão empresarial integrada e automatizada</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Módulos personalizados
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Integração contábil/fiscal
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Relatórios avançados
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Suporte dedicado
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">R$ 24.997</span>
                          <span className="text-sm text-muted-foreground">/projeto</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm">90 dias</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Transformar Gestão</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge variant="outline">Mobile</Badge>
                    </div>
                    <CardTitle className="text-xl">App Mobile Nativo</CardTitle>
                    <CardDescription>Aplicativo iOS e Android para seu negócio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        React Native / Flutter
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Push notifications
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Publicação nas stores
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Analytics integrado
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">R$ 15.997</span>
                          <span className="text-sm text-muted-foreground">/projeto</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm">60 dias</span>
                        </div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline">
                        Criar App
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* E-commerce Tab */}
            <TabsContent value="ecommerce" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary">Conversão Alta</Badge>
                    </div>
                    <CardTitle className="text-xl">Loja Virtual Premium</CardTitle>
                    <CardDescription>E-commerce otimizado para vendas 24/7</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Design focado em conversão
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Pagamentos integrados
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Gestão de estoque
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        SEO otimizado
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">R$ 6.997</span>
                          <span className="text-sm text-muted-foreground">/projeto</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm">21 dias</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Criar Loja Agora</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Globe className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">Landing Page</Badge>
                    </div>
                    <CardTitle className="text-xl">Landing Page Conversora</CardTitle>
                    <CardDescription>Páginas que transformam visitantes em clientes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Copywriting persuasivo
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Design psicológico
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        A/B testing incluso
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Analytics avançado
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">R$ 2.997</span>
                          <span className="text-sm text-muted-foreground">/página</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm">7 dias</span>
                        </div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Converter Mais
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">Digital</Badge>
                    </div>
                    <CardTitle className="text-xl">E-books & Infoprodutos</CardTitle>
                    <CardDescription>Criação e monetização de produtos digitais</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Conteúdo especializado
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Design profissional
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Plataforma de vendas
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Estratégia de lançamento
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">R$ 4.997</span>
                          <span className="text-sm text-muted-foreground">/produto</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm">14 dias</span>
                        </div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline">
                        Monetizar Conhecimento
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Automation Tab */}
            <TabsContent value="automacao" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Zap className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">IA Powered</Badge>
                    </div>
                    <CardTitle className="text-xl">Automação de Processos</CardTitle>
                    <CardDescription>Elimine tarefas repetitivas e ganhe produtividade</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Workflows inteligentes
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Integração com sistemas
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Notificações automáticas
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Relatórios em tempo real
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">R$ 3.997</span>
                          <span className="text-sm text-muted-foreground">/processo</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm">10 dias</span>
                        </div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Automatizar Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary">Analytics</Badge>
                    </div>
                    <CardTitle className="text-xl">Dashboard Executivo</CardTitle>
                    <CardDescription>Visualização inteligente de dados empresariais</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        KPIs personalizados
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Gráficos interativos
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Alertas inteligentes
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Acesso mobile
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">R$ 5.997</span>
                          <span className="text-sm text-muted-foreground">/dashboard</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm">15 dias</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Visualizar Dados</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Settings className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge variant="outline">Integração</Badge>
                    </div>
                    <CardTitle className="text-xl">Integração de Sistemas</CardTitle>
                    <CardDescription>Conecte todas as ferramentas do seu negócio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        APIs personalizadas
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Sincronização em tempo real
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Backup automático
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Monitoramento 24/7
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">R$ 7.997</span>
                          <span className="text-sm text-muted-foreground">/integração</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm">20 dias</span>
                        </div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline">
                        Conectar Sistemas
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pacotes Completos</h2>
            <p className="text-muted-foreground">Soluções integradas para acelerar seu crescimento</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Ideal para pequenas empresas</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">R$ 4.997</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Site institucional
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    SEO básico
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Gestão de redes sociais
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Suporte por email
                  </div>
                </div>
                <Button className="w-full mt-6">Começar Agora</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary/50 shadow-lg shadow-primary/10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Mais Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Growth</CardTitle>
                <CardDescription>Para empresas em crescimento</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">R$ 9.997</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Tudo do Starter +
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    E-commerce completo
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Tráfego pago otimizado
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Automação de processos
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Suporte prioritário
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">Acelerar Crescimento</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>Soluções corporativas completas</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-secondary">R$ 19.997</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Tudo do Growth +
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Sistema ERP personalizado
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    App mobile nativo
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Dashboard executivo
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Gerente dedicado
                  </div>
                </div>
                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Dominar Mercado
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Pronto para <span className="text-primary">Revolucionar</span> Seu Negócio?
            </h2>
            <p className="text-xl text-muted-foreground">
              Agende uma consultoria gratuita e descubra como podemos multiplicar seus resultados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Agendar Consultoria Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Ver Casos de Sucesso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
