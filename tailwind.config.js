/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        cloud: '#F3EFF7',
        pearl: '#E7E0EE',
        mist: '#C9BED9',
        taupe: '#6B607F',
        blush: '#D8CBDF',
        sand: '#B7A9C7',
        midnight: '#231D2E',
        smoke: '#5A5368',
        gold: '#7B4A5A',
        lavender: '#F3EFF7',
        lilac: '#7C6F9E',
        plum: '#5F527D',
        deepPlum: '#2F2940',
        wine: '#6A3346',
        wineSoft: '#8A5364',
        lavenderMist: '#F3EFF7',
      },
      fontFamily: {
        display: ['"Marcellus"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(47, 41, 64, 0.09)',
        glow: '0 22px 58px rgba(95, 82, 125, 0.18)',
        card: '0 26px 60px rgba(47, 41, 64, 0.12)',
        lavender: '0 20px 54px rgba(95, 82, 125, 0.16)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(95, 82, 125, 0.20), transparent 28%), radial-gradient(circle at 80% 0%, rgba(95, 82, 125, 0.20), transparent 24%), radial-gradient(circle at 50% 100%, rgba(106, 51, 70, 0.12), transparent 34%)',
        halo:
          'radial-gradient(circle at center, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.24) 35%, transparent 70%)',
        aurora:
          'linear-gradient(135deg, rgba(255,255,255,0.72), rgba(243,239,247,0.92) 34%, rgba(231,224,238,0.96) 68%, rgba(95,82,125,0.20) 100%)',
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
