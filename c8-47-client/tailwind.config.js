/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Mon": ['Montserrat', 'sans-serif']
      },
      colors: {
        primario: "#5231A6",
        primarioH: "#8165C8",
        primarioP: "#382272",
        primarioD: "#7A738C",
        textColor: "#3D3D3D",
        btnHoverG: "#E2E2E2",
        btnDisable: "#757575",
        errorColor: "#b30000",
        bgDarkMode: "#121212",
        borderDarkMode: "#85D3EB",
        bgHoverDarkMode: "#ACE1F1",
        bgPushDarkMode: "#58C3E4",
        bgDisableDarkmode: "#9ABCC6",
        
        

      }
    },
    screens: {

      'md': '800px',
      // => @media (min-width: 800px) { ... }

    }
  },
  plugins: [],
}
