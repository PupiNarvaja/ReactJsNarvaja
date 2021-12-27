module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mayorMonoDisplay: ['Major Mono Display']
      },
      screens: {
        'xs': '280px'
      }
    },
  },
  plugins: [],
}