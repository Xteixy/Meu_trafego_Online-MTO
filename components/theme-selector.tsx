"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Monitor, Check } from "lucide-react"
import { useThemeManager } from "@/hooks/use-theme"

export function ThemeSelector() {
  const { theme, currentTheme, mounted, setLightTheme, setDarkTheme, setSystemTheme } = useThemeManager()
  const [open, setOpen] = useState(false)

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

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Claro"
      case "dark":
        return "Escuro"
      case "system":
        return "Sistema"
      default:
        return "Tema"
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative h-9 px-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
        >
          {getThemeIcon()}
          <span className="ml-2 text-sm font-medium hidden sm:inline-block">
            {getThemeLabel()}
          </span>
          
          {/* Indicador de tema do sistema */}
          {theme === "system" && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-background animate-pulse" />
          )}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem
          onClick={() => {
            setLightTheme()
            setOpen(false)
          }}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 text-yellow-500" />
            <span>Tema Claro</span>
          </div>
          {theme === "light" && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={() => {
            setDarkTheme()
            setOpen(false)
          }}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <Moon className="h-4 w-4 text-blue-500" />
            <span>Tema Escuro</span>
          </div>
          {theme === "dark" && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={() => {
            setSystemTheme()
            setOpen(false)
          }}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <Monitor className="h-4 w-4 text-secondary" />
            <span>Tema do Sistema</span>
          </div>
          {theme === "system" && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}



