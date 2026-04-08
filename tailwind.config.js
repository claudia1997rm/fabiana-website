/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#221A2F',
        cloud: '#FBF6FF',
        pearl: '#F0E7F4',
        mist: '#D8CBDF',
        taupe: '#8E7698',
        blush: '#DEBFD7',
        sand: '#C7A6C4',
        midnight: '#17111F',
        smoke: '#6F617A',
        gold: '#C7A2C8',
        lavender: '#F6F1FA',
        lilac: '#EFE3F7',
        plum: '#5F3B6D',
        deepPlum: '#3D2949',
        wine: '#6C4C63',
        wineSoft: '#8B6E84',
        lavenderMist: '#FBF8FE',
      },
      fontFamily: {
        display: ['"Marcellus"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 44px rgba(34, 26, 47, 0.08)',
        glow: '0 18px 42px rgba(95, 59, 109, 0.12)',
        card: '0 26px 58px rgba(34, 26, 47, 0.12)',
        lavender: '0 18px 44px rgba(95, 59, 109, 0.14)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(222,191,215,0.18), transparent 26%), radial-gradient(circle at 82% 0%, rgba(199,166,196,0.18), transparent 26%), radial-gradient(circle at 50% 100%, rgba(95,59,109,0.08), transparent 32%)',
        halo:
          'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(251,246,255,0.40) 38%, transparent 72%)',
        aurora:
          'linear-gradient(135deg, rgba(253,248,255,0.94), rgba(245,238,248,0.98) 44%, rgba(239,227,241,0.92) 100%)',
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
