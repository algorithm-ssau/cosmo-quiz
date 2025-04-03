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
      green: '#4ce65e',
      gold: '#FFD700',
      darkBlue: '#0e0159',
      bgProfile: '#0b0138',
      glow: '#05839c',
      lightBlue: '#68b2fc',
      lockColor: '#7aa4ff',
      black: '#000000'
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px",
        },
        ".transform-style-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    },
  ],
};
