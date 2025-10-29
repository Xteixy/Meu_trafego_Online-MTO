"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeManager() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = resolvedTheme === "dark"
  const isLight = resolvedTheme === "light"

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const setLightTheme = () => setTheme("light")
  const setDarkTheme = () => setTheme("dark")
  const setSystemTheme = () => setTheme("system")

  return {
    theme,
    currentTheme,
    resolvedTheme,
    systemTheme,
    mounted,
    isDark,
    isLight,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
  }
}



