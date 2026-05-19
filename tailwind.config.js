export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: "#d60000",
        brandDarkRed: "#b80000",
        brandBlack: "#111111",
        brandWhite: "#ffffff",
        brandGray: "#f5f5f5",
        brandBorder: "#e5e5e5",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};