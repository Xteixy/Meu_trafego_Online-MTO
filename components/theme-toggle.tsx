"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useThemeManager } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, currentTheme, mounted, toggleTheme } = useThemeManager()

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="relative h-9 w-9 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm animate-pulse"
      >
        <div className="h-4 w-4 rounded-full bg-muted-foreground/20" />
      </Button>
    )
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4 text-yellow-500" />
      case "dark":
        return <Moon className="h-4 w-4 text-blue-500" />
      case "system":
        return <Monitor className="h-4 w-4 text-secondary" />
      default:
        return <Sun className="h-4 w-4 text-yellow-500" />
    }
  }

  const getThemeTitle = () => {
    switch (theme) {
      case "light":
        return "Tema Claro (Clique para alternar)"
      case "dark":
        return "Tema Escuro (Clique para alternar)"
      case "system":
        return "Tema do Sistema (Clique para alternar)"
      default:
        return "Alternar tema"
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
      title={getThemeTitle()}
    >
      {getThemeIcon()}
      
      {/* Indicador de tema do sistema */}
      {theme === "system" && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-background animate-pulse" />
      )}
      
      <span className="sr-only">
        Alternar tema: {currentTheme === "light" ? "Claro" : "Escuro"}
      </span>
    </Button>
  )
}
