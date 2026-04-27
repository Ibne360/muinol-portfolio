import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Globe, ShoppingBag, CheckCircle2 } from 'lucide-react'

const highlights = [
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    desc: 'AI automation, custom tools, model integrations and intelligent workflows.'
  },
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Robust, scalable applications built with modern tech and clean architecture.'
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'High-performance, beautifully designed websites that convert visitors.'
  },
  {
    icon: ShoppingBag,
    title: 'International E‑commerce',
    desc: 'Amazon FBA, dropshipping and global brand-building strategies that scale.'
  }
]

const bullets = [
  'End-to-end product thinking: strategy → design → ship',
  'AI-first mindset across every project',
  'Clean code, premium UX, measurable outcomes',
  'Cross-border business expertise (UK ↔ Global)'
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x">
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
              A builder at the <span className="gold-text">intersection</span> of
              code, AI and commerce.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-fg/70">
              I'm Muinol Islam — founder of <span className="font-semibold text-fg">KinetiMart</span>
              {' '}and a multi-disciplinary technologist. For years I've helped
              founders and businesses ship intelligent products and grow online
              with AI-powered systems and global e-commerce.
            </p>

            <ul className="mt-8 space-y-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3 text-fg/80"
                >
                  <CheckCircle2 size={20} className="mt-0.5 flex-none text-gold-400" />
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#projects" className="btn-ghost">See Projects</a>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card animated-border group"
              >
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold-200/30 to-gold-600/15 text-gold-500 ring-1 ring-gold-400/30 dark:text-gold-300 dark:ring-gold-300/20"
                >
                  <h.icon size={22} />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-fg">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/65">
                  {h.desc}
                </p>

                {/* corner accent */}
                <span className="pointer-events-none absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-gold-400/70 animate-pulse-slow" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
