import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * TiltCard — wraps children with a subtle 3D mouse-tracked tilt and
 * exposes a moving spotlight via CSS vars (--mx, --my) to its child.
 * Children should set their own background and contents.
 */
export default function TiltCard({
  children,
  className = '',
  intensity = 8,
  ...rest
}) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 20
  })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 20
  })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x)
    my.set(y)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
    const el = ref.current
    if (el) {
      el.style.setProperty('--mx', `50%`)
      el.style.setProperty('--my', `50%`)
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
