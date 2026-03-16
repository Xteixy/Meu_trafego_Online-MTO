"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, MessageSquare, Brain } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { use } from "react"
import { articles } from "../data"

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const id = Number(resolvedParams.id.replace("artigo-", ""))
    const article = articles.find((a) => a.id === id)

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1 flex items-center justify-center p-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
                        <p className="text-muted-foreground mb-8">O artigo que procura não existe ou foi removido.</p>
                        <Button asChild>
                            <Link href="/blog">Voltar ao Blog</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Voltar para o Blog
                </Link>

                {/* Article Header */}
                <header className="mb-12 space-y-6">
                    <div className="flex items-center gap-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">{article.category}</Badge>
                        <Badge variant="outline" className={`text-xs font-semibold border ${article.levelColor}`}>
                            {article.level}
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                        {article.emoji} {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                {article.author.charAt(0)}
                            </div>
                            <span className="font-medium text-foreground">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime} de leitura</span>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-border/50 shadow-2xl">
                    <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Article Content */}
                <article className="prose prose-invert prose-lg max-w-none mb-20">
                    <div className="text-xl leading-relaxed text-muted-foreground font-medium mb-12 border-l-4 border-primary pl-6 py-2 italic bg-primary/5 rounded-r-lg">
                        {article.excerpt}
                    </div>

                    <div className="text-lg leading-relaxed space-y-8 text-foreground/90 whitespace-pre-wrap">
                        {article.content}
                    </div>
                </article>

                {/* Footer Actions */}
                <div className="border-t border-border/50 pt-12 flex flex-col sm:flex-row items-center justify-between gap-8 mb-20">
                    <div className="flex items-center gap-4">
                        <Button size="icon" variant="outline" className="rounded-full">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full">
                            <MessageSquare className="w-4 h-4" />
                        </Button>
                        <span className="text-sm text-muted-foreground">O que achou deste artigo?</span>
                    </div>

                    <div className="flex gap-4">
                        <Button className="rounded-full px-8 bg-primary hover:bg-primary/90">
                            Partilhar Conhecimento
                        </Button>
                    </div>
                </div>

                {/* Next Post Preview */}
                <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-violet-600/10 to-primary/10 border border-violet-500/20 text-center">
                    <Brain className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Quer saber mais sobre IA?</h3>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Continue a sua jornada de aprendizagem com as nossas consultorias estratégicas personalizadas para o seu negócio.
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 py-6 text-lg">
                        <Link href="/contato">Falar com Especialista</Link>
                    </Button>
                </div>
            </main>

            <Footer />
        </div>
    )
}
