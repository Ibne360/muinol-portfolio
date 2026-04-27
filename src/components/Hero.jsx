import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Upload, Mail } from 'lucide-react'

export default function Hero() {
  const fileRef = useRef(null)
  const [portrait, setPortrait] = useState('/images/portrait-placeholder.svg')

  const handleUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPortrait(url)
  }

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        {/* Text */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles size={14} className="text-gold-300" />
            Software · AI · Entrepreneurship
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building <span className="gold-text">Smart Solutions</span>
            <br />
            with <span className="relative inline-block">
              AI
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-transparent" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            I'm <span className="text-white">Muinol Islam</span> — a software
            developer, AI specialist and international business builder. I craft
            premium software, intelligent automations, and scalable e‑commerce
            systems that turn ideas into measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-4"
          >
            {[
              { k: '50+', v: 'Projects Shipped' },
              { k: '5★', v: 'Client Rating' },
              { k: 'Global', v: 'Reach' }
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl px-5 py-4">
                <div className="font-display text-2xl font-bold gold-text">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md lg:col-span-5"
        >
          <div className="relative">
            {/* Gold gradient ring */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-200/50 via-gold-500/30 to-transparent blur-2xl" />

            <div className="gold-border relative overflow-hidden rounded-[2rem] glass-strong shadow-glass">
              <img
                src={portrait}
                alt="Muinol Islam — portrait"
                className="aspect-[5/6] w-full object-cover"
              />
              {/* sheen overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />

              {/* Upload control */}
              <button
                onClick={() => fileRef.current?.click()}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-900/70 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-md transition hover:border-gold-300/60 hover:text-white"
                title="Upload your photo"
              >
                <Upload size={14} /> Upload Photo
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 top-10 hidden rounded-2xl glass-strong p-4 shadow-glass sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-200 to-gold-600 text-ink-950">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">AI Expert</div>
                  <div className="text-xs text-white/60">Automations & Tools</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-6 bottom-12 hidden rounded-2xl glass-strong p-4 shadow-glass sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-200 to-gold-600 text-ink-950 font-bold">
                  KM
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">KinetiMart</div>
                  <div className="text-xs text-white/60">Founder</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
