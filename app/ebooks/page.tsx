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
      id: 0,
      title: "Segredos da Importação da China",
      subtitle: "Compres por 10 e Venda por 100",
      description:
        "Aprenda a importar da China várias vezes com desconto na primeira compra de 90%! Entenda como comprar produtos com preços baixíssimos e vender em Angola para ter o dobro ou mais do lucro. O mapa definitivo para o e-commerce de sucesso.",
      price: "AOA 15.000",
      originalPrice: "AOA 45.000",
      rating: 5.0,
      reviews: 4892,
      pages: 180,
      readTime: "4h",
      category: "Importação",
      bestseller: true,
      image: "/importacao.png",
      features: [
        "Desconto de 90% na 1ª Compra",
        "Lista de Fornecedores Gold",
        "Logística China -> Angola",
        "Bônus: Grupo de Importadores",
      ],
    },
    {
      id: 1,
      title: "Como Criar uma Renda Extra",
      subtitle: "Vendendo Produtos Digitais",
      description:
        "Descubra como transformar suas habilidades em produtos digitais lucrativos e criar uma renda extra sustentável através do marketing digital.",
      price: "AOA 2.000",
      originalPrice: "AOA 5.000",
      rating: 4.9,
      reviews: 3421,
      pages: 245,
      readTime: "5h",
      category: "Renda Extra",
      bestseller: true,
      image: "/renda-extra.png",
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
      price: "AOA 12.000",
      originalPrice: "AOA 25.000",
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
      price: "AOA 5.000",
      originalPrice: "AOA 10.000",
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
      price: "AOA 12.000",
      originalPrice: "AOA 28.000",
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
      price: "AOA 10.000",
      originalPrice: "AOA 18.000",
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
      price: "AOA 12.000",
      originalPrice: "AOA 22.000",
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
      price: "AOA 12.000",
      originalPrice: "AOA 25.000",
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

  const categories = ["Todos", "Importação", "Renda Extra", "Marketing", "SEO", "E-commerce", "Automação", "Tráfego Pago", "Desenvolvimento"]

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

          {/* ── FEATURED – Importação da China ── */}
          {ebooks.filter(e => e.id === 0).map((ebook) => (
            <div key={ebook.id} className="mb-16 flex justify-center">
              {/* Shining animated border wrapper */}
              <div className="relative p-[3px] rounded-2xl ebook-shine-border animate-ebook-featured"
                style={{ maxWidth: 520, width: "100%" }}>
                <div className="relative rounded-2xl overflow-hidden bg-card">

                  {/* ⭐ Badges row */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap">
                    <Badge className="animate-badge-pop bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-black border-0 text-sm font-bold px-3 py-1 shadow-lg">
                      🏆 #1 Mais Vendido
                    </Badge>
                    <Badge className="bg-green-500 text-white border-0 text-sm font-bold px-3 py-1 shadow-lg">
                      ✅ Disponível!
                    </Badge>
                  </div>

                  {/* Discount ribbon */}
                  <div className="absolute top-0 right-0 z-20">
                    <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white text-xs font-bold px-4 py-6 text-center shadow-lg"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)", width: 80, height: 80 }}>
                    </div>
                    <div className="absolute top-3 right-1 text-white text-xs font-black text-center leading-tight rotate-45" style={{ width: 52 }}>
                      <div>90%</div>
                      <div>OFF</div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                    <Image
                      src={ebook.image || "/placeholder.svg"}
                      alt={ebook.title}
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-yellow-400">{ebook.rating}</span>
                      <span className="text-xs text-muted-foreground">({ebook.reviews.toLocaleString()} avaliações)</span>
                    </div>

                    <h3 className="text-2xl font-black mb-1 text-foreground">{ebook.title}</h3>
                    <p className="text-primary font-semibold text-base mb-3">{ebook.subtitle}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{ebook.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {ebook.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm bg-primary/10 rounded-lg px-3 py-1.5">
                          <Zap className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-3xl font-black text-primary">{ebook.price}</span>
                      <span className="text-base text-muted-foreground line-through">{ebook.originalPrice}</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                        67% OFF
                      </Badge>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Button className="w-full text-base font-bold py-6 bg-gradient-to-r from-primary via-pink-500 to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02]">
                        <Download className="w-5 h-5 mr-2" />
                        Comprar Agora — {ebook.price}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      <button
                        className="w-full py-4 rounded-lg text-base font-bold transition-all duration-300 cursor-pointer animate-whatsapp-cta"
                        onClick={() => {
                          const message = encodeURIComponent(`Olá! Gostaria de adquirir o ebook "${ebook.title}" por ${ebook.price}. Como faço para comprar?`);
                          window.open(`https://wa.me/937500709?text=${message}`, '_blank');
                        }}
                      >
                        💬 Pedir via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* ── Outros E-books – Brevemente Disponíveis ── */}
          <div className="text-center mb-10">
            <Badge className="bg-muted text-muted-foreground border-border text-sm px-4 py-1.5">
              📚 Mais e-books chegando em breve...
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ebooks.filter(e => e.id !== 0).map((ebook, index) => (
              <div key={ebook.id} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Dimmed card */}
                <Card className="h-full glass-card border-border/30 opacity-50 blur-[1px] select-none pointer-events-none">
                  <CardHeader className="relative p-0">
                    <div className="relative h-52 overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <Image
                        src={ebook.image || "/placeholder.svg"}
                        alt={ebook.title}
                        fill
                        className="object-contain grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-base font-bold mb-1">{ebook.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{ebook.subtitle}</p>
                    <p className="text-muted-foreground text-sm line-clamp-2">{ebook.description}</p>
                  </CardContent>
                </Card>

                {/* Overlay: "Brevemente Disponível" */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10">
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl px-6 py-4 text-center border border-border shadow-xl">
                    <div className="text-2xl mb-2">🔒</div>
                    <div className="text-sm font-bold text-foreground">Brevemente Disponível</div>
                    <div className="text-xs text-muted-foreground mt-1">Em preparação...</div>
                  </div>
                </div>
              </div>
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
