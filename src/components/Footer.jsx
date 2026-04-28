import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ArrowUp,
  Heart
} from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/', label: 'GitHub', tint: 'group-hover:text-white' },
  { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn', tint: 'group-hover:text-sky-400' },
  { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter', tint: 'group-hover:text-cyan-400' },
  { icon: Instagram, href: 'https://instagram.com/', label: 'Instagram', tint: 'group-hover:text-pink-400' },
  { icon: Mail, href: 'mailto:kinetimart@gmail.com', label: 'Email', tint: 'group-hover:text-gold-300' }
]

const navCols = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Software Development', href: '#services' },
      { label: 'Website Development', href: '#services' },
      { label: 'AI Solutions', href: '#services' },
      { label: 'Amazon Business', href: '#services' },
      { label: 'Dropshipping', href: '#services' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-fg/5">
      {/* Floating decorative aurora blobs */}
      <div className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-gold-500/12 blur-3xl animate-aurora-1" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl animate-aurora-2" />
      <div className="pointer-events-none absolute right-1/3 top-1/4 h-64 w-64 rounded-full bg-indigo-500/8 blur-3xl animate-aurora-3" />

      {/* Top shimmer line + soft fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gold-400/[0.04] to-transparent" />

      <div className="container-x relative py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-gold-200 to-gold-600 font-display text-xl font-bold text-ink-950 shadow-gold transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_15px_40px_-10px_rgba(245,220,122,0.7)]">
                M
                {/* Glossy shine sweep on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight">
                Muinol <span className="gradient-flow-text">Islam</span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-fg/65">
              Software developer, AI specialist and entrepreneur. Founder of{' '}
              <span className="font-semibold text-fg">KinetiMart</span>. Building smart
              solutions for ambitious businesses worldwide.
            </p>

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-emerald-200">
                Available for new projects
              </span>
            </motion.div>

            {/* Social icons */}
            <div className="mt-7 flex items-center gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  whileHover={{ scale: 1.15, rotate: -8, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative grid h-11 w-11 place-items-center rounded-xl border border-fg/10 bg-fg/[0.04] text-fg/65 backdrop-blur-sm transition-colors duration-300 hover:border-gold-300/50 ${s.tint}`}
                >
                  {/* Mesh ambient on hover */}
                  <span className="pointer-events-none absolute inset-0 mesh-card rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                  <s.icon size={17} className="relative" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {navCols.map((col, ci) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.1 }}
              className="lg:col-span-3"
            >
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 dark:text-gold-200">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l, li) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + ci * 0.08 + li * 0.05 }}
                  >
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-sm text-fg/65 transition-colors hover:text-fg"
                    >
                      {/* Sliding hairline that grows on hover */}
                      <span className="h-px w-0 bg-gradient-to-r from-gold-300 to-gold-500 transition-all duration-300 group-hover:w-5" />
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Back-to-top button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="hidden lg:col-span-1 lg:flex lg:justify-end"
          >
            <motion.a
              href="#home"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.92 }}
              className="group relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-gold-300/40 bg-fg/[0.04] text-gold-400 backdrop-blur-sm transition-colors hover:bg-gold-300/10 hover:text-gold-200"
              aria-label="Back to top"
            >
              <span className="pointer-events-none absolute inset-0 mesh-card rounded-full opacity-0 transition-opacity group-hover:opacity-70" />
              <ArrowUp size={18} className="relative transition-transform duration-300 group-hover:-translate-y-1" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mt-14 flex flex-col items-start justify-between gap-3 pt-6 sm:flex-row sm:items-center"
        >
          {/* Animated gradient hairline */}
          <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
          </div>
          <p className="text-xs text-fg/45">
            © {new Date().getFullYear()} Muinol Islam · KinetiMart. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-fg/45">
            Designed &amp; built with{' '}
            <Heart size={12} className="fill-rose-400 text-rose-400 animate-pulse" />{' '}
            by Muinol · Powered by React, Tailwind &amp;{' '}
            <span className="gradient-flow-text font-semibold">Supabase</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
