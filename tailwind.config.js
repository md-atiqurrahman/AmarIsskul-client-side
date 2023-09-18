/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#392c7d",
          secondary: "#ff5170",
          accent: "#555555",
          neutral: "#6B6B6B",
          base: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
