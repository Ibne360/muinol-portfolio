/**
 * AuroraBackground
 * Full-screen, fixed background of softly drifting gradient blobs that
 * cycle in scale + opacity. Sits at -z-10 behind every section.
 * Includes a subtle SVG noise overlay for the "premium grainy" feel.
 *
 * Performance:
 * - All blobs use translate3d / will-change so they GPU-composite.
 * - blur is heavy, so we limit the number of blobs to 4.
 * - Reduces to a static gradient under prefers-reduced-motion (handled in index.css).
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Aurora blob 1 — gold (top-left) */}
      <div
        className="absolute h-[60vw] w-[60vw] rounded-full blur-[120px] mix-blend-screen animate-aurora-1 will-change-transform"
        style={{
          top: '-15%',
          left: '-10%',
          background:
            'radial-gradient(circle at center, rgba(245, 220, 122, 0.55), transparent 60%)'
        }}
      />

      {/* Aurora blob 2 — fuchsia/magenta (top-right) */}
      <div
        className="absolute h-[55vw] w-[55vw] rounded-full blur-[120px] mix-blend-screen animate-aurora-2 will-change-transform"
        style={{
          top: '10%',
          right: '-12%',
          background:
            'radial-gradient(circle at center, rgba(236, 72, 153, 0.45), transparent 60%)'
        }}
      />

      {/* Aurora blob 3 — indigo/violet (bottom-center) */}
      <div
        className="absolute h-[60vw] w-[60vw] rounded-full blur-[130px] mix-blend-screen animate-aurora-3 will-change-transform"
        style={{
          bottom: '-15%',
          left: '20%',
          background:
            'radial-gradient(circle at center, rgba(99, 102, 241, 0.5), transparent 60%)'
        }}
      />

      {/* Aurora blob 4 — cyan (mid-right) */}
      <div
        className="absolute h-[42vw] w-[42vw] rounded-full blur-[110px] mix-blend-screen animate-aurora-4 will-change-transform"
        style={{
          top: '40%',
          right: '15%',
          background:
            'radial-gradient(circle at center, rgba(34, 211, 238, 0.40), transparent 60%)'
        }}
      />

      {/* Soft radial vignette to blend blobs back into the canvas at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgb(var(--canvas)) 95%)'
        }}
      />

      {/* Premium noise grain overlay — uses the bg-noise utility from Tailwind config */}
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]" />
    </div>
  )
}
