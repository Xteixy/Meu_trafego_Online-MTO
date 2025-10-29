"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Download, Star, Clock, BookOpen, TrendingUp, Target, Zap, Award } from "lucide-react"
import Image from "next/image"

export default function EbooksPage() {
  const ebooks = [
    {
      id: 1,
      title: "Como Criar uma Renda Extra",
      subtitle: "Vendendo Produtos Digitais",
      description:
        "Descubra como transformar suas habilidades em produtos digitais lucrativos e criar uma renda extra sustentável através do marketing digital.",
      price: "R$ 97",
      originalPrice: "R$ 297",
      rating: 4.9,
      reviews: 3421,
      pages: 245,
      readTime: "5h",
      category: "Renda Extra",
      bestseller: true,
      image: "/renda extra.png",
      features: [
        "7 Estratégias de Monetização",
        "Templates de Produtos Digitais",
        "Plataformas de Venda",
        "Bônus: Planilha de Receitas",
      ],
    },
    {
      id: 2,
      title: "Marketing Digital Dominante",
      subtitle: "Estratégias Secretas dos Top 1%",
      description:
        "Descubra as táticas avançadas que apenas 1% dos profissionais conhecem para dominar o marketing digital e multiplicar resultados.",
      price: "R$ 197",
      originalPrice: "R$ 497",
      rating: 4.9,
      reviews: 2847,
      pages: 312,
      readTime: "6h",
      category: "Marketing",
      bestseller: true,
      image: "/digital-marketing-mastery-ebook-cover.png",
      features: [
        "15 Estratégias Comprovadas",
        "Templates Prontos",
        "Casos de Sucesso Reais",
        "Bônus: Planilhas de ROI",
      ],
    },
    {
      id: 3,
      title: "SEO Supremo 2024",
      subtitle: "Domine o Google em 90 Dias",
      description:
        "O guia definitivo para rankear no topo do Google com técnicas atualizadas e estratégias que realmente funcionam.",
      price: "R$ 147",
      originalPrice: "R$ 397",
      rating: 4.8,
      reviews: 1923,
      pages: 248,
      readTime: "5h",
      category: "SEO",
      bestseller: false,
      image: "/seo-mastery-2024-ebook-cover.png",
      features: ["Técnicas White Hat Avançadas", "Ferramentas Gratuitas", "Checklist Completo", "Bônus: Auditoria SEO"],
    },
    {
      id: 4,
      title: "E-commerce Milionário",
      subtitle: "Do Zero ao Primeiro Milhão",
      description:
        "Sistema completo para criar e escalar um e-commerce lucrativo, com estratégias testadas e aprovadas.",
      price: "R$ 247",
      originalPrice: "R$ 697",
      rating: 4.9,
      reviews: 1456,
      pages: 387,
      readTime: "8h",
      category: "E-commerce",
      bestseller: true,
      image: "/ecommerce-millionaire-ebook-cover.png",
      features: [
        "Modelo de Negócio Validado",
        "Fornecedores Confiáveis",
        "Automações Avançadas",
        "Bônus: Calculadora de Lucro",
      ],
    },
    {
      id: 5,
      title: "Automação Empresarial",
      subtitle: "Sistemas que Trabalham por Você",
      description:
        "Aprenda a criar sistemas automatizados que otimizam processos e aumentam a produtividade em até 300%.",
      price: "R$ 167",
      originalPrice: "R$ 447",
      rating: 4.7,
      reviews: 892,
      pages: 195,
      readTime: "4h",
      category: "Automação",
      bestseller: false,
      image: "/business-automation-ebook-cover.png",
      features: ["Workflows Prontos", "Integrações Avançadas", "ROI Garantido", "Bônus: Templates de Processo"],
    },
    {
      id: 6,
      title: "Tráfego Pago Explosivo",
      subtitle: "Facebook e Google Ads Masterclass",
      description:
        "Domine as plataformas de tráfego pago e transforme investimento em lucro com estratégias de alta conversão.",
      price: "R$ 177",
      originalPrice: "R$ 497",
      rating: 4.8,
      reviews: 2156,
      pages: 289,
      readTime: "6h",
      category: "Tráfego Pago",
      bestseller: true,
      image: "/paid-traffic-explosive-ebook-cover.png",
      features: [
        "Campanhas de Alto ROI",
        "Segmentações Avançadas",
        "Otimizações Secretas",
        "Bônus: Scripts de Anúncios",
      ],
    },
    {
      id: 7,
      title: "Desenvolvimento Full Stack",
      subtitle: "Do Iniciante ao Expert",
      description: "Torne-se um desenvolvedor completo com este guia prático que cobre front-end, back-end e DevOps.",
      price: "R$ 197",
      originalPrice: "R$ 597",
      rating: 4.9,
      reviews: 1678,
      pages: 456,
      readTime: "10h",
      category: "Desenvolvimento",
      bestseller: false,
      image: "/fullstack-development-ebook-cover.png",
      features: ["Projetos Práticos", "Código Fonte Completo", "Deploy Profissional", "Bônus: Roadmap de Carreira"],
    },
  ]

  const categories = ["Todos", "Renda Extra", "Marketing", "SEO", "E-commerce", "Automação", "Tráfego Pago", "Desenvolvimento"]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Biblioteca Digital Premium
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              E-books que Transformam
              <span className="block text-foreground">Negócios em Impérios</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Conhecimento estratégico dos maiores especialistas do mercado. Cada e-book é um investimento que se paga
              em resultados reais.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up animation-delay-200">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Leitores Satisfeitos</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-muted-foreground">ROI Médio</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Acesso Imediato</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="rounded-full hover:scale-105 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* E-books Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ebooks.map((ebook, index) => (
              <Card
                key={ebook.id}
                className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 glass-card border-primary/20 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="relative p-0">
                  {ebook.bestseller && (
                    <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-0">
                      <Award className="w-3 h-3 mr-1" />
                      Bestseller
                    </Badge>
                  )}
                  <div className="relative h-52 overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src={ebook.image || "/placeholder.svg"}
                      alt={ebook.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                </CardHeader>

                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {ebook.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{ebook.rating}</span>
                      <span className="text-xs text-muted-foreground">({ebook.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">{ebook.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{ebook.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{ebook.description}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {ebook.pages} páginas
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {ebook.readTime} leitura
                    </div>
                  </div>

                  <div className="space-y-1 mb-2">
                    {ebook.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Zap className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">{ebook.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{ebook.originalPrice}</span>
                        </div>
                        <div className="text-xs text-green-500 font-medium">
                          Economia de{" "}
                          {Math.round(
                            (1 -
                              Number.parseInt(ebook.price.replace("R$ ", "")) /
                                Number.parseInt(ebook.originalPrice.replace("R$ ", ""))) *
                              100,
                          )}
                          %
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium group">
                        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Comprar Agora
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
                        onClick={() => {
                          const message = encodeURIComponent(`Olá! Gostaria de adquirir o ebook "${ebook.title}" por ${ebook.price}. Como faço para comprar?`);
                          window.open(`https://wa.me/937500709?text=${message}`, '_blank');
                        }}
                      >
                        💬 WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme Conhecimento em
            <span className="block text-primary">Resultados Extraordinários</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Cada e-book é uma oportunidade de acelerar seu crescimento e superar a concorrência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <TrendingUp className="w-5 h-5 mr-2" />
              Ver Todos os E-books
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Target className="w-5 h-5 mr-2" />
              Consultoria Personalizada
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
