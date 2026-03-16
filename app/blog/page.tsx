"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User, Sparkles, Brain, Bot, Shield, ShoppingCart, Palette, BarChart3, Flame } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { articles } from "./data"

const trendingTopics = [
  "IA no Marketing", "ChatGPT Business", "Machine Learning", "Automação", "Vendas Preditivas",
  "Midjourney", "Dados & Analytics", "E-commerce IA", "Segurança Digital", "Conteúdo com IA",
]

export default function BlogPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const featuredArticle = articles[0]
  const gridArticles = articles.slice(1)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm text-primary font-medium mb-6">
            <Brain className="w-4 h-4" />
            Centro de Conhecimento IA — MTO
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Blog{" "}
            <span className="bg-gradient-to-r from-primary via-violet-400 to-secondary bg-clip-text text-transparent">
              Inteligência
            </span>
            <br />
            <span className="text-foreground">Artificial</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Estratégias, ferramentas e casos reais de como a <strong className="text-foreground">IA transforma negócios em Angola</strong>. Conteúdo criado para empreendedores que querem vencer.
          </p>

          {/* Trending ticker */}
          <div className="relative overflow-hidden border border-border/50 rounded-full bg-card/40 backdrop-blur-sm py-2 px-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-primary whitespace-nowrap">
                <Flame className="w-3 h-3" /> Trending:
              </span>
              <div className="overflow-hidden flex-1">
                <div className="flex gap-4 animate-marquee whitespace-nowrap text-xs text-muted-foreground">
                  {[...trendingTopics, ...trendingTopics].map((topic, i) => (
                    <span key={i} className="hover:text-primary transition-colors cursor-pointer">
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED ARTICLE ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative group cursor-pointer rounded-3xl overflow-hidden border border-violet-500/30 bg-gradient-to-br from-violet-600/10 via-background to-primary/10 hover:border-violet-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20"
          onMouseEnter={() => setHoveredId(featuredArticle.id)}
          onMouseLeave={() => setHoveredId(null)}>

          {/* Background shimmer on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br from-violet-600/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black border-0 font-bold animate-pulse">
                  🔥 Em Destaque
                </Badge>
                <Badge variant="outline" className={`text-xs font-semibold border ${featuredArticle.levelColor}`}>
                  {featuredArticle.level}
                </Badge>
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  {featuredArticle.category}
                </Badge>
              </div>

              <h2 className="text-3xl md:text-4xl font-black leading-tight group-hover:text-primary transition-colors duration-300">
                {featuredArticle.emoji} {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{featuredArticle.excerpt}</p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{featuredArticle.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featuredArticle.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featuredArticle.readTime}</span>
              </div>

              <Button className="bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white font-bold group/btn w-fit">
                Ler Artigo Completo
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right: Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/30 to-primary/30 blur-xl animate-pulse" />
                {/* Main circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-violet-600/20 to-primary/20 border border-violet-500/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-2">🧠</div>
                    <div className="text-xs text-muted-foreground font-medium">IA Estratégica</div>
                  </div>
                </div>
                {/* Orbiting badges */}
                {["GPT-4", "Claude 3", "Gemini"].map((label, i) => (
                  <div
                    key={label}
                    className="absolute bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-3 py-1 text-xs font-semibold text-primary shadow-lg"
                    style={{
                      top: i === 0 ? "5%" : i === 1 ? "80%" : "45%",
                      left: i === 0 ? "65%" : i === 1 ? "10%" : "-15%",
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENTO GRID – 6 articles ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black">Últimos Artigos</h2>
            <p className="text-muted-foreground text-sm mt-1">Conteúdo atualizado semanalmente</p>
          </div>
          <div className="flex gap-2">
            {["Todos", "Iniciante", "Pro", "Expert"].map((filter) => (
              <Button key={filter} variant="outline" size="sm" className="rounded-full text-xs hidden sm:flex">
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridArticles.map((article) => {
            const IconComp = article.icon
            const isHovered = hoveredId === article.id
            return (
              <Link href={`/blog/artigo-${article.id}`} key={article.id}>
                <div
                  className={`relative group h-full rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer
                    ${isHovered
                      ? "border-primary/60 shadow-xl shadow-primary/10 -translate-y-1"
                      : "border-border/50 hover:border-primary/40"
                    }
                    bg-gradient-to-br ${article.gradient} bg-card/30 backdrop-blur-sm`}
                  onMouseEnter={() => setHoveredId(article.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="p-6 flex flex-col h-full min-h-[240px]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`text-xs font-semibold border ${article.levelColor}`}>
                          {article.level}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <Badge variant="secondary" className="text-xs mb-3 bg-muted/50">
                        {article.category}
                      </Badge>
                      <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                        {article.emoji} {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent rounded-full px-8"
          >
            Ver Todos os Artigos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* ─── AI TOOLS BANNER ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/20 via-violet-600/10 to-secondary/20 border border-primary/30 p-8 md:p-12 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </div>
          <div className="relative space-y-5">
            <div className="text-5xl">🤖</div>
            <h2 className="text-3xl md:text-4xl font-black">
              Receba <span className="text-primary">Estratégias de IA</span> por Email
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Toda semana, dicas exclusivas de IA para aplicar no seu negócio em Angola. Mais de <strong className="text-foreground">2.500 empreendedores</strong> já recebem.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="O seu melhor email"
                className="flex-1 px-5 py-3 rounded-xl border border-border/60 bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Button className="bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white font-bold px-6 rounded-xl whitespace-nowrap">
                Subscrever
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">📧 Sem spam. Cancele quando quiser.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
