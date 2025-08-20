/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        mana: {
          blue: '#1E5AA8',
          red: '#C13F2E',
          green: '#2F7F3D',
          white: '#F5F2E9',
          black: '#1B1B1D',
          artifact: '#8A8F99',
          gold: '#C5A051',
        },
      },
      boxShadow: {
        card: '0 4px 12px -2px rgba(0,0,0,0.25), 0 2px 4px -1px rgba(0,0,0,0.15)'
      },
      backgroundImage: {
        'texture-parchment': "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.25), transparent 70%), url('https://www.transparenttextures.com/patterns/aged-paper.png')"
      }
    },
  },
  plugins: [],
};
