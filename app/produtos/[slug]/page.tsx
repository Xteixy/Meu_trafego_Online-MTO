import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Truck, 
  Shield, 
  Clock, 
  Zap,
  Database,
  HardDrive,
  Cpu,
  Monitor,
  Smartphone,
  Star as StarIcon,
  ShoppingCart,
  Heart,
  Share2,
  Download,
  FileText,
  Users,
  TrendingUp
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { OptimizedImage } from "@/components/optimized-image"
import { ConversionTracker } from "@/components/analytics-tracker"

// Dados dos produtos (em produção, viria de uma API)
const products = {
  "ssd-nvme-2tb": {
    id: "ssd-nvme-2tb",
    name: "SSD NVMe 2TB Enterprise",
    shortName: "SSD NVMe 2TB",
    category: "Armazenamento",
    price: 1299.99,
    originalPrice: 1899.99,
    discount: 32,
    rating: 4.9,
    reviews: 2847,
    inStock: true,
    stockCount: 15,
    images: [
      "/business-automation-workflow-processes.png",
      "/digital-marketing-dashboard.png",
      "/ecommerce-conversion-optimization-shopping-cart.png"
    ],
    mainImage: "/business-automation-workflow-processes.png",
    description: "SSD NVMe de última geração com velocidade extrema para aplicações críticas e servidores enterprise.",
    longDescription: "O SSD NVMe 2TB Enterprise é a solução definitiva para empresas que exigem máxima performance e confiabilidade. Com velocidades de leitura de até 7.000 MB/s e escrita de 6.500 MB/s, este SSD revoluciona a experiência de armazenamento.",
    features: [
      "Velocidade de leitura: 7.000 MB/s",
      "Velocidade de escrita: 6.500 MB/s",
      "Interface: PCIe 4.0 x4",
      "Capacidade: 2TB",
      "Garantia: 5 anos",
      "Resistência: 1.200 TBW",
      "Temperatura operacional: 0°C a 70°C",
      "Consumo: 3.3V, 2.8A"
    ],
    specifications: {
      "Capacidade": "2TB",
      "Interface": "PCIe 4.0 x4",
      "Velocidade Leitura": "7.000 MB/s",
      "Velocidade Escrita": "6.500 MB/s",
      "Garantia": "5 anos",
      "Resistência": "1.200 TBW",
      "Formato": "M.2 2280",
      "Protocolo": "NVMe 1.4"
    },
    benefits: [
      "Acelera aplicações em até 10x",
      "Reduz tempo de carregamento",
      "Aumenta produtividade da equipe",
      "Ideal para servidores e workstations",
      "Compatível com todas as placas modernas"
    ],
    useCases: [
      "Servidores enterprise",
      "Workstations profissionais",
      "Edição de vídeo 4K/8K",
      "Renderização 3D",
      "Análise de big data",
      "Virtualização"
    ],
    warranty: {
      period: "5 anos",
      coverage: "Cobertura completa incluindo falhas de fabricação",
      support: "Suporte técnico especializado 24/7"
    },
    shipping: {
      free: true,
      time: "1-2 dias úteis",
      regions: ["Brasil todo", "Mercosul"]
    },
    relatedProducts: [
      "ssd-nvme-1tb",
      "ssd-nvme-4tb",
      "ssd-sata-2tb"
    ]
  },
  "led-profissional": {
    id: "led-profissional",
    name: "LED Profissional RGB",
    shortName: "LED RGB Pro",
    category: "Iluminação",
    price: 299.99,
    originalPrice: 449.99,
    discount: 33,
    rating: 4.8,
    reviews: 1856,
    inStock: true,
    stockCount: 42,
    images: [
      "/digital-marketing-dashboard.png",
      "/business-automation-workflow-processes.png",
      "/ecommerce-conversion-optimization-shopping-cart.png"
    ],
    mainImage: "/digital-marketing-dashboard.png",
    description: "Sistema de iluminação LED profissional com controle via app e automação inteligente.",
    longDescription: "Transforme qualquer ambiente com nossa solução de iluminação LED profissional. Controle total via smartphone, automação inteligente e economia de energia de até 80%.",
    features: [
      "16 milhões de cores",
      "Controle via app iOS/Android",
      "Automação por horário",
      "Economia de energia: 80%",
      "Vida útil: 50.000 horas",
      "Potência: 24W",
      "Luminosidade: 2.400 lumens",
      "Compatível: Alexa, Google Home"
    ],
    specifications: {
      "Potência": "24W",
      "Luminosidade": "2.400 lumens",
      "Cores": "16 milhões",
      "Vida útil": "50.000 horas",
      "Economia": "80%",
      "Controle": "WiFi + Bluetooth",
      "Compatibilidade": "Alexa, Google Home",
      "Garantia": "3 anos"
    },
    benefits: [
      "Reduz conta de energia",
      "Ambiente personalizado",
      "Controle remoto total",
      "Integração com smart home",
      "Instalação simples"
    ],
    useCases: [
      "Escritórios corporativos",
      "Lojas e comércios",
      "Hotéis e restaurantes",
      "Residências inteligentes",
      "Eventos e shows"
    ],
    warranty: {
      period: "3 anos",
      coverage: "Cobertura completa para falhas",
      support: "Suporte técnico 8h-18h"
    },
    shipping: {
      free: true,
      time: "2-3 dias úteis",
      regions: ["Brasil todo"]
    },
    relatedProducts: [
      "led-strip-rgb",
      "led-downlight",
      "led-panel"
    ]
  }
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Breadcrumb */}
                   <div className="pt-24 pb-6 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Início</a>
            <span>/</span>
            <a href="/produtos" className="hover:text-primary transition-colors">Produtos</a>
            <span>/</span>
            <span className="text-foreground">{product.shortName}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
                <OptimizedImage
                  src={product.mainImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(0, 4).map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-card border border-border cursor-pointer hover:border-primary transition-colors">
                    <OptimizedImage
                      src={image}
                      alt={`${product.name} - Imagem ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  {product.category}
                </Badge>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-balance">
                  {product.name}
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews.toLocaleString()} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-primary">
                      R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                    {product.originalPrice > product.price && (
                      <>
                        <span className="text-xl text-muted-foreground line-through">
                          R$ {product.originalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </span>
                        <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                          -{product.discount}%
                        </Badge>
                      </>
                    )}
                  </div>
                  
                  {product.inStock ? (
                    <div className="flex items-center space-x-2 text-green-500">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Em estoque ({product.stockCount} unidades)</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-red-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Fora de estoque</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <ConversionTracker
                    eventName="add_to_cart"
                    category="ecommerce"
                    action="add_to_cart"
                    label={product.name}
                    value={product.price}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 hover-lift flex-1"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Adicionar ao Carrinho
                    </Button>
                  </ConversionTracker>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6 hover-lift"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Favoritar
                  </Button>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center space-x-3 text-sm">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Frete grátis</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Garantia {product.warranty.period}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Entrega em {product.shipping.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Suporte técnico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="descricao" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-background">
              <TabsTrigger value="descricao">Descrição</TabsTrigger>
              <TabsTrigger value="especificacoes">Especificações</TabsTrigger>
              <TabsTrigger value="beneficios">Benefícios</TabsTrigger>
              <TabsTrigger value="casos-uso">Casos de Uso</TabsTrigger>
            </TabsList>

            <TabsContent value="descricao" className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-6">Sobre o {product.shortName}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.longDescription}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Características Principais</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Garantia e Suporte</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span>Período: {product.warranty.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{product.warranty.coverage}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{product.warranty.support}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="especificacoes" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Especificações Técnicas</h2>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-border/50">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Downloads</h2>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Manual do Usuário
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Ficha Técnica
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Drivers (se aplicável)
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="beneficios" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Por que escolher o {product.shortName}?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.benefits.map((benefit, index) => (
                    <Card key={index} className="border-primary/20 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{benefit}</h3>
                            <p className="text-sm text-muted-foreground">
                              Maximize seus resultados com esta funcionalidade exclusiva.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="casos-uso" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Ideal para:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.useCases.map((useCase, index) => (
                    <Card key={index} className="border-secondary/20 hover:border-secondary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Zap className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{useCase}</h3>
                            <p className="text-sm text-muted-foreground">
                              Solução perfeita para este tipo de aplicação.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadCaptureForm
            title="Quer saber mais sobre este produto?"
            subtitle="Nossa equipe técnica especializada está pronta para ajudar você a escolher a solução ideal"
            variant="premium"
            showCompany={true}
            showPhone={true}
            showMessage={true}
            showInterests={false}
            ctaText="Solicitar Informações Técnicas"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup
            title="Receba Ofertas Exclusivas"
            subtitle="Fique por dentro das novidades, promoções e lançamentos da MTO"
            variant="premium"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Gerar metadados dinâmicos
export async function generateMetadata({ params }: ProductPageProps) {
  const product = products[params.slug as keyof typeof products]
  
  if (!product) {
    return {
      title: "Produto não encontrado",
    }
  }

  return {
    title: `${product.name} | MTO - Produtos Premium`,
    description: product.description,
    keywords: [
      product.category.toLowerCase(),
      product.name.toLowerCase(),
      "produtos eletrônicos",
      "hardware premium",
      "tecnologia enterprise"
    ],
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.mainImage],
    },
  }
}
