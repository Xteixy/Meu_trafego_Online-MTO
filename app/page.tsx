import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, TrendingUp, Cpu, Database, Code, BarChart3, ShoppingCart, Globe, FileText, Newspaper, Building, Eye, Download, Star, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"
import { LeadCaptureForm } from "@/components/lead-capture-form"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float lg:animate-pulse-glow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float lg:animate-rotate-slow"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse-glow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30 text-sm font-medium animate-bounce-in">
                  🚀 Revolucione Seu Negócio Digital
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight animate-fade-in">
                  Domine o <span className="gradient-text animate-glow">Tráfego Online</span> e
                  <span className="gradient-text animate-glow"> Multiplique</span> Seus Resultados
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl animate-slide-up">
                  Produtos eletrônicos de alta performance + Serviços digitais que convertem. A combinação perfeita para
                  empresas que querem <strong className="text-primary animate-glow">dominar</strong> seu mercado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 hover-lift neon-border animate-pulse-glow"
                >
                  Quero Dominar Meu Mercado
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6 bg-transparent hover-lift"
                >
                  Ver Casos de Sucesso
                  <Target className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <ScrollAnimation delay={200} className="text-center hover-lift">
                  <div className="text-3xl font-bold gradient-text animate-bounce-in">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes Ativos</div>
                </ScrollAnimation>
                <ScrollAnimation delay={400} className="text-center hover-lift">
                  <div className="text-3xl font-bold gradient-text animate-bounce-in">300%</div>
                  <div className="text-sm text-muted-foreground">ROI Médio</div>
                </ScrollAnimation>
                <ScrollAnimation delay={600} className="text-center hover-lift">
                  <div className="text-3xl font-bold gradient-text animate-bounce-in">24/7</div>
                  <div className="text-sm text-muted-foreground">Suporte</div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300} className="relative">
              {/* Hero Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 rounded-full blur-3xl animate-pulse-glow scale-150"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 rounded-full blur-2xl animate-float scale-125"></div>
              
              {/* Doutor Agente Cutout */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative group">
                  {/* Spotlight Ring */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-full blur-xl scale-110 animate-pulse-glow group-hover:scale-125 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 rounded-full blur-lg scale-105 animate-float group-hover:scale-115 transition-all duration-500"></div>
                  
                  {/* Doutor Agente Image */}
                  <div className="relative z-20">
                    <img
                      src="/doctor_agente.png"
                      alt="Doutor Agente - Especialista em Tráfego Digital"
                      className="w-96 h-auto max-w-full object-contain animate-scale-in animate-float will-change-transform transition-transform duration-500 ease-out hover:scale-110 hover:-rotate-1 mix-blend-lighten dark:mix-blend-screen"
                      style={{
                        WebkitMaskImage:
                          "radial-gradient(320px 360px at 50% 42%, black 72%, transparent 96%)",
                        maskImage:
                          "radial-gradient(320px 360px at 50% 42%, black 72%, transparent 96%)",
                        filter:
                          "drop-shadow(0 20px 50px rgba(99,102,241,0.55)) drop-shadow(0 10px 25px rgba(139,92,255,0.35))",
                        animationDuration: "12s",
                        animationTimingFunction: "ease-in-out",
                      }}
                    />
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: "1.5s" }}></div>
                    <div className="absolute top-1/4 -left-8 w-5 h-5 bg-secondary/30 rounded-full animate-bounce" style={{ animationDelay: "2s" }}></div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10 rounded-full blur-2xl scale-110 animate-pulse-glow"></div>
                </div>
              </div>
              
              {/* Floating Data Points */}
              <div className="absolute top-10 right-10 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-3 animate-float">
                <div className="text-primary font-bold text-sm">+300%</div>
                <div className="text-xs text-muted-foreground">Tráfego</div>
              </div>
              
              <div className="absolute bottom-20 left-10 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-lg p-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-secondary font-bold text-sm">ROI 200%</div>
                <div className="text-xs text-muted-foreground">Retorno</div>
              </div>
              
              <div className="absolute top-1/2 -right-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-3 animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-primary font-bold text-sm">24/7</div>
                <div className="text-xs text-muted-foreground">Suporte</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Development Plans Section */}
      <section id="produtos" className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float md:animate-slide-left"></div>
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float md:animate-slide-right"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 animate-bounce-in">
              Desenvolvimento Full Stack
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-balance animate-slide-up">
              Soluções Web que <span className="gradient-text animate-glow">Transformam</span> Negócios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in">
              Desenvolvimento completo de sites, sistemas e e-commerce com tecnologia de ponta e design premium
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <Card className="group glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors animate-pulse-glow">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">Sites e Landing Pages</CardTitle>
                  <CardDescription>Presença digital profissional e conversão otimizada</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Design responsivo e moderno</li>
                    <li>• SEO otimizado para Google</li>
                    <li>• Integração com formulários</li>
                    <li>• Analytics e relatórios</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-primary">AOA 2.997.000</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">AOA 4.997.000</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-xs">
                        -40%
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover-lift">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="group glass-effect border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors animate-pulse-glow">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="group-hover:text-secondary transition-colors">Sistemas de Automação</CardTitle>
                  <CardDescription>Automatize processos e aumente produtividade</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• CRM e gestão de clientes</li>
                    <li>• Automação de marketing</li>
                    <li>• Dashboard de métricas</li>
                    <li>• Integração com APIs</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-secondary">AOA 8.997.000</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">AOA 12.997.000</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-xs">
                        -31%
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 hover-lift">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="group glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors animate-pulse-glow">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">E-commerce e Blog</CardTitle>
                  <CardDescription>Venda online e conteúdo que converte</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Loja virtual completa</li>
                    <li>• Sistema de pagamentos</li>
                    <li>• Blog com SEO avançado</li>
                    <li>• Gestão de estoque</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-primary">AOA 15.997.000</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">AOA 22.997.000</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-xs">
                        -30%
                      </Badge>
                    </div>
                  </div>
                  <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover-lift">
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* CTA para Planos Personalizados */}
          <div className="text-center mt-16">
            <ScrollAnimation delay={400}>
              <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-border/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Precisa de uma <span className="text-primary">Solução Personalizada</span>?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nossa equipe de desenvolvedores full stack cria soluções sob medida para suas necessidades específicas
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
                    Ver Portfólio Completo
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl lg:animate-float animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl lg:animate-float animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/30 animate-bounce-in">Serviços Digitais</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-balance animate-slide-up">
              Soluções que <span className="gradient-text animate-glow">Convertem</span> Visitantes em Clientes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in">
              Estratégias digitais comprovadas que geram resultados mensuráveis para seu negócio
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation delay={100}>
              <Card className="group glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors animate-pulse-glow">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Tráfego & SEO</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Domine o Google e multiplique suas vendas</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground bg-transparent transition-all duration-300 hover-lift"
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="group glass-effect border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors animate-pulse-glow">
                    <Code className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                    Desenvolvimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Sistemas, apps e sites que vendem</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="group-hover:bg-secondary group-hover:text-secondary-foreground bg-transparent transition-all duration-300 hover-lift"
                  >
                    Ver Portfolio
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="group glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors animate-pulse-glow">
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">E-commerce</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Lojas online que convertem 24/7</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground bg-transparent transition-all duration-300 hover-lift"
                  >
                    Criar Loja
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="group glass-effect border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors animate-pulse-glow">
                    <BarChart3 className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-secondary transition-colors">Automação</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Processos inteligentes que economizam tempo</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="group-hover:bg-secondary group-hover:text-secondary-foreground bg-transparent transition-all duration-300 hover-lift"
                  >
                    Automatizar
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float lg:animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float lg:animate-rotate-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation className="text-center space-y-4 mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 animate-bounce-in">
              Templates Web Profissionais
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-balance animate-slide-up">
              Escolha o <span className="gradient-text animate-glow">Template Perfeito</span> para Seu Negócio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in">
              Templates modernos e responsivos para diferentes tipos de negócios. 
              Design profissional, código limpo e otimização SEO incluídos.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Template 1 - Corporate */}
            <ScrollAnimation delay={100}>
              <Card className="group glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
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
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                      <span className="text-xl font-bold text-primary">AOA 299.000</span>
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
            </ScrollAnimation>

            {/* Template 2 - E-commerce */}
            <ScrollAnimation delay={200}>
              <Card className="group glass-effect border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
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
                      Painel administrativo
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                      <span className="text-xl font-bold text-secondary">AOA 599.000</span>
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
            </ScrollAnimation>

            {/* Template 3 - Landing Page */}
            <ScrollAnimation delay={300}>
              <Card className="group glass-effect border-primary/20 hover:border-primary/50 transition-all duration-500 hover-lift neon-border animate-scale-in">
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
                      <span className="text-xl font-bold text-primary">AOA 199.000</span>
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
            </ScrollAnimation>
          </div>

          {/* CTA para Ver Mais Templates */}
          <div className="text-center">
            <ScrollAnimation delay={400}>
              <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-border/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Mais de <span className="text-primary">80 Templates</span> Disponíveis
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Explore nossa biblioteca completa de templates para sites, blogs, e-commerces, 
                  portais de notícias e muito mais. Todos com design moderno e código otimizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <a href="/templates">
                      Ver Todos os Templates
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    Preview Gratuito
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-24 bg-gradient-to-r from-primary/20 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-10 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float lg:animate-pulse-glow"></div>
        <div
          className="absolute bottom-10 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float lg:animate-rotate-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-balance animate-slide-up">
                Pronto para <span className="gradient-text animate-glow">Dominar</span> Seu Mercado?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty animate-fade-in">
                Junte-se a mais de 500 empresas que já transformaram seus resultados com MTO. 
                Receba uma consultoria gratuita e descubra como multiplicar suas vendas.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">🚀</div>
                  <div className="text-sm text-muted-foreground">Consultoria Gratuita</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">💎</div>
                  <div className="text-sm text-muted-foreground">E-book Exclusivo</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <LeadCaptureForm
                title="Transformação Garantida"
                subtitle="Receba uma consultoria gratuita de 30 minutos + e-book exclusivo"
                variant="premium"
                showCompany={true}
                showPhone={true}
                showMessage={true}
                showInterests={true}
                ctaText="Quero Minha Consultoria Gratuita"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <NewsletterSignup
            title="Receba Estratégias Exclusivas"
            subtitle="Insights semanais que multiplicam resultados + ofertas especiais para assinantes"
            variant="premium"
            showBenefits={true}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
