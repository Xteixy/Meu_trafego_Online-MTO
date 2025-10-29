import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User, TrendingUp, Code, ShoppingCart, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "Como Aumentar Suas Vendas Online em 300% com Tráfego Pago",
    excerpt:
      "Estratégias comprovadas que transformaram pequenas empresas em gigantes do e-commerce. Descubra os segredos que a concorrência não quer que você saiba.",
    category: "Marketing Digital",
    readTime: "8 min",
    date: "15 Jan 2024",
    author: "Equipe MTO",
    image: "/digital-marketing-dashboard.png",
  }

  const blogPosts = [
    {
      title: "SEO Local: Domine Sua Região e Multiplique Clientes",
      excerpt:
        "Técnicas avançadas para aparecer no topo do Google Maps e conquistar clientes locais antes da concorrência.",
      category: "SEO",
      readTime: "6 min",
      date: "12 Jan 2024",
      author: "Carlos Silva",
      image: "/local-seo-google-maps-ranking.png",
    },
    {
      title: "E-commerce que Converte: 15 Estratégias Infalíveis",
      excerpt: "Transforme visitantes em compradores com essas táticas psicológicas e técnicas de conversão testadas.",
      category: "E-commerce",
      readTime: "10 min",
      date: "10 Jan 2024",
      author: "Ana Costa",
      image: "/ecommerce-conversion-optimization-shopping-cart.png",
    },
    {
      title: "Automação Empresarial: Economize 20h por Semana",
      excerpt: "Processos automatizados que eliminam tarefas repetitivas e liberam tempo para focar no crescimento.",
      category: "Automação",
      readTime: "7 min",
      date: "8 Jan 2024",
      author: "Roberto Lima",
      image: "/business-automation-workflow-processes.png",
    },
    {
      title: "Hardware Premium: Por que Investir Faz Diferença",
      excerpt:
        "Como equipamentos de alta performance impactam diretamente na produtividade e resultados da sua empresa.",
      category: "Tecnologia",
      readTime: "5 min",
      date: "5 Jan 2024",
      author: "Tech MTO",
      image: "/premium-computer-hardware-performance.png",
    },
    {
      title: "Landing Pages que Vendem: Guia Completo 2024",
      excerpt: "Elementos essenciais, copywriting persuasivo e design que converte visitantes em leads qualificados.",
      category: "Desenvolvimento",
      readTime: "12 min",
      date: "3 Jan 2024",
      author: "Design Team",
      image: "/high-converting-landing-page-design.png",
    },
    {
      title: "Métricas que Importam: KPIs para Crescimento Real",
      excerpt: "Pare de medir vaidades e foque nos números que realmente impactam o crescimento do seu negócio.",
      category: "Analytics",
      readTime: "9 min",
      date: "1 Jan 2024",
      author: "Data Team",
      image: "/business-analytics-dashboard-kpi-metrics.png",
    },
  ]

  const categories = [
    { name: "Marketing Digital", count: 12, icon: TrendingUp },
    { name: "Desenvolvimento", count: 8, icon: Code },
    { name: "E-commerce", count: 6, icon: ShoppingCart },
    { name: "Tecnologia", count: 10, icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30">📚 Centro de Conhecimento MTO</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Estratégias que <span className="text-primary">Multiplicam</span> Resultados
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conteúdo exclusivo, cases reais e insights que transformam negócios. Aprenda com quem já fez mais de 500
              empresas crescerem.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">⭐ Post em Destaque</Badge>
            <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{featuredPost.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-balance hover:text-primary transition-colors">
                      <Link href="/blog/como-aumentar-vendas-online-300-trafego-pago">{featuredPost.title}</Link>
                    </h2>
                    <p className="text-muted-foreground text-pretty">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                      Ler Artigo Completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore por Categoria</h2>
            <p className="text-muted-foreground">Encontre conteúdo específico para sua área de interesse</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.name}
                  className="group hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} artigos</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Últimos Artigos</h2>
            <p className="text-muted-foreground">Conteúdo atualizado semanalmente com as melhores estratégias</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-balance group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm text-pretty">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Carregar Mais Artigos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Receba <span className="text-primary">Estratégias Exclusivas</span> por Email
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Conteúdo premium, cases de sucesso e insights que não compartilhamos em lugar nenhum
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Quero Receber
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              📧 Mais de 10.000 empresários já recebem nosso conteúdo exclusivo
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
