/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15111B',
        cloud: '#FAF8FC',
        pearl: '#FFFDF8',
        mist: '#E5DDEA',
        taupe: '#6A6074',
        blush: '#D8CEDF',
        sand: '#C8BED0',
        midnight: '#201A28',
        smoke: '#50485C',
        gold: '#7B5968',
        lavender: '#F2EDF7',
        lilac: '#83759A',
        plum: '#5B4A78',
        deepPlum: '#2A2235',
        wine: '#5A3545',
        wineSoft: '#7B5968',
        lavenderMist: '#FFFDF8',
      },
      fontFamily: {
        display: ['"Marcellus"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 48px rgba(32, 26, 40, 0.08)',
        glow: '0 18px 42px rgba(91, 74, 120, 0.13)',
        card: '0 24px 54px rgba(32, 26, 40, 0.12)',
        lavender: '0 18px 44px rgba(91, 74, 120, 0.13)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(91, 74, 120, 0.10), transparent 28%), radial-gradient(circle at 82% 0%, rgba(216, 206, 223, 0.24), transparent 28%), radial-gradient(circle at 50% 100%, rgba(90, 53, 69, 0.08), transparent 34%)',
        halo:
          'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(250,248,252,0.36) 38%, transparent 72%)',
        aurora:
          'linear-gradient(135deg, rgba(255,253,248,0.92), rgba(250,248,252,0.98) 42%, rgba(242,237,247,0.88) 74%, rgba(91,74,120,0.12) 100%)',
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
          '0%, 100%': { opacity: 0.45 },
          '50%': { opacity: 0.74 },
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