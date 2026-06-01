import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export const THEMES = {
  light: {
    name: 'LUXURY',
    bg: '#faf9f6',
    surface: '#ffffff',
    text: '#111111',
    textMuted: '#666666',
    accent: '#111111',
    accentMuted: '#777777',
    border: 'rgba(0, 0, 0, 0.08)',
    btnGrad: 'linear-gradient(135deg, #111111, #333333)',
    shadow: '0 10px 30px rgba(0,0,0,0.03)',
    glassBg: 'rgba(255, 255, 255, 0.85)',
    glassBorder: 'rgba(0, 0, 0, 0.06)',
    glow: 'rgba(0, 0, 0, 0.05)',
  }
}

export function ThemeProvider({ children }) {
  // Lock the theme key strictly to light (Luxury Mode)
  const themeKey = 'light'
  const theme = THEMES.light

  useEffect(() => {
    localStorage.setItem('nexus_theme', 'light')
    
    // Apply visual styling properties directly to the DOM for global styles
    const root = document.documentElement
    root.style.setProperty('--border-color', theme.glassBorder)
    root.style.setProperty('color-scheme', 'light')
    
    document.body.style.backgroundColor = theme.bg
    document.body.style.color = theme.text
    document.body.style.transition = 'background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, themeKey, setThemeKey: () => {}, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
