import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  toggle: () => {},
  setTheme: () => {}
})

const STORAGE_KEY = 'muinol.theme'

function resolveInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {}
  if (window.matchMedia?.('(prefers-color-scheme: light)').matches) return 'light'
  return 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => resolveInitialTheme())

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    root.style.colorScheme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {}
  }, [theme])

  // Follow system pref live (only when user hasn't explicitly chosen)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia('(prefers-color-scheme: light)')
    const handler = (e) => {
      try {
        // Only update if there is no stored explicit preference
        if (localStorage.getItem(STORAGE_KEY)) return
      } catch {}
      setThemeState(e.matches ? 'light' : 'dark')
    }
    mql.addEventListener?.('change', handler)
    return () => mql.removeEventListener?.('change', handler)
  }, [])

  const setTheme = (next) => setThemeState(next === 'light' ? 'light' : 'dark')
  const toggle = () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
