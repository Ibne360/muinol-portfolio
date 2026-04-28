import { motion } from 'framer-motion'

const PHONE = '447449705501' // International format, no '+' or spaces
const MESSAGE = encodeURIComponent(
  "Hi Muinol, I'd like to discuss a project with you."
)

// Clean, official-style WhatsApp glyph
const WhatsAppGlyph = ({ size = 30 }) => (
  <svg
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.001 5.333c-5.891 0-10.667 4.776-10.667 10.667 0 1.876.49 3.696 1.418 5.302L5.333 26.667l5.495-1.398a10.625 10.625 0 0 0 5.173 1.331h.004c5.886 0 10.661-4.776 10.661-10.667 0-2.85-1.108-5.531-3.123-7.546a10.604 10.604 0 0 0-7.542-3.054zm0 19.467h-.003a8.85 8.85 0 0 1-4.508-1.234l-.323-.193-3.34.85.892-3.255-.21-.336a8.821 8.821 0 0 1-1.36-4.713c0-4.886 3.978-8.864 8.857-8.864 2.367 0 4.591.923 6.262 2.6a8.804 8.804 0 0 1 2.594 6.27c0 4.882-3.97 8.875-8.861 8.875zm4.864-6.643c-.267-.133-1.578-.778-1.823-.866-.244-.089-.422-.133-.6.133-.178.267-.689.866-.844 1.044-.155.178-.311.2-.578.067-.267-.133-1.125-.414-2.144-1.319-.792-.706-1.328-1.578-1.483-1.844-.155-.267-.017-.411.117-.544.12-.12.267-.311.4-.467.133-.155.178-.267.267-.444.089-.178.044-.333-.022-.467-.067-.133-.6-1.444-.822-1.978-.215-.518-.435-.448-.6-.456l-.511-.009c-.178 0-.467.067-.711.333-.244.267-.933.911-.933 2.222 0 1.311.956 2.578 1.089 2.756.133.178 1.881 2.872 4.554 4.025.637.275 1.133.439 1.521.563.639.203 1.221.174 1.681.106.513-.077 1.578-.644 1.8-1.267.222-.622.222-1.156.155-1.267-.067-.111-.244-.178-.511-.311z" />
  </svg>
)

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${MESSAGE}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 220, damping: 18 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="group relative grid h-16 w-16 place-items-center"
      >
        {/* Triple expanding pulse rings (staggered) */}
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/40"
          style={{ animation: 'ping 2.4s cubic-bezier(0,0,0.2,1) infinite' }}
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/30"
          style={{
            animation: 'ping 2.4s cubic-bezier(0,0,0.2,1) infinite',
            animationDelay: '0.8s'
          }}
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/20"
          style={{
            animation: 'ping 2.4s cubic-bezier(0,0,0.2,1) infinite',
            animationDelay: '1.6s'
          }}
        />

        {/* Soft outer glow halo (breathes) */}
        <span className="pointer-events-none absolute -inset-2 rounded-full bg-gradient-to-br from-emerald-300/70 via-emerald-500/50 to-teal-700/60 opacity-70 blur-xl animate-pulse-glow" />

        {/* Button face */}
        <span
          className="relative grid h-full w-full place-items-center rounded-full text-white shadow-[0_15px_45px_-10px_rgba(37,211,102,0.7)] ring-1 ring-white/25 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_20px_60px_-10px_rgba(37,211,102,0.9)]"
          style={{
            background:
              'radial-gradient(circle at 30% 25%, #34d970 0%, #25D366 35%, #128C7E 75%, #075E54 100%)'
          }}
        >
          <WhatsAppGlyph size={30} />

          {/* Notification dot */}
          <span className="absolute -right-0.5 -top-0.5 grid h-3.5 w-3.5 place-items-center">
            <span className="absolute inset-0 rounded-full bg-rose-500 animate-ping" />
            <span className="relative h-3.5 w-3.5 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 ring-2 ring-canvas" />
          </span>

          {/* Subtle glossy top highlight */}
          <span className="pointer-events-none absolute inset-x-2 top-1.5 h-3 rounded-full bg-white/20 blur-sm" />
        </span>

        {/* Premium tooltip with status + arrow */}
        <span className="pointer-events-none absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-2xl bg-ink-950/95 px-4 py-2.5 text-xs shadow-2xl ring-1 ring-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-300">
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Online — Chat now
          </span>
          <span className="mt-0.5 block text-[11px] font-medium text-white/65">
            Replies within 24 hours
          </span>
          {/* Arrow */}
          <span className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 translate-x-full border-y-[6px] border-l-[7px] border-y-transparent border-l-ink-950/95" />
        </span>
      </motion.a>
    </motion.div>
  )
}
