import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Globe,
  FileText,
  Newspaper,
  Building,
  Target,
  ShoppingCart,
  Store,
  Eye,
  Download,
  Star,
  CheckCircle,
  Filter,
  Search,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-4 py-2">Templates Web</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Biblioteca de <span className="text-primary">Templates</span> para
              <span className="text-secondary"> Todos os Negócios</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Mais de 80 templates profissionais, modernos e responsivos. 
              Escolha o perfeito para seu projeto e comece a vender online hoje mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-card">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="sites">Sites</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="blogs">Blogs</TabsTrigger>
              <TabsTrigger value="landing">Landing Pages</TabsTrigger>
            </TabsList>

            {/* Todos os Templates */}
            <TabsContent value="todos" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Template 1 */}
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
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
                    <CardDescription>Site corporativo moderno</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">AOA 299.000</span>
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
                  </CardContent>
                </Card>

                {/* Template 2 */}
                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
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
                    <CardDescription>Loja online completa</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-secondary">AOA 599.000</span>
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
                  </CardContent>
                </Card>

                {/* Template 3 */}
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
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
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">AOA 199.000</span>
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
                  </CardContent>
                </Card>

                {/* Template 4 */}
                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20"></div>
                      <div className="relative z-10 text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <FileText className="h-8 w-8" />
                        </div>
                        <p className="text-sm font-medium">BlogMaster</p>
                      </div>
                    </div>
                    <CardTitle className="text-lg">BlogMaster</CardTitle>
                    <CardDescription>Blog moderno e funcional</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-secondary">AOA 249.000</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-secondary fill-current" />
                        <span className="text-sm ml-1">4.6</span>
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
                  </CardContent>
                </Card>

                {/* Template 5 */}
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"></div>
                      <div className="relative z-10 text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Newspaper className="h-8 w-8" />
                        </div>
                        <p className="text-sm font-medium">NewsPortal</p>
                      </div>
                    </div>
                    <CardTitle className="text-lg">NewsPortal</CardTitle>
                    <CardDescription>Portal de notícias dinâmico</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">AOA 399.000</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-secondary fill-current" />
                        <span className="text-sm ml-1">4.8</span>
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
                  </CardContent>
                </Card>

                {/* Template 6 */}
                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
                      <div className="relative z-10 text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Globe className="h-8 w-8" />
                        </div>
                        <p className="text-sm font-medium">PortfolioX</p>
                      </div>
                    </div>
                    <CardTitle className="text-lg">PortfolioX</CardTitle>
                    <CardDescription>Portfólio criativo e elegante</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-secondary">AOA 179.000</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-secondary fill-current" />
                        <span className="text-sm ml-1">4.9</span>
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
                  </CardContent>
                </Card>

                {/* Template 7 */}
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20"></div>
                      <div className="relative z-10 text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Store className="h-8 w-8" />
                        </div>
                        <p className="text-sm font-medium">StorePro</p>
                      </div>
                    </div>
                    <CardTitle className="text-lg">StorePro</CardTitle>
                    <CardDescription>Loja física digital</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">AOA 349.000</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-secondary fill-current" />
                        <span className="text-sm ml-1">4.5</span>
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
                  </CardContent>
                </Card>

                {/* Template 8 */}
                <Card className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-rose-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20"></div>
                      <div className="relative z-10 text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Building className="h-8 w-8" />
                        </div>
                        <p className="text-sm font-medium">Institutional</p>
                      </div>
                    </div>
                    <CardTitle className="text-lg">Institutional</CardTitle>
                    <CardDescription>Site institucional elegante</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-secondary">AOA 279.000</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-secondary fill-current" />
                        <span className="text-sm ml-1">4.7</span>
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Outras abas com conteúdo similar */}
            <TabsContent value="sites" className="space-y-8">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Templates de Sites</h3>
                <p className="text-muted-foreground">Em breve mais templates de sites corporativos e institucionais</p>
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="space-y-8">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Templates de E-commerce</h3>
                <p className="text-muted-foreground">Em breve mais templates de lojas online</p>
              </div>
            </TabsContent>

            <TabsContent value="blogs" className="space-y-8">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Templates de Blogs</h3>
                <p className="text-muted-foreground">Em breve mais templates de blogs</p>
              </div>
            </TabsContent>

            <TabsContent value="landing" className="space-y-8">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Templates de Landing Pages</h3>
                <p className="text-muted-foreground">Em breve mais templates de landing pages</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Não Encontrou o <span className="text-primary">Template Ideal</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossa equipe pode criar um template personalizado para suas necessidades específicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Solicitar Template Personalizado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Falar com Especialista
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
