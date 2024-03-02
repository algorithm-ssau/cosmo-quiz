/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    colors: {
      accent: '#D83F87',
      primary: '#2A1B3D',
      background: '#44318D',
      secondary: '#E98074',
      grey: 'A4B3B6',
      white: 'FFFFFF',
      error: 'rgb(255, 87, 87)',
    },

    borderRadius: {
      none: '0',
      sm: '.125rem',
      DEFAULT: '.4rem',
      full: '9999px',
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
};
