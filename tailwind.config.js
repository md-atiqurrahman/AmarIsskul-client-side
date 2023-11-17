/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner1:"url('/public/banner-1.jpg')",
        banner2:"url('/public/banner-2.jpg')",
        banner3:"url('/public/banner-3.jpg')",
        welcomeBg: "url('/public/welcome-bg.png')",
        FacilitiesBg: "url('/public/facilities-bg.png')",
        LatestEventBg: "url('/public/event-bg.png')",
        OurAchievementBg: "url('/public/achivement-bg.png')",
        LatestNewsBg: "url('/public/news-bg.png')",
        TestimonialBg: "url('/public/testimonial-bg.png')",
        FooterBg: "url('/public/footer-bg.png')",
      },
    },
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
