import type { ComponentType } from 'react'
import type { ThemeKey } from './themes'

export type DesignComponents = {
  Hero: ComponentType
  Services: ComponentType
}

// Lazy-load all 13 design variants so only the active one is bundled per page.
// Each import() returns a module; we grab the named export.

export const designRegistry: Partial<Record<ThemeKey, () => Promise<DesignComponents>>> = {
  'trust-navy': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d01/Hero'),
      import('@/components/designs/d01/Services'),
    ])
    return { Hero: h.D01Hero, Services: s.D01Services }
  },
  'warm-bronze': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d02/Hero'),
      import('@/components/designs/d02/Services'),
    ])
    return { Hero: h.D02Hero, Services: s.D02Services }
  },
  'quiet-luxe': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d03/Hero'),
      import('@/components/designs/d03/Services'),
    ])
    return { Hero: h.D03Hero, Services: s.D03Services }
  },
  'mint-modern': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d04/Hero'),
      import('@/components/designs/d04/Services'),
    ])
    return { Hero: h.D04Hero, Services: s.D04Services }
  },
  'editorial-paper': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d05/Hero'),
      import('@/components/designs/d05/Services'),
    ])
    return { Hero: h.D05Hero, Services: s.D05Services }
  },
  'bold-confident': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d06/Hero'),
      import('@/components/designs/d06/Services'),
    ])
    return { Hero: h.D06Hero, Services: s.D06Services }
  },
  'emerald-brass': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d07/Hero'),
      import('@/components/designs/d07/Services'),
    ])
    return { Hero: h.D07Hero, Services: s.D07Services }
  },
  'peach-warm': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d08/Hero'),
      import('@/components/designs/d08/Services'),
    ])
    return { Hero: h.D08Hero, Services: s.D08Services }
  },
  'sky-blue': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d09/Hero'),
      import('@/components/designs/d09/Services'),
    ])
    return { Hero: h.D09Hero, Services: s.D09Services }
  },
  'lilac-bright': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d10/Hero'),
      import('@/components/designs/d10/Services'),
    ])
    return { Hero: h.D10Hero, Services: s.D10Services }
  },
  sunburst: async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d11/Hero'),
      import('@/components/designs/d11/Services'),
    ])
    return { Hero: h.D11Hero, Services: s.D11Services }
  },
  'mint-blush': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d12/Hero'),
      import('@/components/designs/d12/Services'),
    ])
    return { Hero: h.D12Hero, Services: s.D12Services }
  },
  'pop-art': async () => {
    const [h, s] = await Promise.all([
      import('@/components/designs/d13/Hero'),
      import('@/components/designs/d13/Services'),
    ])
    return { Hero: h.D13Hero, Services: s.D13Services }
  },
}
