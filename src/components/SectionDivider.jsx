/**
 * SectionDivider
 * A thin, animated horizontal divider that uses an SVG line with a flowing
 * gradient stop. Sits between sections to give a premium "breath" between
 * blocks of content.
 */
export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[2px] w-full max-w-7xl overflow-hidden px-5 sm:px-8 lg:px-12"
    >
      {/* Base hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-fg/15 to-transparent" />

      {/* Sliding light-streak on top */}
      <div
        className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-transparent via-gold-300/70 to-transparent dark:via-gold-200/80"
        style={{
          backgroundSize: '50% 100%',
          backgroundRepeat: 'no-repeat',
          animation: 'shine 6s linear infinite'
        }}
      />
    </div>
  )
}
