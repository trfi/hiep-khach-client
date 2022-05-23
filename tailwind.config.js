module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#19232a',
        'darken': '#161f26',
        'pink-1': '#FBEAEB',
        'blue-1': '#2F3C7E',
        'yellow-1': '#FFB800',
        'yellow-2': '#F9D342',
        'black-1': '#292826',
      },
      fontFamily: {
        'airstrike': ['Airstrike Academy'],
        'alata': ['Alata', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
