import { useTranslation } from "react-i18next";
import headingSlate from "../../../assets/Facilities/heading-slate-gray.png";
import news1 from "../../../assets/LatestNews/news1.jpg";
import news2 from "../../../assets/LatestNews/news2.jpg";
import news3 from "../../../assets/LatestNews/news3.jpg";
import SingleNews from "./SingleNews";

const LatestNews = () => {
 const {t} = useTranslation("global");

 let width;
  if (t("allnews.sectionTitle") === "সর্বশেষ খবর") {
    width = "331px";
  }
  else if (t("allnews.sectionTitle") === "Latest News"){
    width = "341px";
  }

    const AllNews = [
        {
            id: 1,
            img: news1,
        },
        {
            id: 2,
            img: news2,
        },
        {
            id: 3,
            img: news3,
        }
    ]
  return (
    <div className="bg-[url('/src/assets/LatestNews/news-bg.png')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[70px]">
      <div className="flex justify-center">
        <div className="flex justify-center items-center gap-[30px] border-primary border-b-[3px] text-black mb-[60px]" style={{width: `${width}`}}>
          <img
            className="w-[35px] h-[36px]"
            src={headingSlate}
            alt="Heading Slate"
          />
          <h1 className="text-[50px] leading-[54px] font-medium">
            {t("allnews.sectionTitle")}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[30px]">
       {
        AllNews.map(news => <SingleNews
        key={news.id}
        img={news.img}
        id={news.id}
        >
        </SingleNews>)
       }
      </div>
    </div>
  );
};

export default LatestNews;
