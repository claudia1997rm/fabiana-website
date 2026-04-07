/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        cloud: '#F5F0FF',
        pearl: '#E7DCFF',
        mist: '#C7B6FF',
        taupe: '#6A4BC3',
        blush: '#D9C7FF',
        sand: '#A58DF0',
        midnight: '#211337',
        smoke: '#4E416E',
        gold: '#A13B5A',
        lavender: '#F5F0FF',
        lilac: '#7A4FF2',
        plum: '#5B2FD6',
        deepPlum: '#2B174F',
        wine: '#7B163C',
        wineSoft: '#A13B5A',
        lavenderMist: '#F5F0FF',
      },
      fontFamily: {
        display: ['"Marcellus"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(43, 23, 79, 0.12)',
        glow: '0 22px 58px rgba(91, 47, 214, 0.26)',
        card: '0 26px 60px rgba(43, 23, 79, 0.16)',
        lavender: '0 20px 54px rgba(91, 47, 214, 0.24)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(122, 79, 242, 0.28), transparent 28%), radial-gradient(circle at 80% 0%, rgba(91, 47, 214, 0.34), transparent 24%), radial-gradient(circle at 50% 100%, rgba(123, 22, 60, 0.14), transparent 34%)',
        halo:
          'radial-gradient(circle at center, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.24) 35%, transparent 70%)',
        aurora:
          'linear-gradient(135deg, rgba(255,255,255,0.72), rgba(245,240,255,0.90) 34%, rgba(231,220,255,0.96) 68%, rgba(91,47,214,0.26) 100%)',
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
