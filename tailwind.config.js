module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        bounce: {
          // '0%, 100%': { transform: 'position(0px)' },
          // '50%': { transform: 'position-x(2px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' }
        }
      }
    },
  },
  plugins: [],
};
