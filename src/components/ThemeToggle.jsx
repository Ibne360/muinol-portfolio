import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/theme.jsx'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-fg/10 bg-fg/[0.04] text-fg transition hover:border-gold-300/50 hover:text-gold-300 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ y: -16, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 16, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 grid place-items-center"
          >
            <Moon size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: 16, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -16, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 grid place-items-center"
          >
            <Sun size={18} />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Glow */}
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-gold-300/0 to-gold-500/0 transition-opacity duration-300 hover:from-gold-300/20 hover:to-gold-500/10" />
    </button>
  )
}
