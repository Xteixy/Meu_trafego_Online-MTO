import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Image src="/images/mto-logo.png" alt="MTO Logo" width={160} height={60} className="h-12 w-auto" />
          </div>

          {/* 404 Error */}
          <div className="space-y-4">
            <div className="text-8xl md:text-9xl font-bold text-primary/20">404</div>
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              Página <span className="text-primary">Não Encontrada</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto text-pretty">
              A página que você está procurando não existe ou foi movida. Que tal explorar nossas soluções digitais?
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Voltar ao Início
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              <Link href="/servicos">
                <Search className="mr-2 h-5 w-5" />
                Ver Serviços
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-border">
            <h2 className="text-lg font-semibold mb-4">Links Úteis</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link href="/produtos" className="text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </Link>
              <Link href="/servicos" className="text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link href="/#contato" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
