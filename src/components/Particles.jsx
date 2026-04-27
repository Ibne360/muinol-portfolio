import { useMemo } from 'react'
import { motion } from 'framer-motion'

/**
 * Lightweight animated background of golden floating "stars".
 * Pure CSS/SVG (no canvas) so it stays performant on mobile.
 */
export default function Particles({ count = 28, className = '' }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 6,
        opacity: 0.25 + Math.random() * 0.5
      })),
    [count]
  )

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {items.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, p.opacity, 0],
            scale: [0.6, 1, 0.6],
            y: [0, -30, 0]
          }}
          transition={{
            delay: p.delay,
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${p.size * 4}px rgba(245, 220, 122, 0.7)`
          }}
          className="absolute rounded-full bg-gold-200"
        />
      ))}
    </div>
  )
}
