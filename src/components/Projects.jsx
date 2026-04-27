import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'KinetiMart Platform',
    category: 'E‑commerce · Branding',
    desc: 'Flagship international e-commerce brand combining curated products with AI-driven recommendations.',
    tags: ['Next.js', 'AI', 'Stripe'],
    accent: 'from-gold-300/40 to-amber-700/30',
    href: '#',
    repo: '#'
  },
  {
    title: 'AI Workflow Studio',
    category: 'AI · SaaS',
    desc: 'Visual builder for AI workflows that automates business operations using LLMs, webhooks and tools.',
    tags: ['React', 'OpenAI', 'Node'],
    accent: 'from-indigo-400/30 to-fuchsia-500/20',
    href: '#',
    repo: '#'
  },
  {
    title: 'Amazon Brand Launch',
    category: 'Amazon FBA',
    desc: 'Private-label launch and growth playbook — from product research to PPC scaling on Amazon UK & US.',
    tags: ['FBA', 'PPC', 'SEO'],
    accent: 'from-emerald-400/30 to-teal-500/20',
    href: '#',
    repo: '#'
  },
  {
    title: 'AI Content Assistant',
    category: 'AI Tool',
    desc: 'Personal AI writing companion with brand voice training, analytics and one-click publishing.',
    tags: ['Next.js', 'LLM', 'Supabase'],
    accent: 'from-rose-400/30 to-orange-500/20',
    href: '#',
    repo: '#'
  },
  {
    title: 'Dropship Pro Store',
    category: 'E‑commerce',
    desc: 'High-converting dropshipping storefront with automated fulfilment, dynamic pricing and ads engine.',
    tags: ['Shopify', 'Ads', 'CRO'],
    accent: 'from-sky-400/30 to-blue-500/20',
    href: '#',
    repo: '#'
  },
  {
    title: 'Portfolio CMS',
    category: 'Web App',
    desc: 'Headless CMS tailored to creators — manage projects, blogs and media with effortless previews.',
    tags: ['React', 'Supabase', 'Tailwind'],
    accent: 'from-violet-400/30 to-purple-600/20',
    href: '#',
    repo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Projects</span>
            <h2 className="section-title mt-5">
              Selected <span className="gold-text">work</span>.
            </h2>
            <p className="mt-5 text-lg text-white/70">
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
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-gold-300/30 hover:-translate-y-1"
            >
              {/* Visual */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.accent}`}
                />
                <div className="absolute inset-0 grid-bg opacity-50" />
                {/* Mock window */}
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
                    <div className="h-10 rounded bg-white/8" />
                    <div className="h-10 rounded bg-gold-300/25" />
                    <div className="h-10 rounded bg-white/8" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                  <a
                    href={p.href}
                    className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-4 py-2 text-xs font-semibold text-ink-950 transition hover:bg-gold-200"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/40"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gold-200/80">
                    {p.category}
                  </span>
                  <span className="font-display text-sm text-white/20">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
