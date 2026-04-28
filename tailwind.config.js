/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Theme tokens (driven by CSS variables in index.css)
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        'canvas-2': 'rgb(var(--canvas-2) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',

        // Static palettes (same in both themes)
        ink: {
          950: '#05070d',
          900: '#080b14',
          800: '#0b101c',
          700: '#101728',
          600: '#172033'
        },
        gold: {
          50: '#fdf7e3',
          100: '#fbecb6',
          200: '#f5dc7a',
          300: '#eccd4f',
          400: '#dcb73a',
          500: '#c9a227',
          600: '#a07d1c',
          700: '#7a5d18',
          800: '#553f12',
          900: '#33260c'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(220,183,58,0.35)',
        'gold-lg': '0 20px 60px -10px rgba(220,183,58,0.45)',
        glass: '0 10px 40px rgba(0,0,0,0.45)'
      },
      backgroundImage: {
        'radial-gold':
          'radial-gradient(circle at 20% 20%, rgba(220,183,58,0.18), transparent 50%), radial-gradient(circle at 80% 0%, rgba(220,183,58,0.10), transparent 45%)',
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        'conic-gold':
          'conic-gradient(from 0deg, transparent 0deg, rgba(245,220,122,0.0) 60deg, rgba(245,220,122,0.85) 120deg, rgba(220,183,58,0.6) 180deg, rgba(245,220,122,0.85) 240deg, rgba(245,220,122,0.0) 300deg, transparent 360deg)'
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'gradient-flow': 'gradientFlow 12s ease infinite',
        'spin-slow': 'spin 18s linear infinite',
        'spin-reverse': 'spinReverse 22s linear infinite',
        'spin-orbit': 'spin 30s linear infinite',
        'spin-orbit-reverse': 'spinReverse 30s linear infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
        blob: 'blob 16s ease-in-out infinite',
        'aurora-1': 'aurora1 28s ease-in-out infinite',
        'aurora-2': 'aurora2 32s ease-in-out infinite',
        'aurora-3': 'aurora3 26s ease-in-out infinite',
        'aurora-4': 'aurora4 30s ease-in-out infinite',
        beam: 'beam 14s ease-in-out infinite',
        'hue-shift': 'hueShift 12s linear infinite',
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marqueeReverse 40s linear infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        'border-spin': 'borderSpin 8s linear infinite',
        'float-3d': 'float3d 8s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        float3d: {
          '0%,100%': { transform: 'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'translate3d(0,-14px,0) rotateX(2deg) rotateY(-2deg)' }
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        gradientFlow: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 100%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 0%' }
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        pulseSlow: {
          '0%,100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.06)' }
        },
        pulseGlow: {
          '0%,100%': { filter: 'drop-shadow(0 0 12px rgba(245,220,122,0.35))' },
          '50%': { filter: 'drop-shadow(0 0 28px rgba(245,220,122,0.75))' }
        },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.06)' },
          '66%': { transform: 'translate(-20px,15px) scale(0.96)' }
        },
        aurora1: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.55' },
          '33%': { transform: 'translate3d(15%,12%,0) scale(1.18)', opacity: '0.75' },
          '66%': { transform: 'translate3d(-12%,18%,0) scale(0.92)', opacity: '0.5' }
        },
        aurora2: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.5' },
          '33%': { transform: 'translate3d(-18%,8%,0) scale(0.9)', opacity: '0.7' },
          '66%': { transform: 'translate3d(12%,-14%,0) scale(1.15)', opacity: '0.55' }
        },
        aurora3: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.45' },
          '40%': { transform: 'translate3d(20%,-10%,0) scale(1.2)', opacity: '0.7' },
          '80%': { transform: 'translate3d(-15%,15%,0) scale(0.95)', opacity: '0.5' }
        },
        aurora4: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translate3d(-10%,-18%,0) scale(1.1)', opacity: '0.65' }
        },
        beam: {
          '0%': { transform: 'translateX(-30%) skewX(-20deg)', opacity: '0' },
          '20%': { opacity: '0.4' },
          '50%': { transform: 'translateX(30%) skewX(-20deg)', opacity: '0.6' },
          '80%': { opacity: '0.3' },
          '100%': { transform: 'translateX(120%) skewX(-20deg)', opacity: '0' }
        },
        hueShift: {
          '0%,100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(40deg)' }
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0)' },
          '25%': { transform: 'translate(8px,-6px)' },
          '50%': { transform: 'translate(-6px,8px)' },
          '75%': { transform: 'translate(6px,4px)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        twinkle: {
          '0%,100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' }
        },
        borderSpin: {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' }
        }
      }
    }
  },
  plugins: []
}
