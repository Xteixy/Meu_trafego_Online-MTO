




"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArrowRight, Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { ThemeSelector } from "@/components/theme-selector"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/produtos", label: "Produtos" },
    { href: "/servicos", label: "Serviços" },
    { href: "/ebooks", label: "E-books" },
    { href: "/blog", label: "Blog" },
    { href: "/sobre", label: "Sobre" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image src="/images/mto-logo.png" alt="MTO Logo" width={280} height={100} className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeSelector />
            
            {/* WhatsApp Button */}
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700" 
              size="sm"
              asChild
            >
              <a 
                href="https://wa.me/937500709" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/auth">Entrar <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSelector />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center justify-between">
                    <Image src="/images/mto-logo.png" alt="MTO Logo" width={180} height={60} className="h-12 w-auto" />
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg transition-colors ${
                          isActive(item.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    {/* WhatsApp Button Mobile */}
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 w-full" 
                      asChild
                    >
                      <a 
                        href="https://wa.me/937500709" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Falar no WhatsApp</span>
                      </a>
                    </Button>
                    
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2" asChild>
                      <a href="/auth">Entrar <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
