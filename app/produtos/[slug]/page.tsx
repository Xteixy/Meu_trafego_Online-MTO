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
// Dados dos produtos e serviços
const products = {
  "sites-corporativos": {
    id: "sites-corporativos",
    name: "Sites Corporativos Premium",
    shortName: "Site Corporativo",
    category: "Desenvolvimento",
    price: 100000.0,
    originalPrice: 150000.0,
    discount: 29,
    rating: 5.0,
    reviews: 124,
    inStock: true,
    stockCount: 10,
    images: [
      "/business-automation-workflow-processes.png",
      "/digital-marketing-dashboard.png"
    ],
    mainImage: "/business-automation-workflow-processes.png",
    description: "Presença digital robusta e profissional para grandes empresas e marcas.",
    longDescription: "O Site Corporativo da MTO é desenvolvido com as tecnologias mais modernas do mercado (Next.js 15), garantindo velocidade, segurança e um design que transmite autoridade. Focado em empresas que buscam consolidar sua marca no ambiente digital.",
    features: [
      "Design exclusivo e responsivo",
      "Otimização para mecanismos de busca (SEO)",
      "Blog integrado para marketing de conteúdo",
      "Segurança avançada (SSL + WAF)",
      "Integração com analytics e CRM",
      "Painel administrativo intuitivo"
    ],
    specifications: {
      "Tecnologia": "Next.js + Tailwind CSS",
      "Hospedagem": "Vercel / AWS",
      "SEO": "Avançado",
      "Suporte": "24/7 Dedicado",
      "Entrega": "15-20 dias úteis",
      "Certificado SSL": "Incluso"
    },
    benefits: [
      "Maior autoridade de marca",
      "Geração de leads qualificados",
      "Navegação ultra-rápida",
      "Fácil atualização de conteúdo"
    ],
    useCases: [
      "Empresas de médio e grande porte",
      "Consultorias e serviços B2B",
      "Indústrias e manufatura",
      "Escritórios de advocacia / contabilidade"
    ],
    warranty: {
      period: "1 ano",
      coverage: "Manutenção técnica e correções inclusas",
      support: "Suporte prioritário"
    },
    shipping: {
      free: true,
      time: "Imediato após setup",
      regions: ["Global"]
    },
    relatedProducts: [
      "sites-institucionais",
      "e-commerce",
      "hospedagem"
    ]
  },
  "e-commerce": {
    id: "e-commerce",
    name: "E-commerce de Alta Performance",
    shortName: "Loja Virtual",
    category: "Vendas Online",
    price: 150000.0,
    originalPrice: 200000.0,
    discount: 16,
    rating: 4.9,
    reviews: 89,
    inStock: true,
    stockCount: 5,
    images: [
      "/ecommerce-conversion-optimization-shopping-cart.png",
      "/digital-marketing-dashboard.png"
    ],
    mainImage: "/ecommerce-conversion-optimization-shopping-cart.png",
    description: "Loja virtual completa com foco em conversão e experiência do usuário.",
    longDescription: "Nossa solução de E-commerce é projetada para vender. Com um checkout simplificado, integração com múltiplos meios de pagamento e gestão de estoque em tempo real, sua empresa terá tudo o que precisa para escalar as vendas online.",
    features: [
      "Sistema de carrinho e checkout seguro",
      "Gestão completa de catálogo e estoque",
      "Integração com gateways de pagamento",
      "Calculadora de frete automática",
      "Relatórios de vendas detalhados",
      "Cupom de desconto e promoções"
    ],
    specifications: {
      "Frontend": "Next.js / React",
      "Backend": "PostgreSQL / Prisma",
      "Pagamentos": "Stripe / Multicaixa Express",
      "Estoque": "Tempo real",
      "Certificação": "PCI Compliance",
      "Segurança": "Firewall Enterprise"
    },
    benefits: [
      "Vendas 24/7 automatizadas",
      "Experiência mobile impecável",
      "Escalabilidade para milhares de acessos",
      "Baixo custo de manutenção"
    ],
    useCases: [
      "Lojas de varejo",
      "Marcas de moda e acessórios",
      "Venda de produtos digitais",
      "Supermercados e delivery"
    ],
    warranty: {
      period: "1 ano",
      coverage: "Manutenção de segurança e atualizações",
      support: "Suporte 24h para vendas"
    },
    shipping: {
      free: true,
      time: "Setup em 25 dias úteis",
      regions: ["Global"]
    },
    relatedProducts: [
      "landing-pages",
      "hospedagem",
      "dominio"
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
                        className={`h-5 w-5 ${i < Math.floor(product.rating)
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
                      AOA {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                    {product.originalPrice > product.price && (
                      <>
                        <span className="text-xl text-muted-foreground line-through">
                          AOA {product.originalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
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
      "desenvolvimento web",
      "sites angola",
      "e-commerce profissional"
    ],
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.mainImage],
    },
  }
}
