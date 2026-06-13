/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // ── New editorial palette ───────────────────────────────
        sand: {
          50: '#FCFAF5',
          100: '#F7F0E4',
          200: '#EFE4D2',
          300: '#E3D2B8',
          400: '#D2B996',
        },
        ink: {
          DEFAULT: '#241A15',
          900: '#1B1411',
          800: '#241A15',
          700: '#3A2B23',
          600: '#564539',
        },
        clay: {
          50: '#FBEDE7',
          100: '#F6D8CC',
          200: '#EFBBA6',
          300: '#E89C80',
          400: '#E4885F',
          500: '#E07A5F', // brand terracotta
          DEFAULT: '#E07A5F',
          600: '#C5603F',
          700: '#A2492D',
        },
        saffron: {
          300: '#F3C677',
          400: '#EFB14F',
          DEFAULT: '#E9A53A',
          500: '#E9A53A',
          600: '#CC8718',
        },
        sage: {
          light: '#A5FFD6',
          300: '#7FC9A2',
          DEFAULT: '#4F8A6B',
          500: '#4F8A6B',
          600: '#3E6F55',
        },
        plum: {
          DEFAULT: '#7A2E4A',
          600: '#5F2239',
        },
        taupe: '#7C6E61',

        // ── Legacy theme tokens (kept for older/legal pages) ─────
        'theme-primary': {
          DEFAULT: '#E07A5F',
          light: '#E07A5F',
          dark: '#C86A4F',
        },
        'theme-secondary': '#3D405B',
        'theme-background': '#F7EDF0',
        'theme-accent': '#A5FFD6',
        'theme-neutral': '#F2CC8F',
        'theme-purple': '#6A0572',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(60,38,28,0.18)',
        lift: '0 36px 70px -24px rgba(60,38,28,0.32)',
        device: '0 50px 90px -30px rgba(40,24,18,0.55)',
        glow: '0 0 90px -10px rgba(224,122,95,0.45)',
        ring: '0 0 0 1px rgba(60,38,28,0.06)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
        'spin-slow': 'spin-slow 28s linear infinite',
      },
    },
  },
  plugins: [],
};
