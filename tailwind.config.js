/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        void: '#030308',
        surface: '#0a0a18',
        neon: {
          purple: '#c084fc',
          blue: '#38bdf8',
          gold: '#fbbf24',
          pink: '#f472b6',
          green: '#4ade80',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'pulse-glow': 'pulseGlow 2s ease infinite',
        'slide-up': 'slideUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-purple': '0 0 30px rgba(192,132,252,0.4), 0 0 60px rgba(192,132,252,0.2)',
        'neon-blue': '0 0 30px rgba(56,189,248,0.4), 0 0 60px rgba(56,189,248,0.2)',
        'glow-sm': '0 0 10px rgba(192,132,252,0.3)',
        'glow-md': '0 0 20px rgba(192,132,252,0.4)',
        'glow-lg': '0 0 40px rgba(192,132,252,0.3), 0 20px 40px rgba(0,0,0,0.6)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(192,132,252,0.1)',
      },
    },
  },
  plugins: [],
}
