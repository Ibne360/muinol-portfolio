/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite'
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
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  },
  plugins: []
}
