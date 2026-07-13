/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0D',
          soft: '#131316',
          raised: '#1B1B1F',
          border: 'rgba(255,255,255,0.08)',
        },
        paper: {
          DEFAULT: '#FAF6EC',
          soft: '#F2EBD8',
          raised: '#FFFFFF',
          border: 'rgba(11,11,13,0.08)',
        },
        gold: {
          100: '#FBF1D2',
          200: '#F3DFA0',
          300: '#E8CD7A',
          400: '#D4AF37',
          500: '#C9A227',
          600: '#A5811E',
          700: '#8B6F1F',
          900: '#4A3B10',
        },
        ivory: {
          DEFAULT: '#F3EFE4',
          muted: '#A7A39A',
        },
        charcoal: {
          DEFAULT: '#17161A',
          muted: '#6B675E',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3DFA0 0%, #C9A227 45%, #8B6F1F 100%)',
        'gold-line': 'linear-gradient(90deg, transparent, #C9A227, transparent)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(201,162,39,0.25), 0 8px 30px -8px rgba(201,162,39,0.35)',
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.5)',
      },
      transitionTimingFunction: {
        signature: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
