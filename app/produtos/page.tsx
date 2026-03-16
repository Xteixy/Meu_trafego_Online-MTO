import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Database,
  Zap,
  Cpu,
  HardDrive,
  Monitor,
  Smartphone,
  Star,
  Shield,
  Truck,
  CheckCircle,
  Globe,
  FileText,
  Newspaper,
  Building,
  Target,
  ShoppingCart,
  Store,
  Eye,
  Download,
  ExternalLink,
  TrendingUp,
  Code,
  BarChart3,
  Settings,
  Clock,
  Users,
  BookOpen,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-4 py-2">Soluções Digitais</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Produtos & <span className="text-primary">Serviços</span> para
              <span className="text-secondary"> Transformação Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Desenvolvimento completo de sites, e-commerce e infraestrutura web para escalar seu negócio no ambiente digital.
              Tecnologia de ponta com foco em resultados reais.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="desenvolvimento" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card">
              <TabsTrigger
                value="desenvolvimento"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Globe className="mr-2 h-4 w-4" />
                Criação de Sites
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Vendas & Conversão
              </TabsTrigger>
              <TabsTrigger
                value="infra"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Database className="mr-2 h-4 w-4" />
                Infraestrutura Web
              </TabsTrigger>
            </TabsList>

            {/* Web Development Tab */}
            <TabsContent value="desenvolvimento" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary">Profissional</Badge>
                    </div>
                    <CardTitle className="text-xl">Sites Corporativos</CardTitle>
                    <CardDescription>Presença digital robusta para grandes empresas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Design exclusivo e premium
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Integração com analytics avançado
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Multi-páginas e blog integrado
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        SEO de alta performance
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">A partir de</p>
                          <span className="text-2xl font-bold text-primary">AOA 100.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">5.0</span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a href="/contato">Solicitar Orçamento</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">Impacto</Badge>
                    </div>
                    <CardTitle className="text-xl">Sites Institucionais</CardTitle>
                    <CardDescription>Apresentação clara e objetiva do seu negócio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Foco em credibilidade e marca
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Navegação rápida e intuitiva
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Compatível com dispositivos móveis
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Configuração de domínio inclusa
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">A partir de</p>
                          <span className="text-2xl font-bold text-primary">AOA 60.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.9</span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-transparent"
                        variant="outline"
                        asChild
                      >
                        <a href="/contato">Ver Planos</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Zap className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">Novo</Badge>
                    </div>
                    <CardTitle className="text-xl">Desenvolvimento Sob Medida</CardTitle>
                    <CardDescription>Sistemas personalizados para suas necessidades</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Full Stack (Next.js + Postgres)
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Painéis administrativos customizados
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Integração com APIs externas
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Escalabilidade garantida
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Orçamento sob consulta</p>
                          <span className="text-2xl font-bold text-secondary">AOA Flex</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">5.0</span>
                        </div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                        <a href="/contato">Falar com Consultor</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* E-commerce & Landing Pages Tab */}
            <TabsContent value="ecommerce" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">Vendas</Badge>
                    </div>
                    <CardTitle className="text-xl">E-commerce Completo</CardTitle>
                    <CardDescription>Sua loja virtual pronta para vender</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Carrinho e Checkout otimizados
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Gestão de estoque e pedidos
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Integração com meios de pagamento
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Segurança com certificado SSL
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">A partir de</p>
                          <span className="text-2xl font-bold text-secondary">AOA 150.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.9</span>
                        </div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                        <a href="/contato">Criar Minha Loja</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Target className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge variant="outline">Alta Conversão</Badge>
                    </div>
                    <CardTitle className="text-xl">Landing Pages</CardTitle>
                    <CardDescription>Focadas em converter leads em clientes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Copywriting focado em vendas
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Design clean e objetivo
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Integração com Meta Pixel e Tags
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Carregamento ultra-rápido (Lighthouse 95+)
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">A partir de</p>
                          <span className="text-2xl font-bold text-secondary">AOA 40.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">5.0</span>
                        </div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <a href="/contato">Aumentar Conversão</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary">Mobile</Badge>
                    </div>
                    <CardTitle className="text-xl">Apps de Vendas Web</CardTitle>
                    <CardDescription>Experiência de app dentro do navegador</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        PWA (Progressive Web App)
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Notificações push ocasionais
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Interface fluida e interativa
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Instalável no celular
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">A partir de</p>
                          <span className="text-2xl font-bold text-primary">AOA 200.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.8</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                        <a href="/contato">Consultar Projeto</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Infrastructure Tab */}
            <TabsContent value="infra" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary">Velocidade</Badge>
                    </div>
                    <CardTitle className="text-xl">Serviços de Hospedagem</CardTitle>
                    <CardDescription>Hospedagem de alta performance para seu site</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Uptime de 99.9% garantido
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Backups diários automáticos
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Certificado SSL gratuito incluso
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Suporte técnico 24/7 especializado
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">A partir de</p>
                          <span className="text-2xl font-bold text-primary">AOA 5.000/mês</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">5.0</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                        <a href="/contato">Contratar Agora</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Globe className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">Identidade</Badge>
                    </div>
                    <CardTitle className="text-xl">Contratação de Domínio</CardTitle>
                    <CardDescription>Sua marca registrada na Internet</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Domínios .AO, .COM, .NET, .PT e mais
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Gestão de DNS simplificada
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Proteção de privacidade WHOIS
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        E-mails personalizados inclusos
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">A partir de</p>
                          <span className="text-2xl font-bold text-secondary">AOA 15.000/ano</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.9</span>
                        </div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                        <a href="/contato">Buscar Domínio</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">Segurança</Badge>
                    </div>
                    <CardTitle className="text-xl">Segurança Web Avançada</CardTitle>
                    <CardDescription>Proteção total contra ameaças digitais</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        WAF (Web Application Firewall)
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Proteção contra ataques DDoS
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Varredura de malware recorrente
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Otimização de performance CDN
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">A partir de</p>
                          <span className="text-2xl font-bold text-primary">AOA 10.000/mês</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.7</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                        <a href="/contato">Proteger Meu Site</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Templates Tab */}
            <TabsContent value="templates" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Templates Web Profissionais</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Escolha entre nossa coleção de templates modernos e responsivos para diferentes tipos de negócios.
                  Todos os templates incluem design responsivo, otimização SEO e código limpo.
                </p>
              </div>

              {/* Template Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="h-16 w-16 text-white" />
                    </div>
                    <CardTitle className="text-lg">Sites Corporativos</CardTitle>
                    <CardDescription>Designs profissionais para empresas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">12 templates</span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="h-16 w-16 text-white" />
                    </div>
                    <CardTitle className="text-lg">Blogs & Conteúdo</CardTitle>
                    <CardDescription>Perfeitos para criadores de conteúdo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">8 templates</span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                      <Newspaper className="h-16 w-16 text-white" />
                    </div>
                    <CardTitle className="text-lg">Portais de Notícias</CardTitle>
                    <CardDescription>Layouts dinâmicos para mídia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">6 templates</span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                      <Building className="h-16 w-16 text-white" />
                    </div>
                    <CardTitle className="text-lg">Sites Institucionais</CardTitle>
                    <CardDescription>Elegantes e informativos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">10 templates</span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                      <Target className="h-16 w-16 text-white" />
                    </div>
                    <CardTitle className="text-lg">Landing Pages</CardTitle>
                    <CardDescription>Conversão otimizada</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">15 templates</span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <ShoppingCart className="h-16 w-16 text-white" />
                    </div>
                    <CardTitle className="text-lg">E-commerce</CardTitle>
                    <CardDescription>Lojas online completas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">9 templates</span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                      <Store className="h-16 w-16 text-white" />
                    </div>
                    <CardTitle className="text-lg">Lojas Físicas</CardTitle>
                    <CardDescription>Presença digital para lojas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">7 templates</span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="h-16 w-16 text-white" />
                    </div>
                    <CardTitle className="text-lg">Portfólios</CardTitle>
                    <CardDescription>Showcase criativo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">11 templates</span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Featured Templates */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Templates em Destaque</h3>
                  <p className="text-muted-foreground">Nossos templates mais populares e bem avaliados</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Template 1 - Corporate Website */}
                  <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader className="pb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Building className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">Corporate Pro</p>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Corporate Pro</CardTitle>
                      <CardDescription>Site corporativo moderno e profissional</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          Design responsivo
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          SEO otimizado
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          CMS integrado
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          Formulários de contato
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-primary">AOA 299.000</span>
                            <span className="text-sm text-muted-foreground line-through ml-2">AOA 399.000</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-secondary fill-current" />
                            <span className="text-sm ml-1">4.9</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-primary hover:bg-primary/90">
                            <Download className="h-4 w-4 mr-2" />
                            Comprar
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Template 2 - E-commerce */}
                  <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                    <CardHeader className="pb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <ShoppingCart className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">ShopMax</p>
                        </div>
                      </div>
                      <CardTitle className="text-lg">ShopMax E-commerce</CardTitle>
                      <CardDescription>Loja online completa e moderna</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Carrinho de compras
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Sistema de pagamento
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Gestão de produtos
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Painel administrativo
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-secondary">AOA 599.000</span>
                            <span className="text-sm text-muted-foreground line-through ml-2">AOA 799.000</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-secondary fill-current" />
                            <span className="text-sm ml-1">4.8</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                            <Download className="h-4 w-4 mr-2" />
                            Comprar
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Template 3 - Landing Page */}
                  <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader className="pb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Target className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">Landing Pro</p>
                        </div>
                      </div>
                      <CardTitle className="text-lg">Landing Pro</CardTitle>
                      <CardDescription>Landing page de alta conversão</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          Formulários otimizados
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          Análise de conversão
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          Mobile-first design
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          Integração com CRM
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-primary">AOA 199.000</span>
                            <span className="text-sm text-muted-foreground line-through ml-2">AOA 299.000</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-secondary fill-current" />
                            <span className="text-sm ml-1">4.7</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-primary hover:bg-primary/90">
                            <Download className="h-4 w-4 mr-2" />
                            Comprar
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Template 4 - Blog */}
                  <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                    <CardHeader className="pb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <FileText className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">BlogMaster</p>
                        </div>
                      </div>
                      <CardTitle className="text-lg">BlogMaster</CardTitle>
                      <CardDescription>Blog moderno e funcional</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Editor de posts
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Sistema de comentários
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Categorias e tags
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Newsletter integrado
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-secondary">AOA 249.000</span>
                            <span className="text-sm text-muted-foreground line-through ml-2">AOA 349.000</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-secondary fill-current" />
                            <span className="text-sm ml-1">4.6</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                            <Download className="h-4 w-4 mr-2" />
                            Comprar
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Template 5 - News Portal */}
                  <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader className="pb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Newspaper className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">NewsPortal</p>
                        </div>
                      </div>
                      <CardTitle className="text-lg">NewsPortal</CardTitle>
                      <CardDescription>Portal de notícias dinâmico</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          Layout responsivo
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          Sistema de categorias
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          Busca avançada
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          RSS feeds
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-primary">AOA 399.000</span>
                            <span className="text-sm text-muted-foreground line-through ml-2">AOA 499.000</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-secondary fill-current" />
                            <span className="text-sm ml-1">4.8</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-primary hover:bg-primary/90">
                            <Download className="h-4 w-4 mr-2" />
                            Comprar
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Template 6 - Portfolio */}
                  <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                    <CardHeader className="pb-4">
                      <div className="w-full h-48 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
                        <div className="relative z-10 text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Globe className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">PortfolioX</p>
                        </div>
                      </div>
                      <CardTitle className="text-lg">PortfolioX</CardTitle>
                      <CardDescription>Portfólio criativo e elegante</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Galeria de projetos
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Sobre mim
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Formulário de contato
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                          Integração social
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-secondary">AOA 179.000</span>
                            <span className="text-sm text-muted-foreground line-through ml-2">AOA 249.000</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-secondary fill-current" />
                            <span className="text-sm ml-1">4.9</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                            <Download className="h-4 w-4 mr-2" />
                            Comprar
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Template Features */}
              <div className="bg-card/30 rounded-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">O que está incluído em todos os templates</h3>
                  <p className="text-muted-foreground">Recursos padrão em todos os nossos templates</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Design Responsivo</h4>
                    <p className="text-sm text-muted-foreground">Funciona perfeitamente em todos os dispositivos</p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <h4 className="font-semibold">Otimização SEO</h4>
                    <p className="text-sm text-muted-foreground">Estrutura otimizada para mecanismos de busca</p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Código Limpo</h4>
                    <p className="text-sm text-muted-foreground">Código bem documentado e fácil de personalizar</p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <h4 className="font-semibold">Suporte Técnico</h4>
                    <p className="text-sm text-muted-foreground">6 meses de suporte gratuito incluído</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ============ SERVIÇOS DIGITAIS ============ */}
      {/* Service Categories */}
      <section className="py-16 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos <span className="text-primary">Serviços</span> Digitais</h2>
            <p className="text-muted-foreground">Do tráfego qualificado ao desenvolvimento completo. Tudo que sua empresa precisa para dominar o digital.</p>
          </div>
          <Tabs defaultValue="marketing" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-card">
              <TabsTrigger value="marketing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <TrendingUp className="mr-2 h-4 w-4" />
                Marketing
              </TabsTrigger>
              <TabsTrigger value="desenvolvimento" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                <Code className="mr-2 h-4 w-4" />
                Desenvolvimento
              </TabsTrigger>
              <TabsTrigger value="ecommerce-serv" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ShoppingCart className="mr-2 h-4 w-4" />
                E-commerce
              </TabsTrigger>
              <TabsTrigger value="automacao" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Setup completo das campanhas</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Otimização diária por IA</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Relatórios semanais detalhados</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />ROI garantido em 30 dias</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-primary">AOA 150.000</span><span className="text-sm text-muted-foreground">/mês</span></div>
                        <div className="flex items-center"><Star className="h-4 w-4 text-secondary fill-current" /><span className="text-sm ml-1">4.9</span></div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild><a href="/contato">Começar Agora</a></Button>
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Auditoria técnica completa</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Otimização on-page e off-page</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Link building premium</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Monitoramento 24/7</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-secondary">AOA 100.000</span><span className="text-sm text-muted-foreground">/mês</span></div>
                        <div className="flex items-center"><Star className="h-4 w-4 text-secondary fill-current" /><span className="text-sm ml-1">4.8</span></div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild><a href="/contato">Dominar Google</a></Button>
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Conteúdo diário personalizado</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Stories e reels profissionais</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Engajamento ativo</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Relatórios de performance</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-primary">AOA 75.000</span><span className="text-sm text-muted-foreground">/mês</span></div>
                        <div className="flex items-center"><Star className="h-4 w-4 text-secondary fill-current" /><span className="text-sm ml-1">4.7</span></div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline" asChild><a href="/contato">Crescer nas Redes</a></Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Desenvolvimento Tab */}
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />React, Next.js, Node.js</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Design responsivo premium</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Integração com APIs</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Deploy e manutenção</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-secondary">AOA 200.000</span><span className="text-sm text-muted-foreground">/projeto</span></div>
                        <div className="flex items-center"><Clock className="h-4 w-4 text-muted-foreground mr-1" /><span className="text-sm">30 dias</span></div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild><a href="/contato">Solicitar Orçamento</a></Button>
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Módulos personalizados</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Integração contábil/fiscal</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Relatórios avançados</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Suporte dedicado</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-primary">AOA 500.000</span><span className="text-sm text-muted-foreground">/projeto</span></div>
                        <div className="flex items-center"><Clock className="h-4 w-4 text-muted-foreground mr-1" /><span className="text-sm">90 dias</span></div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild><a href="/contato">Transformar Gestão</a></Button>
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />React Native / Flutter</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Push notifications</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Publicação nas stores</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Analytics integrado</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-secondary">AOA 350.000</span><span className="text-sm text-muted-foreground">/projeto</span></div>
                        <div className="flex items-center"><Clock className="h-4 w-4 text-muted-foreground mr-1" /><span className="text-sm">60 dias</span></div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline" asChild><a href="/contato">Criar App</a></Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* E-commerce Serviços Tab */}
            <TabsContent value="ecommerce-serv" className="space-y-8">
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Design focado em conversão</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Pagamentos integrados</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Gestão de estoque</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />SEO otimizado</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-primary">AOA 180.000</span><span className="text-sm text-muted-foreground">/projeto</span></div>
                        <div className="flex items-center"><Clock className="h-4 w-4 text-muted-foreground mr-1" /><span className="text-sm">21 dias</span></div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild><a href="/contato">Criar Loja Agora</a></Button>
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Copywriting persuasivo</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Design psicológico</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />A/B testing incluso</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Analytics avançado</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-secondary">AOA 60.000</span><span className="text-sm text-muted-foreground">/página</span></div>
                        <div className="flex items-center"><Clock className="h-4 w-4 text-muted-foreground mr-1" /><span className="text-sm">7 dias</span></div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild><a href="/contato">Converter Mais</a></Button>
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Conteúdo especializado</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Design profissional</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Plataforma de vendas</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Estratégia de lançamento</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-primary">AOA 80.000</span><span className="text-sm text-muted-foreground">/produto</span></div>
                        <div className="flex items-center"><Clock className="h-4 w-4 text-muted-foreground mr-1" /><span className="text-sm">14 dias</span></div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline" asChild><a href="/contato">Monetizar Conhecimento</a></Button>
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Workflows inteligentes</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Integração com sistemas</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Notificações automáticas</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Relatórios em tempo real</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-secondary">AOA 90.000</span><span className="text-sm text-muted-foreground">/processo</span></div>
                        <div className="flex items-center"><Clock className="h-4 w-4 text-muted-foreground mr-1" /><span className="text-sm">10 dias</span></div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild><a href="/contato">Automatizar Agora</a></Button>
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />KPIs personalizados</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Gráficos interativos</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Alertas inteligentes</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Acesso mobile</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-primary">AOA 120.000</span><span className="text-sm text-muted-foreground">/dashboard</span></div>
                        <div className="flex items-center"><Clock className="h-4 w-4 text-muted-foreground mr-1" /><span className="text-sm">15 dias</span></div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild><a href="/contato">Visualizar Dados</a></Button>
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
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />APIs personalizadas</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Sincronização em tempo real</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Backup automático</div>
                      <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Monitoramento 24/7</div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div><span className="text-2xl font-bold text-secondary">AOA 160.000</span><span className="text-sm text-muted-foreground">/integração</span></div>
                        <div className="flex items-center"><Clock className="h-4 w-4 text-muted-foreground mr-1" /><span className="text-sm">20 dias</span></div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline" asChild><a href="/contato">Conectar Sistemas</a></Button>
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
                <div className="mt-4"><span className="text-4xl font-bold text-primary">AOA 150.000</span><span className="text-muted-foreground">/mês</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Site institucional</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />SEO básico</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Gestão de redes sociais</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Suporte por email</div>
                </div>
                <Button className="w-full mt-6" asChild><a href="/contato">Começar Agora</a></Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary/50 shadow-lg shadow-primary/10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Mais Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Growth</CardTitle>
                <CardDescription>Para empresas em crescimento</CardDescription>
                <div className="mt-4"><span className="text-4xl font-bold text-primary">AOA 300.000</span><span className="text-muted-foreground">/mês</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Tudo do Starter +</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />E-commerce completo</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Tráfego pago otimizado</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Automação de processos</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-primary mr-2" />Suporte prioritário</div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" asChild><a href="/contato">Acelerar Crescimento</a></Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>Soluções corporativas completas</CardDescription>
                <div className="mt-4"><span className="text-4xl font-bold text-secondary">AOA 600.000</span><span className="text-muted-foreground">/mês</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Tudo do Growth +</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Sistema ERP personalizado</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />App mobile nativo</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Dashboard executivo</div>
                  <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-secondary mr-2" />Gerente dedicado</div>
                </div>
                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild><a href="/contato">Dominar Mercado</a></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que Escolher MTO?</h2>
            <p className="text-muted-foreground">Vantagens exclusivas para nossos clientes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Suporte & Garantia</h3>
              <p className="text-muted-foreground">
                Suporte técnico especializado com atendimento próximo na Huíla e suporte remoto ágil para clientes em todo o território nacional.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Alcance Nacional</h3>
              <p className="text-muted-foreground">
                Desenvolvimento e entrega de sistemas e softwares para empresas de Cabinda ao Cunene, com a confiança de uma sede física no Lubango.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Qualidade de Software</h3>
              <p className="text-muted-foreground">
                Todas as nossas soluções digitais passam por testes rigorosos de segurança e performance, garantindo sistemas robustos e escaláveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Precisa de uma <span className="text-primary">Configuração</span> Personalizada?
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossa equipe técnica monta a solução perfeita para suas necessidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Solicitar Orçamento Personalizado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Falar com Especialista
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
