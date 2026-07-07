'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { themes, activeTheme } from '@/lib/themes'
import type { ThemeKey } from '@/lib/themes'

const STORAGE_KEY = 'vg-theme'

type ThemeCtx = { theme: ThemeKey; setTheme: (t: ThemeKey) => void }

export const ThemeContext = createContext<ThemeCtx>({
  theme: activeTheme,
  setTheme: () => {},
})

function applyTheme(key: ThemeKey) {
  document.documentElement.setAttribute('data-theme', key)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeKey>(activeTheme)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeKey | null
    const initial = saved && themes[saved] ? saved : activeTheme
    setThemeState(initial)
    applyTheme(initial)
  }, [])

  function setTheme(key: ThemeKey) {
    setThemeState(key)
    applyTheme(key)
    localStorage.setItem(STORAGE_KEY, key)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
