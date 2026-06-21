export type ThemeTokens = {
  '--vg-bg': string
  '--vg-surface': string
  '--vg-surface-2': string
  '--vg-ink': string
  '--vg-ink-soft': string
  '--vg-muted': string
  '--vg-line': string
  '--vg-brand': string
  '--vg-brand-press': string
  '--vg-accent': string
  '--vg-on-brand': string
  '--vg-on-accent': string
  '--vg-cta-bg': string
  '--vg-cta-ink': string
  '--vg-hero-bg': string
  '--vg-hero-ink': string
  '--vg-hero-eyebrow': string
  '--vg-hero-accent'?: string
  '--vg-bar-bg': string
  '--vg-bar-ink': string
  '--vg-frame-back': string
  '--vg-frame-radius': string
  '--vg-font-display': string
  '--vg-font-body': string
  '--vg-radius': string
  '--vg-radius-sm': string
  '--vg-radius-btn': string
  '--vg-shadow': string
  '--vg-shadow-sm': string
  '--vg-display-spacing': string
  '--vg-h1-weight': string
}

export type ThemeKey =
  | 'warm-bronze'
  | 'trust-navy'
  | 'quiet-luxe'
  | 'coral-midnight'
  | 'azure-cloud'
  | 'forest-clay'

export const themes: Record<ThemeKey, { name: string; tokens: ThemeTokens }> = {
  'warm-bronze': {
    name: 'Warm Bronze & Espresso',
    tokens: {
      '--vg-bg': '#F3E9D7',
      '--vg-surface': '#FDF6EC',
      '--vg-surface-2': '#EAD9BF',
      '--vg-ink': '#2E2620',
      '--vg-ink-soft': '#5C4A3A',
      '--vg-muted': '#8C7460',
      '--vg-line': '#DDD0B8',
      '--vg-brand': '#9A6A3C',
      '--vg-brand-press': '#7A5230',
      '--vg-accent': '#B8854F',
      '--vg-on-brand': '#FFFFFF',
      '--vg-on-accent': '#FFFFFF',
      '--vg-cta-bg': '#9A6A3C',
      '--vg-cta-ink': '#FFFFFF',
      '--vg-hero-bg': '#F3E9D7',
      '--vg-hero-ink': '#2E2620',
      '--vg-hero-eyebrow': '#9A6A3C',
      '--vg-hero-accent': '#B8854F',
      '--vg-bar-bg': '#2E2620',
      '--vg-bar-ink': '#F3E9D7',
      '--vg-frame-back': '#B8854F',
      '--vg-frame-radius': '24px',
      '--vg-font-display': "'Lora', Georgia, serif",
      '--vg-font-body': "'Inter', system-ui, sans-serif",
      '--vg-radius': '12px',
      '--vg-radius-sm': '6px',
      '--vg-radius-btn': '13px',
      '--vg-shadow': '0 4px 24px rgba(46,38,32,0.10)',
      '--vg-shadow-sm': '0 2px 8px rgba(46,38,32,0.07)',
      '--vg-display-spacing': '-0.02em',
      '--vg-h1-weight': '600',
    },
  },
  'trust-navy': {
    name: 'Trust Navy & Sage',
    tokens: {
      '--vg-bg': '#F4F1EA',
      '--vg-surface': '#FFFFFF',
      '--vg-surface-2': '#E8E3D8',
      '--vg-ink': '#16263D',
      '--vg-ink-soft': '#2D4A6E',
      '--vg-muted': '#5A7394',
      '--vg-line': '#D4CEBC',
      '--vg-brand': '#16263D',
      '--vg-brand-press': '#0D1929',
      '--vg-accent': '#5C8268',
      '--vg-on-brand': '#FFFFFF',
      '--vg-on-accent': '#FFFFFF',
      '--vg-cta-bg': '#16263D',
      '--vg-cta-ink': '#FFFFFF',
      '--vg-hero-bg': '#16263D',
      '--vg-hero-ink': '#FFFFFF',
      '--vg-hero-eyebrow': '#5C8268',
      '--vg-bar-bg': '#5C8268',
      '--vg-bar-ink': '#FFFFFF',
      '--vg-frame-back': '#5C8268',
      '--vg-frame-radius': '20px',
      '--vg-font-display': "'Bricolage Grotesque', 'Inter', sans-serif",
      '--vg-font-body': "'Inter', system-ui, sans-serif",
      '--vg-radius': '10px',
      '--vg-radius-sm': '5px',
      '--vg-radius-btn': '10px',
      '--vg-shadow': '0 4px 24px rgba(22,38,61,0.12)',
      '--vg-shadow-sm': '0 2px 8px rgba(22,38,61,0.08)',
      '--vg-display-spacing': '-0.03em',
      '--vg-h1-weight': '700',
    },
  },
  'quiet-luxe': {
    name: 'Quiet Luxe Monochrome + Gold',
    tokens: {
      '--vg-bg': '#FAF9F6',
      '--vg-surface': '#FFFFFF',
      '--vg-surface-2': '#F0EEE9',
      '--vg-ink': '#1A1A1A',
      '--vg-ink-soft': '#3D3D3D',
      '--vg-muted': '#6B6B6B',
      '--vg-line': '#E0DDD6',
      '--vg-brand': '#1A1A1A',
      '--vg-brand-press': '#000000',
      '--vg-accent': '#B7942F',
      '--vg-on-brand': '#FFFFFF',
      '--vg-on-accent': '#FFFFFF',
      '--vg-cta-bg': '#B7942F',
      '--vg-cta-ink': '#FFFFFF',
      '--vg-hero-bg': '#1A1A1A',
      '--vg-hero-ink': '#FAF9F6',
      '--vg-hero-eyebrow': '#B7942F',
      '--vg-bar-bg': '#1A1A1A',
      '--vg-bar-ink': '#FAF9F6',
      '--vg-frame-back': '#B7942F',
      '--vg-frame-radius': '4px',
      '--vg-font-display': "'Crimson Pro', 'Georgia', serif",
      '--vg-font-body': "'Inter', system-ui, sans-serif",
      '--vg-radius': '4px',
      '--vg-radius-sm': '2px',
      '--vg-radius-btn': '4px',
      '--vg-shadow': '0 4px 24px rgba(0,0,0,0.10)',
      '--vg-shadow-sm': '0 2px 8px rgba(0,0,0,0.06)',
      '--vg-display-spacing': '-0.01em',
      '--vg-h1-weight': '400',
    },
  },
  'coral-midnight': {
    name: 'Coral & Midnight',
    tokens: {
      '--vg-bg': '#FBF1E6',
      '--vg-surface': '#FFFFFF',
      '--vg-surface-2': '#F2E4CE',
      '--vg-ink': '#27314F',
      '--vg-ink-soft': '#3D4E72',
      '--vg-muted': '#6678A0',
      '--vg-line': '#E0D4BC',
      '--vg-brand': '#F1543F',
      '--vg-brand-press': '#D03D2A',
      '--vg-accent': '#F6B33F',
      '--vg-on-brand': '#FFFFFF',
      '--vg-on-accent': '#27314F',
      '--vg-cta-bg': '#F1543F',
      '--vg-cta-ink': '#FFFFFF',
      '--vg-hero-bg': '#27314F',
      '--vg-hero-ink': '#FFFFFF',
      '--vg-hero-eyebrow': '#F6B33F',
      '--vg-hero-accent': '#F6B33F',
      '--vg-bar-bg': '#0E7C8B',
      '--vg-bar-ink': '#FFFFFF',
      '--vg-frame-back': '#F6B33F',
      '--vg-frame-radius': '46% 54% 58% 42% / 54% 44% 56% 46%',
      '--vg-font-display': "'Bricolage Grotesque', 'Inter', sans-serif",
      '--vg-font-body': "'Inter', system-ui, sans-serif",
      '--vg-radius': '14px',
      '--vg-radius-sm': '8px',
      '--vg-radius-btn': '999px',
      '--vg-shadow': '0 4px 24px rgba(39,49,79,0.12)',
      '--vg-shadow-sm': '0 2px 8px rgba(39,49,79,0.08)',
      '--vg-display-spacing': '-0.02em',
      '--vg-h1-weight': '700',
    },
  },
  'azure-cloud': {
    name: 'Azure & Cloud',
    tokens: {
      '--vg-bg': '#E3E7EF',
      '--vg-surface': '#FFFFFF',
      '--vg-surface-2': '#D0D6E4',
      '--vg-ink': '#16356B',
      '--vg-ink-soft': '#2A4E8C',
      '--vg-muted': '#4E6FA0',
      '--vg-line': '#C0C8D8',
      '--vg-brand': '#1F6FD6',
      '--vg-brand-press': '#1558B0',
      '--vg-accent': '#F5D416',
      '--vg-on-brand': '#FFFFFF',
      '--vg-on-accent': '#16356B',
      '--vg-cta-bg': '#F5D416',
      '--vg-cta-ink': '#16356B',
      '--vg-hero-bg': '#E3E7EF',
      '--vg-hero-ink': '#16356B',
      '--vg-hero-eyebrow': '#1F6FD6',
      '--vg-bar-bg': '#16356B',
      '--vg-bar-ink': '#FFFFFF',
      '--vg-frame-back': '#1F6FD6',
      '--vg-frame-radius': '8px',
      '--vg-font-display': "'Instrument Sans', 'Inter', sans-serif",
      '--vg-font-body': "'Inter', system-ui, sans-serif",
      '--vg-radius': '10px',
      '--vg-radius-sm': '5px',
      '--vg-radius-btn': '8px',
      '--vg-shadow': '0 4px 24px rgba(22,53,107,0.12)',
      '--vg-shadow-sm': '0 2px 8px rgba(22,53,107,0.08)',
      '--vg-display-spacing': '-0.02em',
      '--vg-h1-weight': '700',
    },
  },
  'forest-clay': {
    name: 'Forest & Clay',
    tokens: {
      '--vg-bg': '#F4F1E9',
      '--vg-surface': '#FFFFFF',
      '--vg-surface-2': '#E8E3D4',
      '--vg-ink': '#1D2E26',
      '--vg-ink-soft': '#314C3F',
      '--vg-muted': '#5A7A6A',
      '--vg-line': '#D4CCBA',
      '--vg-brand': '#314C3F',
      '--vg-brand-press': '#203328',
      '--vg-accent': '#D98E73',
      '--vg-on-brand': '#FFFFFF',
      '--vg-on-accent': '#FFFFFF',
      '--vg-cta-bg': '#D98E73',
      '--vg-cta-ink': '#FFFFFF',
      '--vg-hero-bg': '#2E4039',
      '--vg-hero-ink': '#FFFFFF',
      '--vg-hero-eyebrow': '#D98E73',
      '--vg-hero-accent': '#D98E73',
      '--vg-bar-bg': '#314C3F',
      '--vg-bar-ink': '#FFFFFF',
      '--vg-frame-back': '#D98E73',
      '--vg-frame-radius': '999px',
      '--vg-font-display': "'Libre Baskerville', 'Georgia', serif",
      '--vg-font-body': "'Inter', system-ui, sans-serif",
      '--vg-radius': '12px',
      '--vg-radius-sm': '6px',
      '--vg-radius-btn': '999px',
      '--vg-shadow': '0 4px 24px rgba(30,46,38,0.10)',
      '--vg-shadow-sm': '0 2px 8px rgba(30,46,38,0.06)',
      '--vg-display-spacing': '-0.01em',
      '--vg-h1-weight': '400',
    },
  },
}

// ← Change this one line to switch the active theme across the entire site
export const activeTheme: ThemeKey = 'warm-bronze'
