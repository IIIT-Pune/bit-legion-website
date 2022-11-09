module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        78: '19.5rem',
      },
      colors: {
        archivePrimary: '#DB5370',
        archiveSecondary: '#39101D',
        archiveLight: '#F4CED6',
        archiveDark: '#C95782',
        'pink-squid': '#66FCF1',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        squidgame: ['Squid-game', 'sans-serif'],
        Aquire: ['Aquire', 'sans-serif'],
      },
      animation: {
        wiggle: 'wiggle 1.5s ease infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotateY(-20deg)' },
          '50%': { transform: 'rotateY(20deg)' },
          '100%': { transform: 'rotateY(-20deg)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
