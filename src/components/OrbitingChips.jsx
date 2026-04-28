import { motion } from 'framer-motion'
import { Cpu, Code2, Sparkles, Brain, Zap, Globe2 } from 'lucide-react'

/**
 * OrbitingChips
 * 6 small glass tech chips arranged around the portrait.
 * The outer container slowly rotates clockwise; each chip counter-rotates
 * to stay upright. Each chip also has its own gentle drift for life.
 *
 * Hidden on small screens to keep the hero clean on mobile.
 */
const chips = [
  { Icon: Cpu, label: 'AI', color: 'from-fuchsia-400 to-pink-500', angle: 0 },
  { Icon: Code2, label: 'React', color: 'from-cyan-400 to-blue-500', angle: 60 },
  { Icon: Sparkles, label: 'Auto', color: 'from-gold-200 to-gold-500', angle: 120 },
  { Icon: Brain, label: 'LLM', color: 'from-violet-400 to-indigo-500', angle: 180 },
  { Icon: Zap, label: 'Fast', color: 'from-amber-300 to-orange-500', angle: 240 },
  { Icon: Globe2, label: 'Global', color: 'from-emerald-400 to-teal-500', angle: 300 }
]

export default function OrbitingChips() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {/* Outer ring rotates clockwise */}
      <div className="absolute inset-0 animate-spin-orbit">
        {chips.map((c) => {
          const radius = 60 // % of parent (centre = 50, edges = 50, > 50 sits outside)
          const rad = (c.angle * Math.PI) / 180
          const left = 50 + Math.cos(rad) * radius
          const top = 50 + Math.sin(rad) * radius

          return (
            <div
              key={c.label}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Counter-rotate so labels stay upright while the outer ring spins */}
              <div className="animate-spin-orbit-reverse">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5 + (c.angle / 60) * 0.1,
                    duration: 0.6
                  }}
                  className="pointer-events-auto"
                >
                  <div className="group flex items-center gap-2 rounded-full glass-ultra px-3 py-1.5 shadow-lg ring-1 ring-white/10 transition-all hover:scale-110 hover:ring-gold-300/50">
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br ${c.color} text-white shadow-md`}
                    >
                      <c.Icon size={12} />
                    </span>
                    <span className="text-xs font-semibold text-fg/90">
                      {c.label}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
