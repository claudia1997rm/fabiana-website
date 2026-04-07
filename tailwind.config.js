/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15111B',
        cloud: '#EDE8F1',
        pearl: '#F8F5FA',
        mist: '#D4CBDC',
        taupe: '#6B6175',
        blush: '#CDB9C8',
        sand: '#A99BB3',
        midnight: '#201A28',
        smoke: '#50485C',
        gold: '#7A4A58',
        lavender: '#EDE8F1',
        lilac: '#7B6F8E',
        plum: '#554A68',
        deepPlum: '#2A2235',
        wine: '#5E2F3F',
        wineSoft: '#7A4A58',
        lavenderMist: '#F8F5FA',
      },
      fontFamily: {
        display: ['"Marcellus"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(32, 26, 40, 0.10)',
        glow: '0 22px 58px rgba(85, 74, 104, 0.18)',
        card: '0 26px 60px rgba(32, 26, 40, 0.14)',
        lavender: '0 20px 54px rgba(85, 74, 104, 0.16)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(85, 74, 104, 0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(122, 74, 88, 0.13), transparent 24%), radial-gradient(circle at 50% 100%, rgba(42, 34, 53, 0.12), transparent 34%)',
        halo:
          'radial-gradient(circle at center, rgba(255,255,255,0.82) 0%, rgba(248,245,250,0.28) 36%, transparent 70%)',
        aurora:
          'linear-gradient(135deg, rgba(248,245,250,0.78), rgba(237,232,241,0.96) 36%, rgba(212,203,220,0.92) 72%, rgba(85,74,104,0.22) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-10px,0) scale(1.02)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.55 },
          '50%': { opacity: 0.9 },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        rise: 'rise 0.9s ease forwards',
        drift: 'drift 14s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};