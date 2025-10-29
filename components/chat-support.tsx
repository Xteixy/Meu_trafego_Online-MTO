"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Clock, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Calculator,
  Calendar,
  Star,
  Zap,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  type?: "text" | "quick-reply" | "contact" | "calculation" | "explanation" | "suggestion"
  data?: any
}

interface QuickReply {
  id: string
  text: string
  action?: string
  icon?: any
}

interface ChatFlow {
  step: string
  question: string
  responses: QuickReply[]
  explanation?: string
}

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! 👋 Sou o assistente inteligente da MTO. Vou te ajudar a entender como o tráfego pode transformar seu negócio!",
      sender: "bot",
      timestamp: new Date(),
      type: "explanation"
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentFlow, setCurrentFlow] = useState<string | null>(null)
  const [userData, setUserData] = useState<any>({})
  const [progress, setProgress] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Fluxos conversacionais inteligentes
  const chatFlows: Record<string, ChatFlow> = {
    "inicio": {
      step: "inicio",
      question: "Para te ajudar melhor, me conte:",
      responses: [
        { id: "1", text: "🚀 Quero mais tráfego", action: "traffic", icon: TrendingUp },
        { id: "2", text: "💰 Calcular ROI", action: "roi", icon: Calculator },
        { id: "3", text: "📊 Ver casos de sucesso", action: "cases", icon: BarChart3 },
        { id: "4", text: "❓ Como funciona?", action: "how", icon: Lightbulb },
        { id: "5", text: "📞 Falar com especialista", action: "expert", icon: Phone }
      ],
      explanation: "Vou te guiar através de um processo personalizado para encontrar a melhor solução para seu negócio!"
    },
    "traffic": {
      step: "traffic",
      question: "Perfeito! Vamos descobrir que tipo de tráfego você precisa:",
      responses: [
        { id: "1", text: "🛒 E-commerce", action: "ecommerce" },
        { id: "2", text: "🏢 Serviços", action: "services" },
        { id: "3", text: "📱 App/Software", action: "app" },
        { id: "4", text: "📰 Conteúdo/Blog", action: "content" },
        { id: "5", text: "❓ Não sei", action: "help_choose" }
      ],
      explanation: "Cada tipo de negócio precisa de uma estratégia diferente de tráfego. Vou te explicar qual funciona melhor para o seu caso!"
    },
    "ecommerce": {
      step: "ecommerce",
      question: "Excelente! Para e-commerce, preciso saber:",
      responses: [
        { id: "1", text: "💵 Qual seu faturamento mensal?", action: "revenue" },
        { id: "2", text: "👥 Quantos visitantes você tem?", action: "visitors" },
        { id: "3", text: "🎯 Qual sua taxa de conversão?", action: "conversion" },
        { id: "4", text: "📈 Quanto quer aumentar?", action: "growth" }
      ],
      explanation: "Com essas informações, posso calcular exatamente quantos visitantes você precisa e quanto isso vai gerar em vendas!"
    }
  }

  const quickReplies: QuickReply[] = [
    { id: "1", text: "🚀 Começar análise", action: "start_analysis", icon: Target },
    { id: "2", text: "💰 Calcular ROI", action: "calculate_roi", icon: Calculator },
    { id: "3", text: "📊 Ver resultados", action: "see_results", icon: BarChart3 },
    { id: "4", text: "❓ Como funciona?", action: "how_works", icon: Lightbulb },
    { id: "5", text: "📞 Falar com especialista", action: "expert", icon: Phone }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const addMessage = (text: string, sender: "user" | "bot", type: "text" | "quick-reply" | "contact" | "calculation" | "explanation" | "suggestion" = "text", data?: any) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      type,
      data
    }
    setMessages(prev => [...prev, newMessage])
  }

  const calculateROI = (data: any) => {
    const { revenue, visitors, conversion, growth } = data
    const currentVisitors = visitors || 1000
    const currentConversion = conversion || 2
    const currentRevenue = revenue || 10000
    const growthTarget = growth || 50

    const newVisitors = Math.round(currentVisitors * (1 + growthTarget / 100))
    const newConversions = Math.round(newVisitors * (currentConversion / 100))
    const newRevenue = Math.round(newConversions * (currentRevenue / (currentVisitors * currentConversion / 100)))
    const roi = Math.round(((newRevenue - currentRevenue) / currentRevenue) * 100)

    return {
      currentVisitors,
      newVisitors,
      currentRevenue,
      newRevenue,
      roi,
      additionalRevenue: newRevenue - currentRevenue
    }
  }

  const getExplanation = (topic: string) => {
    const explanations: Record<string, string> = {
      "how_works": `🔍 **COMO FUNCIONA O TRÁFEGO PAGO:**

**1. Análise do Seu Negócio** 📊
• Identificamos seu público-alvo
• Analisamos concorrentes
• Definimos objetivos claros

**2. Criação de Campanhas** 🎯
• Anúncios otimizados para cada plataforma
• Landing pages de alta conversão
• Segmentação precisa do público

**3. Execução e Monitoramento** 📈
• Campanhas ativas 24/7
• Ajustes em tempo real
• Relatórios detalhados

**4. Resultados Mensuráveis** 💰
• Aumento de visitantes qualificados
• Mais vendas e leads
• ROI positivo garantido

**É como ter um especialista trabalhando 24h para trazer clientes para seu negócio!**`,

      "traffic_types": `🚀 **TIPOS DE TRÁFEGO QUE GERAM RESULTADOS:**

**1. Tráfego Orgânico (SEO)** 📈
• Aparece no Google naturalmente
• Custo zero após implementação
• Resultados a longo prazo

**2. Tráfego Pago (Google Ads)** 💰
• Aparece imediatamente
• Controle total sobre investimento
• Resultados mensuráveis

**3. Tráfego Social (Facebook/Instagram)** 📱
• Alcance massivo
• Segmentação precisa
• Visual e engajante

**4. Tráfego de Remarketing** 🔄
• Pessoas que já visitaram seu site
• Taxa de conversão 3x maior
• Custo por aquisição menor

**Cada tipo tem seu momento ideal. Vou te ajudar a escolher o melhor!**`,

      "roi_explanation": `💰 **ENTENDA O ROI DO TRÁFEGO:**

**Exemplo Prático:**
• Investimento: AOA 100.000/mês
• Visitantes gerados: 5.000/mês
• Taxa de conversão: 2%
• Vendas geradas: 100/mês
• Ticket médio: AOA 2.000
• Receita: AOA 200.000/mês
• **ROI: 100%** 🎯

**Isso significa que para cada AOA 1 investido, você ganha AOA 2 de volta!**

**Quer calcular seu ROI personalizado?**`
    }
    return explanations[topic] || "Deixe-me explicar melhor sobre isso..."
  }

  const handleQuickReply = (reply: QuickReply) => {
    addMessage(reply.text, "user")
    setProgress(prev => Math.min(prev + 20, 100))
    
    setTimeout(() => {
      let botResponse = ""
      let responseType: "text" | "quick-reply" | "contact" | "calculation" | "explanation" | "suggestion" = "text"
      let responseData: any = null
      
      switch (reply.action) {
        case "start_analysis":
          setCurrentFlow("inicio")
          botResponse = chatFlows.inicio.question
          responseType = "quick-reply"
          responseData = chatFlows.inicio.responses
          break

        case "traffic":
          setCurrentFlow("traffic")
          botResponse = chatFlows.traffic.question
          responseType = "quick-reply"
          responseData = chatFlows.traffic.responses
          break

        case "ecommerce":
          setCurrentFlow("ecommerce")
          botResponse = chatFlows.ecommerce.question
          responseType = "quick-reply"
          responseData = chatFlows.ecommerce.responses
          break

        case "calculate_roi":
          botResponse = "💰 **VAMOS CALCULAR SEU ROI PERSONALIZADO!**\n\nPara isso, preciso de algumas informações:\n\n• Qual seu faturamento mensal atual?\n• Quantos visitantes seu site recebe por mês?\n• Qual sua taxa de conversão atual?\n• Quanto você gostaria de aumentar?"
          responseType = "calculation"
          break

        case "how_works":
          botResponse = getExplanation("how_works")
          responseType = "explanation"
          break

        case "see_results":
          botResponse = `📊 **CASOS DE SUCESSO REAIS:**

**🏪 Loja de Roupas Online:**
• Antes: 500 visitantes/mês
• Depois: 3.000 visitantes/mês
• Aumento: 500% no tráfego
• ROI: 250%

**💼 Consultoria Empresarial:**
• Antes: 200 leads/mês
• Depois: 800 leads/mês
• Aumento: 300% nos leads
• ROI: 180%

**🛒 E-commerce de Eletrônicos:**
• Antes: AOA 50.000/mês
• Depois: AOA 200.000/mês
• Aumento: 300% nas vendas
• ROI: 150%

**Quer ser nosso próximo caso de sucesso?** 🚀`
          responseType = "suggestion"
          break

        case "expert":
          botResponse = `👨‍💼 **FALAR COM ESPECIALISTA:**

**Nossos especialistas estão prontos para te ajudar:**

📞 **Telefone:** +244 923 456 789
📧 **Email:** especialistas@mto.ao
💬 **WhatsApp:** +244 923 456 789

**Horário de atendimento:**
• Segunda a Sexta: 8h às 18h
• Sábado: 8h às 12h

**Ou agende uma consultoria gratuita de 30 minutos!**`
          responseType = "contact"
          break

        case "revenue":
          setUserData(prev => ({ ...prev, step: "revenue" }))
          botResponse = "💵 **Qual seu faturamento mensal atual?**\n\n(Exemplo: AOA 50.000, AOA 100.000, etc.)\n\n*Isso me ajuda a calcular o investimento ideal em tráfego*"
          break

        case "visitors":
          setUserData(prev => ({ ...prev, step: "visitors" }))
          botResponse = "👥 **Quantos visitantes únicos seu site recebe por mês?**\n\n(Exemplo: 1.000, 5.000, 10.000, etc.)\n\n*Se não souber, posso te ajudar a descobrir!*"
          break

        case "conversion":
          setUserData(prev => ({ ...prev, step: "conversion" }))
          botResponse = "🎯 **Qual sua taxa de conversão atual?**\n\n(Exemplo: 1%, 2%, 5%, etc.)\n\n*Taxa de conversão = (Vendas ÷ Visitantes) × 100*"
          break

        case "growth":
          setUserData(prev => ({ ...prev, step: "growth" }))
          botResponse = "📈 **Quanto você gostaria de aumentar seu tráfego?**\n\n• 50% mais visitantes\n• 100% mais visitantes\n• 200% mais visitantes\n• 500% mais visitantes\n\n*Com essas informações, vou calcular seu ROI exato!*"
          responseType = "quick-reply"
          responseData = [
            { id: "1", text: "50% mais", action: "growth_50" },
            { id: "2", text: "100% mais", action: "growth_100" },
            { id: "3", text: "200% mais", action: "growth_200" },
            { id: "4", text: "500% mais", action: "growth_500" }
          ]
          break

        case "growth_50":
        case "growth_100":
        case "growth_200":
        case "growth_500":
          const growthValue = parseInt(reply.action.split("_")[1])
          setUserData(prev => ({ ...prev, growth: growthValue }))
          const roiData = calculateROI({ ...userData, growth: growthValue })
          
          botResponse = `🎯 **SEU ROI CALCULADO:**

**Situação Atual:**
• Visitantes: ${roiData.currentVisitors}/mês
• Receita: AOA ${roiData.currentRevenue.toLocaleString()}/mês

**Com +${growthValue}% de Tráfego:**
• Visitantes: ${roiData.newVisitors}/mês
• Receita: AOA ${roiData.newRevenue.toLocaleString()}/mês
• **Lucro Extra: AOA ${roiData.additionalRevenue.toLocaleString()}/mês**
• **ROI: ${roiData.roi}%** 🚀

**Investimento sugerido: AOA ${Math.round(roiData.additionalRevenue * 0.3).toLocaleString()}/mês**

**Quer implementar essa estratégia?**`
          responseType = "calculation"
          break

        default:
          botResponse = "Interessante! Pode me contar mais sobre o que você precisa? Vou te ajudar a encontrar a melhor solução!"
      }
      
      addMessage(botResponse, "bot", responseType, responseData)
    }, 1500)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    
    addMessage(inputValue, "user")
    const userMessage = inputValue.toLowerCase()
    setInputValue("")
    setIsTyping(true)
    
    // Respostas inteligentes baseadas no contexto
    setTimeout(() => {
      let botResponse = ""
      let responseType: "text" | "quick-reply" | "contact" | "calculation" | "explanation" | "suggestion" = "text"
      let responseData: any = null

      // Detecção de intenções
      if (userMessage.includes("preço") || userMessage.includes("custo") || userMessage.includes("quanto")) {
        botResponse = `💰 **NOSSOS PREÇOS SÃO TRANSPARENTES E JUSTOS:**

**Pacote Básico:** AOA 50.000/mês
• Até 1.000 visitantes/mês
• 2 campanhas ativas
• Relatórios semanais

**Pacote Profissional:** AOA 100.000/mês
• Até 5.000 visitantes/mês
• 5 campanhas ativas
• Relatórios diários
• Suporte prioritário

**Pacote Empresarial:** AOA 200.000/mês
• Tráfego ilimitado
• Campanhas ilimitadas
• Relatórios em tempo real
• Consultoria personalizada

**💡 Lembre-se: O investimento se paga com o aumento de vendas!**

Quer calcular seu ROI personalizado?`
        responseType = "suggestion"
      } else if (userMessage.includes("como") || userMessage.includes("funciona")) {
        botResponse = getExplanation("how_works")
        responseType = "explanation"
      } else if (userMessage.includes("roi") || userMessage.includes("retorno")) {
        botResponse = getExplanation("roi_explanation")
        responseType = "explanation"
      } else if (userMessage.includes("resultado") || userMessage.includes("sucesso")) {
        botResponse = `📊 **NOSSOS RESULTADOS FALAM POR SI:**

**Média dos nossos clientes:**
• +300% de aumento no tráfego
• +150% de aumento nas vendas
• ROI médio de 200%
• Tempo de retorno: 30 dias

**Quer ver casos específicos do seu nicho?**`
        responseType = "suggestion"
      } else if (userMessage.includes("tempo") || userMessage.includes("quando")) {
        botResponse = `⏰ **TEMPO PARA VER RESULTADOS:**

**Primeiros resultados:** 7-14 dias
• Campanhas ativas
• Primeiros cliques
• Dados iniciais

**Resultados consistentes:** 30 dias
• Padrões estabelecidos
• Otimizações aplicadas
• ROI positivo

**Resultados máximos:** 90 dias
• Campanhas refinadas
• Público segmentado
• Máxima eficiência

**Começamos imediatamente após o pagamento!**`
        responseType = "explanation"
      } else if (userMessage.includes("contato") || userMessage.includes("falar")) {
        botResponse = `👨‍💼 **FALAR COM ESPECIALISTA:**

**Nossos especialistas estão prontos para te ajudar:**

📞 **Telefone:** +244 923 456 789
📧 **Email:** especialistas@mto.ao
💬 **WhatsApp:** +244 923 456 789

**Horário de atendimento:**
• Segunda a Sexta: 8h às 18h
• Sábado: 8h às 12h

**Ou agende uma consultoria gratuita de 30 minutos!**`
        responseType = "contact"
      } else {
        // Resposta inteligente baseada no contexto
      const responses = [
          "Entendo perfeitamente! Deixe-me te ajudar com isso de forma mais específica.",
          "Excelente pergunta! Vou te explicar de forma clara e simples.",
          "Perfeito! Para isso, temos a solução ideal.",
          "Ótima pergunta! Deixe-me te mostrar como podemos ajudar.",
          "Interessante! Vou te guiar através do melhor caminho."
        ]
        botResponse = responses[Math.floor(Math.random() * responses.length)] + "\n\n**O que você gostaria de saber mais?**"
        responseType = "quick-reply"
        responseData = quickReplies
      }
      
      addMessage(botResponse, "bot", responseType, responseData)
      setIsTyping(false)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", { 
      hour: "2-digit", 
      minute: "2-digit" 
    })
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-end p-4">
          <Card className="w-full max-w-md h-[600px] flex flex-col bg-card/95 backdrop-blur-md border-border/50 shadow-2xl">
            <CardHeader className="pb-3 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Assistente Inteligente MTO</CardTitle>
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-xs">
                      Online • IA Ativa
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              {progress > 0 && (
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Análise em andamento</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : message.type === "explanation"
                          ? "bg-blue-50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800"
                          : message.type === "calculation"
                          ? "bg-green-50 dark:bg-green-950/20 text-green-900 dark:text-green-100 border border-green-200 dark:border-green-800"
                          : message.type === "suggestion"
                          ? "bg-purple-50 dark:bg-purple-950/20 text-purple-900 dark:text-purple-100 border border-purple-200 dark:border-purple-800"
                          : message.type === "contact"
                          ? "bg-orange-50 dark:bg-orange-950/20 text-orange-900 dark:text-orange-100 border border-orange-200 dark:border-orange-800"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <div className="whitespace-pre-line text-sm leading-relaxed">{message.text}</div>
                      <div className={`text-xs mt-2 flex items-center space-x-1 ${
                        message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}>
                        <Clock className="h-3 w-3" />
                        <span>{formatTime(message.timestamp)}</span>
                        {message.type === "explanation" && <Lightbulb className="h-3 w-3 ml-1" />}
                        {message.type === "calculation" && <Calculator className="h-3 w-3 ml-1" />}
                        {message.type === "suggestion" && <Star className="h-3 w-3 ml-1" />}
                        {message.type === "contact" && <Phone className="h-3 w-3 ml-1" />}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <Button
                        key={reply.id}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs bg-background/50 border-border/50 hover:bg-primary hover:text-primary-foreground flex items-center space-x-2"
                      >
                        {reply.icon && <reply.icon className="h-3 w-3" />}
                        <span>{reply.text}</span>
                      </Button>
                    ))}
                  </div>
                )}

                {/* Dynamic Quick Replies */}
                {messages.length > 1 && messages[messages.length - 1].data && (
                  <div className="flex flex-wrap gap-2">
                    {messages[messages.length - 1].data.map((reply: QuickReply) => (
                      <Button
                        key={reply.id}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs bg-background/50 border-border/50 hover:bg-primary hover:text-primary-foreground flex items-center space-x-2"
                      >
                        {reply.icon && <reply.icon className="h-3 w-3" />}
                        <span>{reply.text}</span>
                      </Button>
                    ))}
                  </div>
                )}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-2xl px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                        <span className="text-sm text-muted-foreground">Analisando sua pergunta...</span>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border/50">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Pergunte sobre tráfego, ROI, preços..."
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="icon"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}



