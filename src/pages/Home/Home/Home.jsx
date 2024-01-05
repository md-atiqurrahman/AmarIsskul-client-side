import Welcome from "../Welcome/Welcome";
import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import LatestEvent from "../LatestEvent/LatestEvent";
import OurAchievement from "../OurAchievement/OurAchievement";
import LatestNews from "../LatestNews/LatestNews";
import Gallery from "../Gallery/Gallery";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <Facilities></Facilities>
      <LatestEvent></LatestEvent>
      <OurAchievement></OurAchievement>
      <LatestNews></LatestNews>
      <Gallery></Gallery>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
