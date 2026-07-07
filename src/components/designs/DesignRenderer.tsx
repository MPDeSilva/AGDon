'use client'

import { useEffect, useState, type ComponentType } from 'react'
import { useTheme } from '@/components/ui/ThemeProvider'
import { designRegistry } from '@/lib/design-registry'

// Fallback components for legacy themes without registered designs
import { D01Hero } from './d01/Hero'
import { D01Services } from './d01/Services'

type Slot = 'Hero' | 'Services'

function useDesignComponent(slot: Slot): ComponentType | null {
  const { theme } = useTheme()
  const [Component, setComponent] = useState<ComponentType | null>(null)

  useEffect(() => {
    const loader = designRegistry[theme]
    if (!loader) {
      setComponent(slot === 'Hero' ? D01Hero : D01Services)
      return
    }
    let cancelled = false
    loader().then((m) => {
      if (!cancelled) setComponent(() => m[slot])
    })
    return () => { cancelled = true }
  }, [theme, slot])

  return Component
}

export function HeroRenderer() {
  const Hero = useDesignComponent('Hero')
  if (!Hero) return null
  return <Hero />
}

export function ServicesRenderer() {
  const Services = useDesignComponent('Services')
  if (!Services) return null
  return <Services />
}
