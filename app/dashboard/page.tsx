"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  Plus,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  DollarSign,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  Facebook,
  Instagram,
  Youtube,
  Tiktok,
  Linkedin,
  Twitter,
  Globe,
  Settings,
  LogOut,
  Bell,
  Search,
  Filter,
  Download,
  Share2,
  Eye,
  Edit,
  Trash2
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [campaignData, setCampaignData] = useState({
    name: "",
    objective: "",
    budget: "",
    duration: "",
    targetAudience: "",
    description: "",
    platforms: []
  })

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Carregando dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const platforms = [
    { id: "facebook", name: "Facebook", icon: Facebook, color: "text-blue-600" },
    { id: "instagram", name: "Instagram", icon: Instagram, color: "text-pink-600" },
    { id: "youtube", name: "YouTube", icon: Youtube, color: "text-red-600" },
    { id: "tiktok", name: "TikTok", icon: Tiktok, color: "text-black" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
    { id: "twitter", name: "Twitter", icon: Twitter, color: "text-blue-400" },
    { id: "google", name: "Google Ads", icon: Globe, color: "text-green-600" }
  ]

  const objectives = [
    "Aumentar Seguidores",
    "Gerar Leads",
    "Vender Produtos",
    "Aumentar Engajamento",
    "Tráfego para Site",
    "Brand Awareness",
    "Conversões"
  ]

  const durations = [
    "1 mês",
    "3 meses",
    "6 meses",
    "12 meses",
    "Personalizado"
  ]

  const stats = [
    { title: "Campanhas Ativas", value: "12", icon: Target, color: "text-blue-500", change: "+15%" },
    { title: "ROI Médio", value: "320%", icon: TrendingUp, color: "text-green-500", change: "+8%" },
    { title: "Tráfego Mensal", value: "45.2K", icon: BarChart3, color: "text-purple-500", change: "+22%" },
    { title: "Leads Gerados", value: "1.2K", icon: Users, color: "text-orange-500", change: "+18%" }
  ]

  const recentCampaigns = [
    {
      id: 1,
      name: "Campanha Black Friday",
      platform: "Facebook + Instagram",
      status: "Ativa",
      budget: "R$ 5.000",
      performance: "Excelente",
      roi: "450%"
    },
    {
      id: 2,
      name: "Lançamento Produto X",
      platform: "Google Ads",
      status: "Pausada",
      budget: "R$ 3.200",
      performance: "Boa",
      roi: "280%"
    },
    {
      id: 3,
      name: "Brand Awareness Q4",
      platform: "LinkedIn",
      status: "Ativa",
      budget: "R$ 2.800",
      performance: "Muito Boa",
      roi: "320%"
    }
  ]

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    )
  }

  const handleSubmitCampaign = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Nova campanha:", { ...campaignData, platforms: selectedPlatforms })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Dashboard Header */}
      <section className="pt-24 pb-8 bg-gradient-to-r from-primary/10 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Dashboard MTO</h1>
              <p className="text-muted-foreground mt-2">
                Olá, <span className="text-primary font-medium">{user?.name}</span>! 
                Gerencie suas campanhas de tráfego e domine o mercado digital
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Plano: <span className="font-medium">{user?.plan === "starter" ? "Starter" : user?.plan === "professional" ? "Professional" : "Enterprise"}</span> • 
                Empresa: <span className="font-medium">{user?.company}</span>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notificações
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  logout()
                  router.push("/auth")
                }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 bg-opacity-10 rounded-lg flex items-center justify-center ${stat.color.replace('text-', 'bg-')}`}>
                        <Icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <span className="text-sm text-green-500 font-medium">{stat.change}</span>
                      <span className="text-sm text-muted-foreground ml-2">vs mês anterior</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
              <TabsTrigger value="new-campaign">Nova Campanha</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Campaigns */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5" />
                      <span>Campanhas Recentes</span>
                    </CardTitle>
                    <CardDescription>
                      Acompanhe o desempenho das suas últimas campanhas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentCampaigns.map((campaign) => (
                        <div key={campaign.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                          <div className="space-y-1">
                            <p className="font-medium">{campaign.name}</p>
                            <p className="text-sm text-muted-foreground">{campaign.platform}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant={campaign.status === "Ativa" ? "default" : "secondary"}>
                                {campaign.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                ROI: {campaign.roi}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{campaign.budget}</p>
                            <p className="text-sm text-muted-foreground">{campaign.performance}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="h-5 w-5" />
                      <span>Ações Rápidas</span>
                    </CardTitle>
                    <CardDescription>
                      Gerencie suas campanhas e solicite novos serviços
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start" size="lg">
                      <Plus className="h-4 w-4 mr-2" />
                      Criar Nova Campanha
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Ver Relatórios
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <Users className="h-4 w-4 mr-2" />
                      Suporte Técnico
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <Settings className="h-4 w-4 mr-2" />
                      Configurar Conta
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Campaigns Tab */}
            <TabsContent value="campaigns" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Todas as Campanhas</CardTitle>
                      <CardDescription>
                        Gerencie e monitore todas as suas campanhas de tráfego
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filtros
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Exportar
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentCampaigns.map((campaign) => (
                      <div key={campaign.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Target className="h-5 w-5 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <p className="font-medium">{campaign.name}</p>
                            <p className="text-sm text-muted-foreground">{campaign.platform}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-medium">{campaign.budget}</p>
                            <p className="text-sm text-muted-foreground">ROI: {campaign.roi}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* New Campaign Tab */}
            <TabsContent value="new-campaign" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>Solicitar Nova Campanha de Tráfego</span>
                  </CardTitle>
                  <CardDescription>
                    Preencha os dados abaixo para solicitar uma nova campanha personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitCampaign} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="campaign-name">Nome da Campanha</Label>
                        <Input
                          id="campaign-name"
                          placeholder="Ex: Campanha Black Friday 2024"
                          value={campaignData.name}
                          onChange={(e) => setCampaignData(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="campaign-objective">Objetivo Principal</Label>
                        <Select value={campaignData.objective} onValueChange={(value) => setCampaignData(prev => ({ ...prev, objective: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o objetivo" />
                          </SelectTrigger>
                          <SelectContent>
                            {objectives.map((objective) => (
                              <SelectItem key={objective} value={objective}>
                                {objective}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="campaign-budget">Orçamento Mensal</Label>
                        <Input
                          id="campaign-budget"
                          placeholder="Ex: R$ 5.000"
                          value={campaignData.budget}
                          onChange={(e) => setCampaignData(prev => ({ ...prev, budget: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="campaign-duration">Duração da Campanha</Label>
                        <Select value={campaignData.duration} onValueChange={(value) => setCampaignData(prev => ({ ...prev, duration: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a duração" />
                          </SelectTrigger>
                          <SelectContent>
                            {durations.map((duration) => (
                              <SelectItem key={duration} value={duration}>
                                {duration}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="target-audience">Público-Alvo</Label>
                      <Input
                        id="target-audience"
                        placeholder="Ex: Homens e mulheres, 25-45 anos, interessados em tecnologia"
                        value={campaignData.targetAudience}
                        onChange={(e) => setCampaignData(prev => ({ ...prev, targetAudience: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Plataformas de Mídia Social</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {platforms.map((platform) => {
                          const Icon = platform.icon
                          const isSelected = selectedPlatforms.includes(platform.id)
                          return (
                            <div
                              key={platform.id}
                              className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-all ${
                                isSelected
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                              onClick={() => handlePlatformToggle(platform.id)}
                            >
                              <Icon className={`h-5 w-5 ${platform.color}`} />
                              <span className="text-sm font-medium">{platform.name}</span>
                              {isSelected && (
                                <CheckCircle className="h-4 w-4 text-primary" />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="campaign-description">Descrição da Campanha</Label>
                      <Textarea
                        id="campaign-description"
                        placeholder="Descreva detalhes da sua campanha, objetivos específicos, mensagens principais, etc."
                        rows={4}
                        value={campaignData.description}
                        onChange={(e) => setCampaignData(prev => ({ ...prev, description: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="accept-terms" required />
                      <Label htmlFor="accept-terms" className="text-sm">
                        Concordo com os termos de serviço e política de privacidade da MTO
                      </Label>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Solicitar Campanha
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Analytics e Métricas</span>
                  </CardTitle>
                  <CardDescription>
                    Acompanhe o desempenho detalhado das suas campanhas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Analytics em Desenvolvimento</h3>
                    <p className="text-muted-foreground">
                      Em breve você terá acesso a métricas detalhadas e relatórios avançados
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
