import Welcome from "../Welcome/Welcome";
import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import LatestEvent from "../LatestEvent/LatestEvent";
import OurAchievement from "../OurAchievement/OurAchievement";
import LatestNews from "../LatestNews/LatestNews";
import Gallery from "../Gallery/Gallery";

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
    </div>
  );
};

export default Home;
