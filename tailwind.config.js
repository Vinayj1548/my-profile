export default {
    darkMode: "class", // Enables dark mode via a "dark" class
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          background: {
            DEFAULT: "#ffffff", // Light mode
            dark: "#03040f", // Dark mode
          },
          foreground: {
            DEFAULT: "#000000",
            dark: "#ffffff",
          },
        },
      },
    },
    plugins: [],
  };
  