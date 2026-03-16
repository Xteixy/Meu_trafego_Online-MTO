import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  Target,
  ExternalLink,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  Code,
  Building,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const projects = [
  {
    title: "ernice.com",
    category: "E-commerce Tech",
    description: "Loja online líder em Angola especializada em computadores de alta performance e tecnologia de ponta.",
    tags: ["E-commerce", "Performance", "Angola"],
    color: "from-blue-600 to-cyan-500",
    icon: ShoppingCart,
    rating: 5.0,
    badge: "Projeto Real",
    badgeColor: "bg-green-500/20 text-green-400 border-green-500/30",
    link: "https://ernice.com",
  },
  {
    title: "Portal Corporativo Nexum",
    category: "Site Corporativo",
    description: "Site institucional moderno com blog integrado, SEO avançado e painel administrativo.",
    tags: ["React", "CMS", "Analytics"],
    color: "from-blue-500 to-indigo-600",
    icon: Building,
    rating: 4.9,
    badge: "Enterprise",
    badgeColor: "bg-secondary/20 text-secondary",
  },
  {
    title: "App de Delivery RapidoAO",
    category: "App Mobile",
    description: "Aplicativo de delivery para Angola com rastreamento em tempo real e integração com pagamentos locais.",
    tags: ["React Native", "Node.js", "Maps"],
    color: "from-orange-500 to-red-600",
    icon: Smartphone,
    rating: 4.8,
    badge: "Mobile",
    badgeColor: "bg-orange-500/20 text-orange-400",
  },
  {
    title: "Landing Page TurboConvert",
    category: "Landing Page",
    description: "Landing page de alta conversão para campanha de lançamento com taxa de conversão de 8.3%.",
    tags: ["Performance", "A/B Test", "SEO"],
    color: "from-purple-500 to-pink-600",
    icon: Target,
    rating: 5.0,
    badge: "Alta Conversão",
    badgeColor: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Dashboard Analítico BI360",
    category: "Sistema Web",
    description: "Dashboard executivo com análise de dados em tempo real, KPIs e relatórios automatizados.",
    tags: ["Next.js", "Charts.js", "AI"],
    color: "from-cyan-500 to-blue-600",
    icon: TrendingUp,
    rating: 4.9,
    badge: "BI & Analytics",
    badgeColor: "bg-cyan-500/20 text-cyan-400",
  },
  {
    title: "Sistema ERP Gestão Total",
    category: "ERP Empresarial",
    description: "Sistema de gestão empresarial integrado: financeiro, RH, estoque e CRM num só lugar.",
    tags: ["Full Stack", "PostgreSQL", "API"],
    color: "from-slate-500 to-gray-700",
    icon: Code,
    rating: 4.7,
    badge: "Enterprise",
    badgeColor: "bg-secondary/20 text-secondary",
  },
  {
    title: "Campanha SEO MarcaFort",
    category: "Marketing Digital",
    description: "Estratégia de SEO que levou o cliente à 1ª página do Google em 60 dias com aumento de 300% no tráfego.",
    tags: ["SEO", "Link Building", "Analytics"],
    color: "from-yellow-500 to-orange-600",
    icon: Globe,
    rating: 5.0,
    badge: "Resultado Comprovado",
    badgeColor: "bg-primary/20 text-primary",
  },
  {
    title: "Automação de Processos LogiTech",
    category: "Automação",
    description: "Automação completa de processos logísticos com integração de sistemas e redução de 70% no trabalho manual.",
    tags: ["Node.js", "Webhooks", "API"],
    color: "from-teal-500 to-green-600",
    icon: Zap,
    rating: 4.9,
    badge: "IA Powered",
    badgeColor: "bg-teal-500/20 text-teal-400",
  },
]

const stats = [
  { value: "50+", label: "Projetos Entregues" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "3x", label: "Aumento Médio de Vendas" },
  { value: "5★", label: "Avaliação Média" },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-lg px-4 py-2">
              Nosso Portfólio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Projetos que <span className="text-primary">Transformam</span>{" "}
              <span className="text-secondary">Negócios</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conheça os projetos que desenvolvemos para clientes de Angola e do mundo. Cada projeto é uma história de
              <strong className="text-primary"> resultados reais</strong> e transformação digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="/contato">
                  Quero um Projeto Assim
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                asChild
              >
                <a href="/produtos">Ver Nossos Serviços</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">Projetos Executados pela MTO</h2>
            <p className="text-muted-foreground">Casos reais de sucesso com resultados comprovados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ernice.com - Destaque Principal */}
            <Card className="border-primary/30 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md bg-background/50 group overflow-hidden">
              <div className="h-2 bg-primary w-full" />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-green-500/20 text-green-500 border-green-500/30 mb-2">Projeto Ativo</Badge>
                  <Globe className="h-5 w-5 text-primary opacity-50" />
                </div>
                <CardTitle className="text-2xl">ernice.com</CardTitle>
                <CardDescription>Loja de Computadores & Tecnologia em Angola</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Plataforma de e-commerce completa, otimizada para vendas de hardware e assistência técnica especializada.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="https://ernice.com" target="_blank" rel="noopener noreferrer">
                    Visitar Site <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Projetos Brevemente */}
            <Card className="border-dashed border-muted-foreground/30 bg-transparent flex flex-center items-center justify-center p-8 opacity-60">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full border border-dashed border-muted-foreground/50 flex items-center justify-center mx-auto">
                  <Zap className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold">Novo Projeto</h3>
                <p className="text-xs text-muted-foreground">Em fase final de desenvolvimento</p>
                <Badge variant="outline">Brevemente</Badge>
              </div>
            </Card>

            <Card className="border-dashed border-muted-foreground/30 bg-transparent flex flex-center items-center justify-center p-8 opacity-60">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full border border-dashed border-muted-foreground/50 flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold">Campanha Marketing</h3>
                <p className="text-xs text-muted-foreground">Estratégia de escala em progresso</p>
                <Badge variant="outline">Brevemente</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Trabalhos <span className="text-primary">Recentes</span>
            </h2>
            <p className="text-muted-foreground">Uma seleção dos nossos melhores projetos entregues</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <Card
                  key={project.title}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-full h-44 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mb-4 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="relative z-10 text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <Icon className="h-8 w-8" />
                        </div>
                        <p className="text-xs font-medium opacity-80">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={project.badgeColor}>{project.badge}</Badge>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-secondary fill-current" />
                        <span className="text-xs ml-1">{project.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-base leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-xs">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300" asChild>
                      <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Pronto para ser o <span className="text-primary">próximo caso</span> de sucesso?
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato e vamos criar algo incrível juntos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="/contato">
                  Iniciar Meu Projeto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                asChild
              >
                <a href="/produtos">Ver Serviços & Preços</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
