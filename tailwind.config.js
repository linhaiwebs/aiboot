/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0a0e1a',
        'dark-secondary': '#1a1f2e',
        'dark-card': '#151923',
        'accent-red': '#dc2626',
        'accent-red-dark': '#b91c1c',
        'light-blue': '#e0f2fe',
        'pale-blue': '#dbeafe',
        'deep-blue': '#1e3a8a',
        'medium-blue': '#3b82f6',
        'navy-dark': '#061652',
        'navy-primary': '#1A2547',
        'navy-secondary': '#0F1828',
        'card-dark': '#1c2242',
        'pale-yellow': '#fef9c3',
        'label-green': '#10b981',
        'cyan-primary': '#00D9FF',
        'cyan-light': '#5CE1FF',
        'cyan-dark': '#00B8D4',
        'orange-accent': '#FF9500',
        'orange-light': '#FFB547',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom right, #0a0e1a, #111827, #0a0e1a)',
        'navy-gradient': 'linear-gradient(180deg, #0F1828 0%, #1A2547 50%, #0F1828 100%)',
        'navy-gradient-radial': 'radial-gradient(ellipse at center, #1A2547 0%, #0F1828 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #00D9FF 0%, #5CE1FF 100%)',
        'cyan-gradient-hover': 'linear-gradient(135deg, #00B8D4 0%, #00D9FF 100%)',
        'red-glow': 'radial-gradient(circle, rgba(220, 38, 38, 0.2), transparent)',
        'white-to-blue': 'linear-gradient(to bottom, #ffffff, #e0f2fe)',
        'blue-horizontal': 'linear-gradient(to right, #1e3a8a, #3b82f6)',
        'blue-radial': 'radial-gradient(circle, #3b82f6, transparent)',
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(220, 38, 38, 0.5)',
        'red-glow-lg': '0 0 40px rgba(220, 38, 38, 0.6)',
        'yellow-glow': '0 0 15px rgba(254, 249, 195, 0.6)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'blue-glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'cyan-glow': '0 0 20px rgba(0, 217, 255, 0.5)',
        'cyan-glow-lg': '0 0 30px rgba(0, 217, 255, 0.6)',
      },
      animation: {
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-cyan': 'pulse-cyan 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'number-pulse': 'number-pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(220, 38, 38, 0.8)' },
        },
        'pulse-cyan': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { opacity: 0.9, boxShadow: '0 0 30px rgba(0, 217, 255, 0.8)' },
        },
        'number-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      fontFamily: {
        'title': ['HYYaKuHeiW', 'Noto Sans JP', 'sans-serif'],
        'subtitle': ['Adobe Heiti Std', 'Hiragino Sans', 'sans-serif'],
      },
      spacing: {
        '7.5': '30px',
      },
    },
  },
  plugins: [],
};
