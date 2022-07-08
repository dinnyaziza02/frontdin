module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f9a8d4",
        secondary: "#64748b",
        dark: "#1e40af",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
