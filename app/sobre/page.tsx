import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Target,
  Award,
  TrendingUp,
  Zap,
  Globe,
  Star,
  Quote,
  CheckCircle,
  Calendar,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-4 py-2">Nossa História</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Transformando <span className="text-primary">Negócios</span> Desde
              <span className="text-secondary"> 2019</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Somos especialistas em elevar empresas ao próximo nível através de tecnologia de ponta e estratégias
              digitais que <strong className="text-primary">realmente funcionam</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">98%</div>
              <div className="text-muted-foreground">Satisfação dos Clientes</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5 Anos</div>
              <div className="text-muted-foreground">No Mercado</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">24/7</div>
              <div className="text-muted-foreground">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Essência</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os pilares que guiam cada decisão e projeto que desenvolvemos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Capacitar empresas com soluções tecnológicas inovadoras que multiplicam resultados e criam vantagens
                  competitivas sustentáveis no mercado digital.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser a referência nacional em transformação digital, reconhecida pela excelência técnica e resultados
                  excepcionais que geramos para nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Excelência técnica, transparência total, foco em resultados mensuráveis e compromisso inabalável com o
                  sucesso de cada cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Equipe de Especialistas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profissionais altamente qualificados com experiência comprovada em grandes corporações
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Carlos Silva</CardTitle>
                <CardDescription>CEO & Fundador</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  15+ anos em transformação digital. Ex-Google e Microsoft. Especialista em estratégias de crescimento
                  exponencial.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    Growth Hacking
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Leadership
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-12 w-12 text-secondary" />
                </div>
                <CardTitle className="text-xl">Ana Costa</CardTitle>
                <CardDescription>CTO & Co-fundadora</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Arquiteta de software sênior. Ex-Amazon e Uber. Especialista em sistemas escaláveis e arquiteturas
                  complexas.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    Full Stack
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    DevOps
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Roberto Lima</CardTitle>
                <CardDescription>Head of Marketing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Especialista em performance marketing. Ex-Facebook e LinkedIn. Responsável por gerar R$ 50M+ em
                  vendas.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    Paid Ads
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Analytics
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Sucesso</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Resultados reais que transformaram negócios e multiplicaram faturamentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary/20 text-primary">E-commerce</Badge>
                  <div className="text-2xl font-bold text-primary">+450%</div>
                </div>
                <CardTitle className="text-xl">TechStore Brasil</CardTitle>
                <CardDescription>Loja de eletrônicos online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Transformamos uma pequena loja física em um e-commerce líder, aumentando o faturamento de R$ 50k para
                  R$ 275k mensais em apenas 8 meses.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Redesign completo da loja
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Otimização de conversão
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Campanhas de tráfego pago
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-secondary/20 text-secondary">SaaS</Badge>
                  <div className="text-2xl font-bold text-secondary">+320%</div>
                </div>
                <CardTitle className="text-xl">GestãoPro</CardTitle>
                <CardDescription>Software de gestão empresarial</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Desenvolvemos um ERP completo que automatizou processos e aumentou a produtividade da empresa em 320%,
                  reduzindo custos operacionais.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Sistema ERP personalizado
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Automação de processos
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Dashboard executivo
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Depoimentos reais de empresários que transformaram seus negócios conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Marina Santos</CardTitle>
                    <CardDescription>CEO, Fashion Plus</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "A MTO transformou completamente nosso e-commerce. Em 6 meses, triplicamos nossas vendas online. A
                  equipe é excepcional e os resultados falam por si só."
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">João Oliveira</CardTitle>
                    <CardDescription>Diretor, AutoPeças SP</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "O sistema ERP que desenvolveram revolucionou nossa gestão. Automatizou processos que levavam horas e
                  agora são feitos em minutos. ROI incrível!"
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Carla Mendes</CardTitle>
                    <CardDescription>Fundadora, BeautyTech</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Profissionais extremamente competentes. Entregaram muito além do esperado. Nosso app mobile já tem
                  mais de 10k downloads e crescendo!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Jornada</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Marcos importantes que moldaram nossa trajetória de sucesso
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary">2019</div>
                <div className="text-xl font-bold">Fundação da MTO</div>
                <p className="text-muted-foreground">
                  Início das operações com foco em soluções digitais para pequenas e médias empresas.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-secondary">2021</div>
                <div className="text-xl font-bold">Primeiro Prêmio</div>
                <p className="text-muted-foreground">
                  Reconhecimento como "Melhor Agência Digital" pela Associação Brasileira de Startups.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary">2023</div>
                <div className="text-xl font-bold">Expansão Nacional</div>
                <p className="text-muted-foreground">
                  Abertura de escritórios em São Paulo, Rio de Janeiro e Belo Horizonte.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-secondary">2024</div>
                <div className="text-xl font-bold">Liderança de Mercado</div>
                <p className="text-muted-foreground">
                  Consolidação como referência nacional em transformação digital empresarial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Onde Nos Encontrar</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escritórios estrategicamente localizados para melhor atender nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">São Paulo - Matriz</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Av. Paulista, 1000 - Sala 1501</p>
                <p className="text-muted-foreground">Bela Vista, São Paulo - SP</p>
                <p className="text-muted-foreground">CEP: 01310-100</p>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    (11) 99999-9999
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Rio de Janeiro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Av. Rio Branco, 156 - Sala 2801</p>
                <p className="text-muted-foreground">Centro, Rio de Janeiro - RJ</p>
                <p className="text-muted-foreground">CEP: 20040-020</p>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-secondary mr-2" />
                    (21) 99999-9999
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Contato Geral</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">contato@mto.com.br</p>
                <p className="text-muted-foreground">vendas@mto.com.br</p>
                <p className="text-muted-foreground">suporte@mto.com.br</p>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <div className="text-sm text-muted-foreground">Seg-Sex: 8h às 18h</div>
                </div>
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
              Pronto para <span className="text-primary">Transformar</span> Seu Negócio?
            </h2>
            <p className="text-xl text-muted-foreground">
              Junte-se a centenas de empresas que já escolheram a excelência da MTO
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Agendar Reunião Estratégica
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Conhecer Nossa Equipe
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
