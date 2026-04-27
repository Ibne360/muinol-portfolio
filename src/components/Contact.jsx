import { useState } from 'react'
import { motion } from 'framer-motion'
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
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
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
              Let's <span className="gold-text">build</span> something
              remarkable.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-fg/70">
              Have a project, idea or partnership in mind? Drop a message — I
              read every email personally and respond within 24 hours.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'kinetimart@gmail.com', href: 'mailto:kinetimart@gmail.com' },
                { icon: Phone, label: 'Phone / WhatsApp', value: '+44 7449 705501', href: 'tel:+447449705501' },
                { icon: MapPin, label: 'Based in', value: 'United Kingdom · Working Globally', href: null }
              ].map((c, i) => {
                const Inner = (
                  <>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold-200/30 to-gold-600/15 text-gold-500 ring-1 ring-gold-400/30 dark:text-gold-200 dark:ring-gold-300/20">
                      <c.icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-fg/50">
                        {c.label}
                      </span>
                      <span className="block font-medium text-fg group-hover:text-gold-500 dark:group-hover:text-gold-100">
                        {c.value}
                      </span>
                    </span>
                  </>
                )
                const cls = 'group flex items-center gap-4 rounded-2xl border border-fg/10 bg-fg/[0.03] p-5 transition hover:border-gold-300/40'
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
              className="gold-border animated-border relative rounded-3xl glass-strong p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
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

              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-fg/60">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  placeholder="Tell me about your project, idea or goals..."
                  className="w-full resize-none rounded-xl border border-fg/10 bg-fg/[0.04] px-4 py-3 text-[15px] text-fg placeholder:text-fg/35 outline-none transition focus:border-gold-300/60 focus:bg-fg/[0.06] focus:ring-2 focus:ring-gold-300/20"
                />
              </div>

              <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="btn-primary disabled:opacity-70"
                >
                  {status.state === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>

                {!isSupabaseConfigured && (
                  <p className="text-xs text-fg/45">
                    Tip: add Supabase env vars to enable form storage.
                  </p>
                )}
              </div>

              {status.state === 'success' && (
                <p className="mt-5 inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  <CheckCircle2 size={16} /> {status.msg}
                </p>
              )}
              {status.state === 'error' && (
                <p className="mt-5 inline-flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  <AlertCircle size={16} /> {status.msg}
                </p>
              )}
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
        className="w-full rounded-xl border border-fg/10 bg-fg/[0.04] px-4 py-3 text-[15px] text-fg placeholder:text-fg/35 outline-none transition focus:border-gold-300/60 focus:bg-fg/[0.06] focus:ring-2 focus:ring-gold-300/20"
      />
    </div>
  )
}
