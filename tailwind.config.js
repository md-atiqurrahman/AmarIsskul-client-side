/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner1:"url('/src/assets/home/Banner/banner-1.jpg')",
        banner2:"url('/src/assets/home/Banner/banner-2.jpg')",
        banner3:"url('/src/assets/home/Banner/banner-3.jpg')",
        welcomeBg: "url('/src/assets/home/Welcome/welcome-bg.png')",
        FacilitiesBg: "url('/src/assets/home/Facilities/facilities-bg.png')",
        LatestEventBg: "url('/src/assets/home/LatestEvents/event-bg.png')",
        OurAchievementBg: "url('/src/assets/home/OurAchievement/achivement-bg.png')",
        LatestNewsBg: "url('/src/assets/home/LatestNews/news-bg.png')",
        TestimonialBg: "url('/src/assets/home/Testimonial/testimonial-bg.png')",
        FooterBg: "url('/src/assets/home/Footer/footer-bg.png')",
        EventsPageBg: "url('/src/assets/events/bg.png')"
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
