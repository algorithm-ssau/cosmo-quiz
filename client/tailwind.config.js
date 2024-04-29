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
      grey: '#A4B3B6',
      white: '#FFFFFF',
      error: 'rgb(255, 87, 87)',
      gold: '#FFD700',
      darkBlue: '#0e0159',
      lightBlue: '#88a9fc',
      lockColor: '#7aa4ff'
    },

    borderRadius: {
      none: '0',
      sm: '.3rem',
      DEFAULT: '.6rem',
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
