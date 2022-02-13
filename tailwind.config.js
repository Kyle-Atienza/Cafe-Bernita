module.exports = {
  purge: ["./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#F56E35",
        primaryDark: "#CA5E30",
        secondary: "#FFB56F",
        dark: "#403233",
        online: "#2FE837",
        offline: "#E82F2F"
      },
      fontFamily: {
        lexend: "'Lexend Deca', sans-serif",
        rozha: "'Rozha One', serif"
      },
      backgroundImage: {
        card2: "url('/assets/card2-img.png')"
      }
    }
  },
  plugins: []
};
