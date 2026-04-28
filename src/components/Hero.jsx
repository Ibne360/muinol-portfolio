import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Mail } from 'lucide-react'
import Particles from './Particles.jsx'
import AnimatedCounter from './AnimatedCounter.jsx'

const headline = 'Building Smart Solutions with AI'
const portraitSrc = '/images/portrait.jpg'

export default function Hero() {
  const sectionRef = useRef(null)

  // Mouse-tracked spotlight on the hero section
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--mx', `${x}%`)
      el.style.setProperty('--my', `${y}%`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  // Safety net: if portrait.jpg ever fails to load, fall back to the SVG silhouette.
  const handleImgError = (e) => {
    if (!e.target.dataset.fallback) {
      e.target.dataset.fallback = '1'
      e.target.src = '/images/portrait-placeholder.svg'
    }
  }

  // Stagger word-by-word headline reveal
  const words = headline.split(' ')

  return (
    <section
      ref={sectionRef}
      id="home"
      className="spotlight relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />

      {/* Animated blob orbs */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-gold-500/15 blur-[120px] animate-blob" />
      <div
        className="pointer-events-none absolute -right-40 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-[140px] animate-blob"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px] animate-blob"
        style={{ animationDelay: '8s' }}
      />

      {/* Particles */}
      <Particles count={26} className="-z-10" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        {/* Text */}
        <div className="relative z-10 lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <Sparkles size={14} className="text-gold-400" />
            </motion.span>
            Software · AI · Entrepreneurship
          </motion.span>

          {/* Word-by-word animated headline */}
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {words.map((w, i) => {
              const isAccent = w === 'Smart' || w === 'Solutions'
              const isAI = w === 'AI'
              return (
                <motion.span
                  key={`${w}-${i}`}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.08,
                    ease: 'easeOut'
                  }}
                  className={`mr-3 inline-block ${
                    isAccent ? 'gold-text' : ''
                  } ${isAI ? 'relative' : ''}`}
                >
                  {w}
                  {isAI && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
                      style={{ transformOrigin: 'left' }}
                      className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-transparent"
                    />
                  )}
                </motion.span>
              )
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-fg/70 sm:text-xl"
          >
            I'm <span className="font-semibold text-fg">Muinol Islam</span> — a
            software developer, AI specialist and international business
            builder. I craft premium software, intelligent automations, and
            scalable e‑commerce systems that turn ideas into measurable
            results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="btn-primary group"
            >
              View Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="btn-ghost"
            >
              <Mail size={16} /> Contact Me
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-4"
          >
            {[
              { k: 50, suffix: '+', v: 'Projects Shipped' },
              { k: 5, suffix: '★', v: 'Client Rating' },
              { k: 12, suffix: '+', v: 'Countries Served' }
            ].map((s) => (
              <motion.div
                key={s.v}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass animated-border rounded-2xl px-5 py-4"
              >
                <div className="font-display text-2xl font-bold gold-text">
                  <AnimatedCounter to={s.k} suffix={s.suffix} duration={1.8} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-fg/50">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative z-10 mx-auto w-full max-w-md lg:col-span-5"
        >
          <div className="relative aspect-square">
            {/* Rotating conic gold ring (outermost) */}
            <div className="absolute -inset-6 animate-spin-slow opacity-80">
              <div className="h-full w-full rounded-[2.5rem] bg-conic-gold blur-md" />
            </div>

            {/* Counter-rotating accent ring */}
            <div className="absolute -inset-3 animate-spin-reverse opacity-50">
              <div className="h-full w-full rounded-[2.25rem] bg-conic-gold" />
            </div>

            {/* Pulsing glow halo */}
            <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-gold-200/40 via-gold-500/20 to-transparent blur-2xl animate-pulse-slow" />

            {/* Frame */}
            <div className="gold-border relative h-full overflow-hidden rounded-[2rem] glass-strong">
              <motion.img
                src={portraitSrc}
                alt="Muinol Islam — portrait"
                onError={handleImgError}
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full w-full object-cover"
              />

              {/* Soft sheen sweep */}
              <div className="pointer-events-none absolute inset-0 shine animate-shine opacity-25 mix-blend-overlay" />

              {/* Subtle vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge — AI Expert */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 top-10 hidden rounded-2xl glass-strong p-4 sm:block"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-200 to-gold-600 text-ink-950"
                >
                  <Sparkles size={18} />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-fg">AI Expert</div>
                  <div className="text-xs text-fg/60">Automations & Tools</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge — KinetiMart */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [1, -1, 1] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-6 bottom-12 hidden rounded-2xl glass-strong p-4 sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-200 to-gold-600 font-display text-base font-bold text-ink-950">
                  KM
                </div>
                <div>
                  <div className="text-sm font-semibold text-fg">KinetiMart</div>
                  <div className="text-xs text-fg/60">Founder</div>
                </div>
              </div>
            </motion.div>

            {/* Tiny twinkle stars around the frame */}
            {[
              { top: '4%', left: '-4%', d: '0s' },
              { top: '92%', left: '8%', d: '1.2s' },
              { top: '12%', left: '102%', d: '2s' },
              { top: '78%', left: '100%', d: '0.6s' }
            ].map((p, i) => (
              <span
                key={i}
                className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-gold-200 animate-twinkle"
                style={{
                  top: p.top,
                  left: p.left,
                  animationDelay: p.d,
                  boxShadow: '0 0 12px rgba(245, 220, 122, 0.9)'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-fg/50 hover:text-gold-400 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-fg/30">
          <motion.span
            animate={{ y: [2, 14, 2], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-1 h-1.5 w-1 rounded-full bg-gold-400"
          />
        </span>
      </motion.a>
    </section>
  )
}
