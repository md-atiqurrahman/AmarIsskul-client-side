import { useTranslation } from "react-i18next";
import headingSlate from "/public/heading-slate-gray.png";
import news1 from "/public/news1.jpg";
import news2 from "/public/news2.jpg";
import news3 from "/public/news3.jpg";
import SingleNews from "./SingleNews";

const LatestNews = () => {
  const { t } = useTranslation("global");

  let sectionHeaderClass;
  if (t("allnews.sectionTitle") === "সর্বশেষ খবর") {
    sectionHeaderClass =
      "w-[331px] flex justify-center items-center gap-[30px] border-primary border-b-[3px] text-black mb-[60px]";
  } else if (t("allnews.sectionTitle") === "Latest News") {
    sectionHeaderClass =
      "w-[341px] flex justify-center items-center gap-[30px] border-primary border-b-[3px] text-black mb-[60px]";
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
    },
  ];
  return (
    <div className="bg-[url('/public/news-bg.png')] bg-cover bg-no-repeat bg-center pt-[100px] px-[120px] pb-[70px]">
      <div className="flex justify-center">
        <div className={`${sectionHeaderClass}`}>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-[30px]">
        {AllNews.map((news) => (
          <SingleNews key={news.id} img={news.img} id={news.id}></SingleNews>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
