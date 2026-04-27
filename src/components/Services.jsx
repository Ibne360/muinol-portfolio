import { motion } from 'framer-motion'
import {
  Code2,
  Globe,
  BrainCircuit,
  ShoppingCart,
  Package,
  ArrowUpRight
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Custom applications, APIs and platforms engineered for performance, scalability and long-term maintainability.',
    tags: ['Web Apps', 'APIs', 'SaaS']
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Premium, conversion-focused websites with cinematic UI, blazing-fast performance and SEO best-practices.',
    tags: ['React', 'Next.js', 'Tailwind']
  },
  {
    icon: BrainCircuit,
    title: 'AI Solutions & Automation',
    desc: 'Custom AI tools, chatbots, workflow automation and LLM integrations that save hours and scale your operations.',
    tags: ['LLMs', 'Automation', 'Agents']
  },
  {
    icon: ShoppingCart,
    title: 'Amazon Business',
    desc: 'End-to-end Amazon FBA setup — product research, sourcing, listing optimization and account management.',
    tags: ['FBA', 'PPC', 'Listing SEO']
  },
  {
    icon: Package,
    title: 'Dropshipping',
    desc: 'High-converting dropshipping stores with winning products, automated fulfilment and global ad strategies.',
    tags: ['Shopify', 'Ads', 'CRO']
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Services</span>
          <h2 className="section-title mt-5">
            What I <span className="gold-text">deliver</span>.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            A full-stack offering across software, AI and global e-commerce —
            built around your goals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="card group flex flex-col"
            >
              {/* radial hover glow */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(220,183,58,0.10), transparent 40%)'
                }}
              />

              <div className="mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold-200/25 to-gold-600/10 text-gold-200 ring-1 ring-gold-300/20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-4deg]">
                <s.icon size={26} />
              </div>

              <h3 className="font-display text-2xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                {s.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-200 transition hover:text-gold-100"
                >
                  Start a project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <span className="font-display text-xl text-white/15">
                  0{i + 1}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
