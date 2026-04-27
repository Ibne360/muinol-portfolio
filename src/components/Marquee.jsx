import {
  Atom,
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gauge,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap
} from 'lucide-react'

const items = [
  { icon: BrainCircuit, label: 'AI Engineering' },
  { icon: Code2, label: 'React · Next.js' },
  { icon: Workflow, label: 'Automation' },
  { icon: Cloud, label: 'Cloud & APIs' },
  { icon: Layers, label: 'Full‑Stack' },
  { icon: Database, label: 'Supabase · SQL' },
  { icon: Cpu, label: 'LLMs · Agents' },
  { icon: Globe, label: 'Global E‑commerce' },
  { icon: Boxes, label: 'Amazon FBA' },
  { icon: Atom, label: 'Modern UI' },
  { icon: ShieldCheck, label: 'Secure by design' },
  { icon: Gauge, label: 'Performance' },
  { icon: Sparkles, label: 'Premium UX' },
  { icon: Zap, label: 'Shipping fast' }
]

export default function Marquee({ reverse = false }) {
  return (
    <div className="group relative w-full overflow-hidden py-6">
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent" />

      <div
        className={`flex w-max gap-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((it, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-3 rounded-full border border-fg/10 bg-fg/[0.03] px-5 py-2.5 backdrop-blur-md"
          >
            <it.icon size={16} className="text-gold-400" />
            <span className="text-sm font-medium text-fg/80 whitespace-nowrap">
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
