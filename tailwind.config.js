module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mayorMonoDisplay: ['Major Mono Display'],
        nunito: ['Nunito, sans-serif'],
        roboto: ['Roboto']
      },
      screens: {
        'xs': '280px'
      }
    },
  },
  plugins: [],
}