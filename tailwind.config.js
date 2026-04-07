/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        cloud: '#f6f1ea',
        pearl: '#ece4db',
        mist: '#d9cec3',
        taupe: '#8c7c6d',
        blush: '#dcc7c0',
        sand: '#c9b39f',
        midnight: '#161317',
        smoke: '#6a635c',
        gold: '#b3936b',
        lavender: '#C4B5FD',
        lilac: '#A78BFA',
        plum: '#6D5BA6',
        lavenderMist: '#E9E5F5',
      },
      fontFamily: {
        display: ['"Marcellus"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 70px rgba(17, 17, 17, 0.08)',
        glow: '0 24px 80px rgba(179, 147, 107, 0.18)',
        card: '0 26px 60px rgba(17, 17, 17, 0.10)',
        lavender: '0 28px 70px rgba(109, 91, 166, 0.16)',
        violetGlow: '0 28px 90px rgba(196, 181, 253, 0.22)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(220, 199, 192, 0.22), transparent 28%), radial-gradient(circle at 80% 0%, rgba(196, 181, 253, 0.14), transparent 24%), radial-gradient(circle at 50% 100%, rgba(17, 17, 17, 0.08), transparent 34%)',
        halo:
          'radial-gradient(circle at center, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.24) 35%, transparent 70%)',
        aurora:
          'linear-gradient(135deg, rgba(255,255,255,0.72), rgba(236,228,219,0.78) 36%, rgba(233,229,245,0.48) 66%, rgba(201,179,159,0.18) 100%)',
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
