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
            <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-4 py-2">Hardware Premium</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Produtos <span className="text-primary">Eletrônicos</span> de
              <span className="text-secondary"> Alta Performance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Equipamentos selecionados para empresas que exigem o máximo em qualidade, performance e confiabilidade.
              Garantia estendida e suporte técnico especializado.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="hds" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-card">
              <TabsTrigger
                value="hds"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Database className="mr-2 h-4 w-4" />
                HDs & Armazenamento
              </TabsTrigger>
              <TabsTrigger
                value="leds"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Zap className="mr-2 h-4 w-4" />
                LEDs & Iluminação
              </TabsTrigger>
              <TabsTrigger
                value="componentes"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Cpu className="mr-2 h-4 w-4" />
                Componentes
              </TabsTrigger>
              <TabsTrigger
                value="templates"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Globe className="mr-2 h-4 w-4" />
                Templates Web
              </TabsTrigger>
            </TabsList>

            {/* HDs & Storage Tab */}
            <TabsContent value="hds" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <HardDrive className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary">Mais Vendido</Badge>
                    </div>
                    <CardTitle className="text-xl">SSD NVMe 2TB Enterprise</CardTitle>
                    <CardDescription>Velocidade extrema para aplicações críticas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Leitura: 7.000 MB/s
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Escrita: 6.500 MB/s
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Garantia: 5 anos
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        MTBF: 2.5M horas
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">AOA 1.299.000</span>
                          <span className="text-sm text-muted-foreground line-through ml-2">AOA 1.599.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.9</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a href="/produtos/ssd-nvme-2tb">Ver Detalhes</a>
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
                      <Badge variant="outline">Enterprise</Badge>
                    </div>
                    <CardTitle className="text-xl">HD SATA 4TB Servidor</CardTitle>
                    <CardDescription>Confiabilidade 24/7 para servidores</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        RPM: 7.200
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Cache: 256MB
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Garantia: 3 anos
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Uso: 24/7
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">AOA 899.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.8</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-transparent" 
                        variant="outline"
                        asChild
                      >
                        <a href="/produtos/ssd-nvme-2tb">Ver Detalhes</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Database className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">Novo</Badge>
                    </div>
                    <CardTitle className="text-xl">SSD Externo 1TB USB-C</CardTitle>
                    <CardDescription>Portabilidade e velocidade em suas mãos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Velocidade: 1.050 MB/s
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        USB-C 3.2 Gen 2
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Resistente a quedas
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Criptografia AES
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">AOA 699.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">5.0</span>
                        </div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Comprar Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* LEDs Tab */}
            <TabsContent value="leds" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Zap className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">Smart</Badge>
                    </div>
                    <CardTitle className="text-xl">Painel LED 60x60 Smart</CardTitle>
                    <CardDescription>Iluminação inteligente para escritórios</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Potência: 40W
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Controle via App
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Dimmerizável
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Vida útil: 50.000h
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">AOA 299.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.7</span>
                        </div>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Comprar Kit
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Monitor className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge variant="outline">Profissional</Badge>
                    </div>
                    <CardTitle className="text-xl">Refletor LED 200W</CardTitle>
                    <CardDescription>Iluminação externa de alta potência</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Luminosidade: 22.000 lm
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        IP66 - À prova d'água
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Sensor de movimento
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Garantia: 2 anos
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">AOA 449.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.9</span>
                        </div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline">
                        Ver Detalhes
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
                      <Badge className="bg-primary/20 text-primary">RGB</Badge>
                    </div>
                    <CardTitle className="text-xl">Fita LED RGB 5m Smart</CardTitle>
                    <CardDescription>Ambientação colorida controlável</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        16 milhões de cores
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Controle por voz
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Sincronização musical
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Adesivo 3M incluso
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">AOA 199.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.6</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Adicionar ao Carrinho</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Components Tab */}
            <TabsContent value="componentes" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary">Gaming</Badge>
                    </div>
                    <CardTitle className="text-xl">Processador Intel i9-13900K</CardTitle>
                    <CardDescription>Performance extrema para workstations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        24 cores / 32 threads
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Base: 3.0GHz / Boost: 5.8GHz
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Cache: 36MB
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Socket LGA1700
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">AOA 2.899.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.8</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Comprar Agora</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Monitor className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge className="bg-secondary/20 text-secondary">RTX</Badge>
                    </div>
                    <CardTitle className="text-xl">Placa de Vídeo RTX 4080</CardTitle>
                    <CardDescription>Gráficos profissionais e gaming</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        16GB GDDR6X
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        DLSS 3.0
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        Ray Tracing
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        4K Gaming
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-secondary">AOA 6.999.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.9</span>
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
                      <Badge variant="outline">DDR5</Badge>
                    </div>
                    <CardTitle className="text-xl">Memória RAM 32GB DDR5</CardTitle>
                    <CardDescription>Velocidade extrema para multitasking</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        5600MHz
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Kit 2x16GB
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        RGB Sync
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Garantia vitalícia
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">AOA 1.599.000</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-secondary fill-current" />
                          <span className="text-sm ml-1">4.7</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Comprar Kit</Button>
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
              <h3 className="text-xl font-semibold">Garantia Estendida</h3>
              <p className="text-muted-foreground">
                Até 5 anos de garantia em produtos selecionados com suporte técnico especializado
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Entrega Expressa</h3>
              <p className="text-muted-foreground">
                Entrega em 24h para São Paulo e região metropolitana. Frete grátis acima de R$ 500
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Produtos Testados</h3>
              <p className="text-muted-foreground">
                Todos os produtos passam por rigorosos testes de qualidade antes do envio
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
