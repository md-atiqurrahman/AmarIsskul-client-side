/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner1: "url('/src/assets/Banner/banner-1.jpg')",
        banner2: "url('/src/assets/Banner/banner-2.jpg')",
        banner3: "url('/src/assets/Banner/banner-3.jpg')",
        welcomeBg: "url('/src/assets/Welcome/welcome-bg.png')",
        FacilitiesBg: "url('/src/assets/Facilities/facilities-bg.png')",
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2a3f54",
          secondary: "#51677c",
          accent: "#131313",
          neutral: "#0b0b0b",
          base: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
