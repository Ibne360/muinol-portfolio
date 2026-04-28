import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe, Star } from 'lucide-react'
import TiltCard from './TiltCard.jsx'

// Inline Play-Store glyph — a recognizable triangle reminiscent of the Google Play mark.
const PlayStoreIcon = ({ size = 14, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <polygon points="6,3 20,12 6,21" />
  </svg>
)

const projects = [
  {
    title: 'Linqo',
    category: 'Mobile App · Creator Economy',
    desc: 'Discover creators, unlock premium content, and support with Stars. A creator‑economy mobile platform I designed and shipped under KinetiMart.',
    tags: ['Android', 'Mobile App', 'Creator Economy', 'Stars'],
    accent: 'from-fuchsia-500/40 via-purple-600/30 to-indigo-700/30',
    kind: 'app',
    featured: true,
    links: [
      {
        label: 'Play Store',
        icon: PlayStoreIcon,
        href: 'https://play.google.com/store/apps/details?id=com.linqo.app'
      },
      { label: 'Website', icon: Globe, href: 'https://kinetimart.com/' }
    ]
  },
  {
    title: 'KinetiMart Platform',
    category: 'E‑commerce · Branding',
    desc: 'Flagship international e-commerce brand combining curated products with AI-driven recommendations.',
    tags: ['Next.js', 'AI', 'Stripe'],
    accent: 'from-gold-300/40 to-amber-700/30',
    kind: 'web',
    links: [
      { label: 'Live', icon: ExternalLink, href: 'https://kinetimart.com/' },
      { label: 'Code', icon: Github, href: '#' }
    ]
  },
  {
    title: 'AI Workflow Studio',
    category: 'AI · SaaS',
    desc: 'Visual builder for AI workflows that automates business operations using LLMs, webhooks and tools.',
    tags: ['React', 'OpenAI', 'Node'],
    accent: 'from-indigo-400/30 to-fuchsia-500/20',
    kind: 'web',
    links: [
      { label: 'Live', icon: ExternalLink, href: '#' },
      { label: 'Code', icon: Github, href: '#' }
    ]
  },
  {
    title: 'Amazon Brand Launch',
    category: 'Amazon FBA',
    desc: 'Private-label launch and growth playbook — from product research to PPC scaling on Amazon UK & US.',
    tags: ['FBA', 'PPC', 'SEO'],
    accent: 'from-emerald-400/30 to-teal-500/20',
    kind: 'web',
    links: [
      { label: 'Live', icon: ExternalLink, href: '#' },
      { label: 'Code', icon: Github, href: '#' }
    ]
  },
  {
    title: 'AI Content Assistant',
    category: 'AI Tool',
    desc: 'Personal AI writing companion with brand voice training, analytics and one-click publishing.',
    tags: ['Next.js', 'LLM', 'Supabase'],
    accent: 'from-rose-400/30 to-orange-500/20',
    kind: 'web',
    links: [
      { label: 'Live', icon: ExternalLink, href: '#' },
      { label: 'Code', icon: Github, href: '#' }
    ]
  },
  {
    title: 'Dropship Pro Store',
    category: 'E‑commerce',
    desc: 'High-converting dropshipping storefront with automated fulfilment, dynamic pricing and ads engine.',
    tags: ['Shopify', 'Ads', 'CRO'],
    accent: 'from-sky-400/30 to-blue-500/20',
    kind: 'web',
    links: [
      { label: 'Live', icon: ExternalLink, href: '#' },
      { label: 'Code', icon: Github, href: '#' }
    ]
  },
  {
    title: 'Portfolio CMS',
    category: 'Web App',
    desc: 'Headless CMS tailored to creators — manage projects, blogs and media with effortless previews.',
    tags: ['React', 'Supabase', 'Tailwind'],
    accent: 'from-violet-400/30 to-purple-600/20',
    kind: 'web',
    links: [
      { label: 'Live', icon: ExternalLink, href: '#' },
      { label: 'Code', icon: Github, href: '#' }
    ]
  }
]

// Phone-shaped preview frame used for app-kind projects.
function PhoneMock({ title }) {
  return (
    <div className="absolute inset-x-16 top-4 bottom-0 rounded-t-[1.75rem] border border-white/20 bg-ink-950/80 p-1.5 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2">
      {/* Notch / status bar */}
      <div className="mx-auto mb-1 mt-0.5 h-1.5 w-12 rounded-full bg-white/25" />

      {/* Screen */}
      <div className="relative h-full overflow-hidden rounded-t-[1.5rem] bg-gradient-to-br from-fuchsia-900/60 via-purple-900/50 to-indigo-950/70 p-2">
        {/* App header */}
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display text-[11px] font-bold tracking-wider gold-text">
            {title}
          </span>
          <Star size={10} className="text-gold-300" fill="currentColor" />
        </div>

        {/* Creator card */}
        <div className="mb-1.5 rounded-md border border-white/10 bg-white/[0.06] p-1.5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-gradient-to-br from-gold-200 to-gold-600" />
            <div className="flex-1 space-y-0.5">
              <div className="h-1 w-3/5 rounded bg-white/40" />
              <div className="h-0.5 w-2/5 rounded bg-white/20" />
            </div>
            <span className="rounded-full bg-gold-300/90 px-1 py-0.5 text-[6px] font-bold text-ink-950">
              ★ 12
            </span>
          </div>
          <div className="mt-1 grid grid-cols-3 gap-0.5">
            <div className="h-3 rounded bg-white/8" />
            <div className="h-3 rounded bg-white/8" />
            <div className="h-3 rounded bg-white/8" />
          </div>
        </div>

        {/* Locked premium card */}
        <div className="rounded-md border border-gold-300/30 bg-gold-300/5 p-1.5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-400 to-indigo-500" />
            <div className="flex-1 space-y-0.5">
              <div className="h-1 w-1/2 rounded bg-white/40" />
              <div className="h-0.5 w-1/3 rounded bg-white/20" />
            </div>
            <span className="rounded-full bg-white/15 px-1 py-0.5 text-[6px] font-bold text-white">
              🔒
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Desktop-window preview frame used for web-kind projects (existing look).
function WindowMock() {
  return (
    <div className="absolute inset-x-6 bottom-0 top-8 rounded-t-xl border border-white/15 bg-ink-900/70 p-3 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="h-2 w-1/2 rounded bg-white/15" />
        <div className="h-2 w-3/4 rounded bg-white/10" />
        <div className="h-2 w-2/3 rounded bg-white/10" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        <div className="h-10 rounded bg-white/10" />
        <div className="h-10 rounded bg-gold-300/30" />
        <div className="h-10 rounded bg-white/10" />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Projects</span>
            <h2 className="section-title mt-5">
              Selected <span className="gradient-flow-text">work</span>.
            </h2>
            <p className="mt-5 text-lg text-fg/70">
              A snapshot of products, AI tools and businesses I've built and
              shipped.
            </p>
          </div>
          <a href="#contact" className="btn-ghost">
            Have an idea? Let's talk
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              style={{ perspective: 1200 }}
            >
              <TiltCard
                intensity={5}
                className={`group relative overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                  p.featured
                    ? 'holo-border bg-fg/[0.04] shadow-[0_0_70px_-15px_rgba(245,220,122,0.55)] hover:shadow-[0_0_90px_-10px_rgba(168,85,247,0.5)]'
                    : 'border-fg/10 bg-fg/[0.03] hover:border-gold-300/40'
                }`}
              >
                {/* Featured cards get a rich mesh-gradient ambient layer behind everything */}
                {p.featured && (
                  <span className="pointer-events-none absolute inset-0 mesh-card opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
                )}

                {/* Featured ribbon */}
                {p.featured && (
                  <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-200 to-gold-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-950 shadow-lg animate-pulse-glow">
                    <Star size={11} fill="currentColor" /> Featured
                  </div>
                )}

                {/* Visual */}
                <div className="relative h-52 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                  <div className="absolute inset-0 grid-bg opacity-40" />

                  {p.kind === 'app' ? <PhoneMock title={p.title} /> : <WindowMock />}

                  {/* Shine sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  {/* Hover overlay with dynamic links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                    {p.links.map((link, idx) => {
                      const Icon = link.icon
                      const isPrimary = idx === 0
                      const isExternal =
                        link.href && link.href !== '#' && /^https?:/.test(link.href)
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className={
                            isPrimary
                              ? 'inline-flex items-center gap-2 rounded-full bg-gold-300 px-4 py-2 text-xs font-semibold text-ink-950 transition hover:bg-gold-200'
                              : 'inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/40'
                          }
                        >
                          <Icon size={14} /> {link.label}
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-gold-500 dark:text-gold-200/80">
                      {p.category}
                    </span>
                    <span className="font-display text-sm text-fg/20">
                      {p.featured ? '★' : `0${i + 1}`}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-fg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/65">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-fg/10 bg-fg/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-fg/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
