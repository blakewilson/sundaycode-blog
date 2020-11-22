module.exports = {
  darkMode: "media",
  variants: {
    typography: ["responsive", "dark"],
  },
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {},
        dark: {
          css: {
            ".prose h1": {
              color: "#fff",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
