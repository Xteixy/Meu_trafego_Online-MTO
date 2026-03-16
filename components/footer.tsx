import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <Image src="/images/mto-logo.png" alt="MTO Logo" width={120} height={40} className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground">
              Transformando negócios através de tecnologia e marketing digital de alta performance.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/produtos#sites" className="hover:text-primary transition-colors">
                  Criação de Sites
                </Link>
              </li>
              <li>
                <Link href="/produtos#vendas" className="hover:text-primary transition-colors">
                  Vendas & Conversão
                </Link>
              </li>
              <li>
                <Link href="/produtos#infra" className="hover:text-primary transition-colors">
                  Infraestrutura Web
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/produtos" className="hover:text-primary transition-colors">
                  Tráfego & SEO
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-primary transition-colors">
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-primary transition-colors">
                  Automação
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Portfólio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Blog</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Todos os Artigos
                </Link>
              </li>
              <li>
                <Link href="/blog#marketing" className="hover:text-primary transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="/blog#tecnologia" className="hover:text-primary transition-colors">
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link href="/blog#ecommerce" className="hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>contato@mto.ao</li>
              <li>+244 937 500 709</li>
              <li>Luanda, Angola</li>
              <li className="pt-2">
                <Button
                  className="bg-green-600 hover:bg-green-500 text-white border-green-600 w-full transition-all duration-300 hover:scale-[1.05] active:scale-95 animate-whatsapp-float"
                  asChild
                >
                  <a
                    href="https://wa.me/937500709"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5 animate-bounce" />
                    <span className="font-semibold text-base">Falar no WhatsApp</span>
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 MTO - Meu Tráfego Online. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
