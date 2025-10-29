import Image from "next/image"
import Link from "next/link"

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
                <Link href="/produtos#hds" className="hover:text-primary transition-colors">
                  HDs Premium
                </Link>
              </li>
              <li>
                <Link href="/produtos#leds" className="hover:text-primary transition-colors">
                  LEDs Profissionais
                </Link>
              </li>
              <li>
                <Link href="/produtos#componentes" className="hover:text-primary transition-colors">
                  Componentes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/servicos#marketing" className="hover:text-primary transition-colors">
                  Tráfego & SEO
                </Link>
              </li>
              <li>
                <Link href="/servicos#desenvolvimento" className="hover:text-primary transition-colors">
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link href="/servicos#ecommerce" className="hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/servicos#automacao" className="hover:text-primary transition-colors">
                  Automação
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
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@mto.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 MTO - Meu Tráfego Online. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
