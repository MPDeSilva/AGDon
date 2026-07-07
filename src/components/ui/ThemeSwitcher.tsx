'use client'

import { useEffect, useRef, useState } from 'react'
import { themes } from '@/lib/themes'
import type { ThemeKey } from '@/lib/themes'
import { useTheme } from './ThemeProvider'

const THEME_KEYS = Object.keys(themes) as ThemeKey[]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  function pick(key: ThemeKey) {
    setTheme(key)
    setOpen(false)
  }

  const current = themes[theme]

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch design theme"
        aria-expanded={open}
        aria-haspopup="listbox"
        title="Switch theme"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 10px',
          borderRadius: 'var(--vg-radius-btn)',
          border: '1px solid var(--vg-line)',
          backgroundColor: 'var(--vg-surface)',
          color: 'var(--vg-ink)',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 500,
          transition: 'border-color 0.15s',
        }}
      >
        {/* Live swatch of active theme */}
        <Swatch brand={current.tokens['--vg-brand']} accent={current.tokens['--vg-accent']} />
        <span className="hidden sm:inline" style={{ maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {current.name.split(' — ')[0]}
        </span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.5, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Select theme"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            width: 230,
            maxHeight: 320,
            overflowY: 'auto',
            backgroundColor: 'var(--vg-surface)',
            border: '1px solid var(--vg-line)',
            borderRadius: 'var(--vg-radius)',
            boxShadow: 'var(--vg-shadow)',
            zIndex: 200,
            padding: '6px',
          }}
        >
          {THEME_KEYS.map((key) => {
            const t = themes[key]
            const isActive = key === theme
            return (
              <button
                key={key}
                role="option"
                aria-selected={isActive}
                onClick={() => pick(key)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '7px 10px',
                  borderRadius: 'calc(var(--vg-radius) - 2px)',
                  border: 'none',
                  backgroundColor: isActive ? 'var(--vg-surface-2)' : 'transparent',
                  color: isActive ? 'var(--vg-ink)' : 'var(--vg-ink-soft)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'background-color 0.1s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--vg-bg)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                }}
              >
                <Swatch brand={t.tokens['--vg-brand']} accent={t.tokens['--vg-accent']} />
                <span style={{ flex: 1, lineHeight: 1.3 }}>
                  <span style={{ display: 'block' }}>{t.name.split(' — ')[0]}</span>
                  <span style={{ display: 'block', fontSize: 11, opacity: 0.55 }}>{t.name.split(' — ')[1] ?? ''}</span>
                </span>
                {isActive && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7l3.5 3.5L12 3" stroke="var(--vg-brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Swatch({ brand, accent }: { brand: string; accent: string }) {
  return (
    <span style={{ position: 'relative', width: 20, height: 20, flexShrink: 0, display: 'inline-block' }}>
      <span style={{
        position: 'absolute', inset: 0,
        borderRadius: '50%',
        background: brand,
      }} />
      <span style={{
        position: 'absolute',
        right: -1, bottom: -1,
        width: 10, height: 10,
        borderRadius: '50%',
        background: accent,
        border: '1.5px solid var(--vg-surface)',
      }} />
    </span>
  )
}
