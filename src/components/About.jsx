import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Globe, ShoppingBag, CheckCircle2 } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter.jsx'

const highlights = [
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    desc: 'AI automation, custom tools, model integrations and intelligent workflows.',
    accent: 'from-fuchsia-400/30 to-violet-600/20'
  },
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Robust, scalable applications built with modern tech and clean architecture.',
    accent: 'from-cyan-400/30 to-blue-600/20'
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'High-performance, beautifully designed websites that convert visitors.',
    accent: 'from-emerald-400/30 to-teal-600/20'
  },
  {
    icon: ShoppingBag,
    title: 'International E‑commerce',
    desc: 'Amazon FBA, dropshipping and global brand-building strategies that scale.',
    accent: 'from-gold-300/30 to-amber-600/20'
  }
]

const bullets = [
  'End-to-end product thinking: strategy → design → ship',
  'AI-first mindset across every project',
  'Clean code, premium UX, measurable outcomes',
  'Cross-border business expertise (UK ↔ Global)'
]

const stats = [
  { value: 5, suffix: '+', label: 'Years building' },
  { value: 40, suffix: '+', label: 'Projects shipped' },
  { value: 12, suffix: '', label: 'AI agents deployed' },
  { value: 8, suffix: '', label: 'Countries served' }
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative aurora blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-gold-500/10 blur-3xl animate-aurora-2" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/8 blur-3xl animate-aurora-3" />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Heading column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">About</span>
            <h2 className="section-title mt-5">
              A builder at the <span className="gradient-flow-text">intersection</span> of
              code, AI and commerce.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-fg/70">
              I'm Muinol Islam — founder of <span className="font-semibold text-fg">KinetiMart</span>
              {' '}and a multi-disciplinary technologist. For years I've helped
              founders and businesses ship intelligent products and grow online
              with AI-powered systems and global e-commerce.
            </p>

            {/* Bullet pills with animated icon */}
            <ul className="mt-8 space-y-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="group flex items-center gap-3 rounded-xl border border-fg/5 bg-fg/[0.02] p-3 backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:border-gold-300/30 hover:bg-fg/[0.05]"
                >
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-gradient-to-br from-gold-300/30 to-gold-600/10 text-gold-400 ring-1 ring-gold-300/25 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="text-fg/80">{b}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#projects" className="btn-ghost">See Projects</a>
            </div>

            {/* Animated stats row */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="group relative overflow-hidden rounded-xl border border-fg/8 bg-fg/[0.03] p-4 backdrop-blur-sm transition-all duration-500 hover:border-gold-300/40 hover:-translate-y-1"
                >
                  <span className="pointer-events-none absolute inset-0 mesh-card rounded-xl opacity-30 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="relative">
                    <div className="font-display text-3xl font-bold leading-none gradient-flow-text">
                      <AnimatedCounter to={s.value} suffix={s.suffix} duration={1.6} />
                    </div>
                    <div className="mt-1.5 text-[11px] uppercase tracking-widest text-fg/55">
                      {s.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card animated-border group relative overflow-hidden"
              >
                {/* Per-card accent glow */}
                <span
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${h.accent} opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                {/* Mesh ambient */}
                <span className="pointer-events-none absolute inset-0 mesh-card rounded-2xl opacity-30 transition-opacity duration-700 group-hover:opacity-80" />

                <div className="relative">
                  {/* Icon with rotating glow ring on hover */}
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="relative mb-5 inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-gold-200/40 to-gold-600/20 text-gold-500 shadow-gold ring-1 ring-gold-400/30 dark:text-gold-300 dark:ring-gold-300/20"
                  >
                    {/* Spinning conic ring on hover */}
                    <span
                      className="pointer-events-none absolute -inset-1.5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          'conic-gradient(from 0deg, transparent 0%, rgba(245,220,122,0.6) 25%, transparent 50%, rgba(168,85,247,0.5) 75%, transparent 100%)',
                        animation: 'spin 4s linear infinite',
                        WebkitMaskImage:
                          'radial-gradient(circle, transparent 60%, black 62%)',
                        maskImage:
                          'radial-gradient(circle, transparent 60%, black 62%)'
                      }}
                    />
                    <h.icon size={26} className="relative" />
                  </motion.div>

                  <h3 className="font-display text-xl font-semibold text-fg">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/65">
                    {h.desc}
                  </p>
                </div>

                {/* Corner pulse dot */}
                <span className="pointer-events-none absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-gold-400/70 animate-pulse-slow" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
