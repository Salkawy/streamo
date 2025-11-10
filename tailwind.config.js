/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0F',
        glass: 'rgba(255,255,255,0.04)',
        neon: '#FF2D95',
        gold: '#D4AF37'
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
