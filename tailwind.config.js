/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Theme colors from theme.txt
        'theme-primary': {
          DEFAULT: '#E07A5F', // Warm Terracotta
          light: '#E07A5F',
          dark: '#C86A4F', // Darker variant for hover states
        },
        'theme-secondary': '#3D405B', // Deep Navy
        'theme-background': '#F7EDF0', // Soft Blush
        'theme-accent': '#A5FFD6', // Mint Green
        'theme-neutral': '#F2CC8F', // Muted Peach
        'theme-purple': '#6A0572', // Rich Purple
        // Dark theme colors
        'theme-dark-primary': '#E07A5F',
        'theme-dark-secondary': '#2A2B3F',
        'theme-dark-background': '#1A1B2E',
        'theme-dark-accent': '#4AFFB3',
        'theme-dark-neutral': '#D4B17A',
        'theme-dark-purple': '#9A0AA2',
      },
    },
  },
  plugins: [],
};
