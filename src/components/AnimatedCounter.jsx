import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({
  to = 0,
  duration = 1.6,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = ''
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const target = Number(to)
    const animate = (now) => {
      const elapsed = (now - start) / 1000
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setValue(target * eased)
      if (t < 1) raf = requestAnimationFrame(animate)
      else setValue(target)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
