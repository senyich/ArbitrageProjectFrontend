// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#34b353',
        'dark-neon-green': '#08421a',
        'deep-dark': '#0e2114',
      },
      boxShadow: {
        'neon': '0 0 20px 5px rgb(113, 255, 172)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'swipe-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'swipe-in-right': {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(.23,1.09,.52,1.01) both',
        'swipe-in-left': 'swipe-in-left 0.5s cubic-bezier(.4,0,.2,1) both',
        'swipe-in-right': 'swipe-in-right 0.5s cubic-bezier(.4,0,.2,1) both',
      },
    },
  },
  plugins: [],
}
