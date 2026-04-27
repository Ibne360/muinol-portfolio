import { motion } from 'framer-motion'

const PHONE = '447449705501' // International format, no '+' or spaces
const MESSAGE = encodeURIComponent(
  "Hi Muinol, I'd like to discuss a project with you."
)

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${MESSAGE}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
      className="group fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.55)] transition-transform hover:-translate-y-0.5"
      style={{
        background:
          'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
      }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400/30" />

      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.21c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.13-.6.14-.18.27-.69.89-.85 1.07-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.6-1.45-.83-1.99-.22-.52-.44-.45-.6-.46l-.51-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.13-.25-.21-.52-.34zM12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.92.5 3.79 1.45 5.44L2 22l4.74-1.51a9.94 9.94 0 0 0 5.3 1.49h.01c5.49 0 9.94-4.46 9.94-9.94 0-2.66-1.04-5.16-2.92-7.04A9.86 9.86 0 0 0 12.04 2zm0 18.05h-.01a8.07 8.07 0 0 1-4.12-1.13l-.3-.18-2.81.9.94-2.74-.19-.31a8.06 8.06 0 0 1-1.24-4.31c0-4.46 3.63-8.09 8.09-8.09 2.16 0 4.19.84 5.72 2.37a8.04 8.04 0 0 1 2.36 5.73c0 4.46-3.63 8.07-8.05 8.07z" />
      </svg>

      <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink-900/90 px-3 py-1.5 text-xs font-medium text-white/90 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </motion.a>
  )
}
