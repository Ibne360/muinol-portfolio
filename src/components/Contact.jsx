import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import { submitContactMessage, isSupabaseConfigured } from '../lib/supabase.js'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: 'error', msg: 'Please fill in all fields.' })
      return
    }
    setStatus({ state: 'loading', msg: '' })
    const res = await submitContactMessage(form)
    if (res.ok) {
      setStatus({
        state: 'success',
        msg: "Thanks! Your message has been sent. I'll get back to you soon."
      })
      setForm(initialForm)
    } else {
      setStatus({
        state: 'error',
        msg:
          res.error ||
          'Something went wrong sending your message. Please try again.'
      })
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* Floating decorative aurora orbs */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl animate-aurora-1" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/8 blur-3xl animate-aurora-2" />
      <div className="pointer-events-none absolute right-1/4 top-0 h-64 w-64 rounded-full bg-cyan-500/6 blur-3xl animate-aurora-3" />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">Contact</span>
            <h2 className="section-title mt-5">
              Let's <span className="gradient-flow-text">build</span> something
              remarkable.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-fg/70">
              Have a project, idea or partnership in mind? Drop a message — I
              read every email personally and respond within 24 hours.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'kinetimart@gmail.com', href: 'mailto:kinetimart@gmail.com', accent: 'from-gold-300/30 to-amber-600/15' },
                { icon: Phone, label: 'Phone / WhatsApp', value: '+44 7449 705501', href: 'tel:+447449705501', accent: 'from-emerald-400/30 to-teal-600/15' },
                { icon: MapPin, label: 'Based in', value: 'United Kingdom · Working Globally', href: null, accent: 'from-fuchsia-400/30 to-violet-600/15' }
              ].map((c, i) => {
                const Inner = (
                  <>
                    {/* Mesh ambient layer */}
                    <span className="pointer-events-none absolute inset-0 mesh-card rounded-2xl opacity-25 transition-opacity duration-500 group-hover:opacity-80" />
                    {/* Per-card accent corner glow */}
                    <span className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${c.accent} opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

                    <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold-200/40 to-gold-600/20 text-gold-500 shadow-gold ring-1 ring-gold-400/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 dark:text-gold-200 dark:ring-gold-300/20">
                      <c.icon size={20} />
                    </span>
                    <span className="relative">
                      <span className="block text-xs uppercase tracking-widest text-fg/50">
                        {c.label}
                      </span>
                      <span className="block font-medium text-fg transition-colors group-hover:text-gold-500 dark:group-hover:text-gold-100">
                        {c.value}
                      </span>
                    </span>
                  </>
                )
                const cls = 'group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-fg/10 bg-fg/[0.03] p-5 backdrop-blur-sm transition-all duration-500 hover:border-gold-300/50 hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(245,220,122,0.4)]'
                return (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    {c.href ? (
                      <a href={c.href} className={cls}>{Inner}</a>
                    ) : (
                      <div className={cls}>{Inner}</div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="holo-border relative overflow-hidden rounded-3xl glass-ultra p-7 sm:p-9"
            >
              {/* Soft mesh accent layer behind the form fields */}
              <span className="pointer-events-none absolute inset-0 mesh-card opacity-40" />
              <div className="relative grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="jane@example.com"
                />
              </div>

              <div className="relative mt-5">
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-fg/60">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  placeholder="Tell me about your project, idea or goals..."
                  className="w-full resize-none rounded-xl border border-fg/10 bg-fg/[0.04] px-4 py-3 text-[15px] text-fg placeholder:text-fg/35 outline-none transition-all duration-300 focus:border-transparent focus:bg-fg/[0.07] focus:ring-2 focus:ring-gold-300/40 focus:shadow-[0_0_30px_-5px_rgba(245,220,122,0.4)]"
                />
              </div>

              <div className="relative mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                <motion.button
                  type="submit"
                  disabled={status.state === 'loading'}
                  whileHover={{ scale: status.state === 'loading' ? 1 : 1.03 }}
                  whileTap={{ scale: status.state === 'loading' ? 1 : 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-200 via-gold-300 to-gold-400 px-7 py-3 text-sm font-bold text-ink-950 shadow-lg shadow-gold-500/40 transition disabled:opacity-70"
                >
                  {/* Animated shine sweep */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <AnimatePresence mode="wait" initial={false}>
                    {status.state === 'loading' ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="relative inline-flex items-center gap-2"
                      >
                        <Loader2 size={16} className="animate-spin" /> Sending...
                      </motion.span>
                    ) : status.state === 'success' ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="relative inline-flex items-center gap-2"
                      >
                        <CheckCircle2 size={16} /> Message sent!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="relative inline-flex items-center gap-2"
                      >
                        <Send size={16} /> Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {!isSupabaseConfigured && (
                  <p className="text-xs text-fg/45">
                    Tip: add Supabase env vars to enable form storage.
                  </p>
                )}
              </div>

              {/* Animated status toasts */}
              <AnimatePresence>
                {status.state === 'success' && (
                  <motion.p
                    key="toast-success"
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="relative mt-5 inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200 backdrop-blur-md"
                  >
                    <CheckCircle2 size={16} /> {status.msg}
                  </motion.p>
                )}
                {status.state === 'error' && (
                  <motion.p
                    key="toast-error"
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="relative mt-5 inline-flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200 backdrop-blur-md"
                  >
                    <AlertCircle size={16} /> {status.msg}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-fg/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-fg/10 bg-fg/[0.04] px-4 py-3 text-[15px] text-fg placeholder:text-fg/35 outline-none transition-all duration-300 focus:border-transparent focus:bg-fg/[0.07] focus:ring-2 focus:ring-gold-300/40 focus:shadow-[0_0_30px_-5px_rgba(245,220,122,0.4)]"
      />
    </div>
  )
}
