"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"

interface User {
  id: string
  email: string
  name: string
  company?: string
  phone?: string
  plan: 'STARTER' | 'PROFESSIONAL' | 'ENTERPRISE'
  avatar?: string
  isActive: boolean
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: Omit<User, "id" | "isActive">) => Promise<boolean>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Versão simplificada sem dependências externas
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simular login bem-sucedido para desenvolvimento
      const mockUser: User = {
        id: "mock-user-id",
        email,
        name: "Usuário Demo",
        company: "Empresa Demo",
        phone: "(11) 99999-9999",
        plan: 'STARTER',
        isActive: true
      }
      
      setUser(mockUser)
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo de volta!",
      })
      
      return true
    } catch (error) {
      console.error("Erro no login:", error)
      toast({
        title: "Erro no login",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      })
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: Omit<User, "id" | "isActive">): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simular registro bem-sucedido para desenvolvimento
      const mockUser: User = {
        id: "mock-user-id",
        ...userData,
        isActive: true
      }
      
      setUser(mockUser)
      toast({
        title: "Conta criada com sucesso!",
        description: "Bem-vindo ao MTO!",
      })
      
      return true
    } catch (error) {
      console.error("Erro no registro:", error)
      toast({
        title: "Erro no registro",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      })
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    toast({
      title: "Logout realizado",
      description: "Até logo!",
    })
    router.push('/')
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData })
    }
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
