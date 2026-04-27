import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:kinetimart@gmail.com', label: 'Email' }
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
    <footer className="relative mt-12 border-t border-white/5 bg-ink-950/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold-200 to-gold-600 font-display text-xl font-bold text-ink-950 shadow-gold">
                M
              </span>
              <span className="font-display text-xl font-semibold">
                Muinol <span className="gold-text">Islam</span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
              Software developer, AI specialist and entrepreneur. Founder of{' '}
              <span className="text-white">KinetiMart</span>. Building smart
              solutions for ambitious businesses worldwide.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-gold-300/40 hover:text-gold-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {navCols.map((col) => (
            <div key={col.title} className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="lg:col-span-1" />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Muinol Islam · KinetiMart. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            Designed &amp; built with <span className="gold-text">care</span> ·
            Powered by React, Tailwind &amp; Supabase
          </p>
        </div>
      </div>
    </footer>
  )
}
