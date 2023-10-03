import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleNews = ({ img, id }) => {
  const { t } = useTranslation("global");

  let metaTilte;
  let metaDate;
  let title;
  let description;

  if (id === 1) {
    metaTilte = t("allnews.news1.metaTilte");
    metaDate = t("allnews.news1.metaDate");
    title = t("allnews.news1.title");
    description = t("allnews.news1.description");
  } else if (id === 2) {
    metaTilte = t("allnews.news2.metaTilte");
    metaDate = t("allnews.news2.metaDate");
    title = t("allnews.news2.title");
    description = t("allnews.news2.description");
  } else if (id === 3) {
    metaTilte = t("allnews.news3.metaTilte");
    metaDate = t("allnews.news3.metaDate");
    title = t("allnews.news3.title");
    description = t("allnews.news3.description");
  }
  return (
    <div className="single-event">
      <div className="pt-[12px] px-[8px] pb-[10px] ">
        <img
          className="border-[2px] border-[#2A3F54] rounded-[100%]"
          src={img}
          alt="Event Image"
        />
      </div>
      <ul className="flex justify-between items-center bg-primary text-white px-[20px] py-[8px]">
        <li className="flex justify-start items-center text-[14px] leading-[26px] font-medium">
          <FaUserCircle className="mr-[12px]" />
          {metaTilte}
        </li>
        <li className="flex justify-start items-center text-[14px] leading-[26px] font-medium">
          <FaCalendarAlt className="mr-[12px]" />
          {metaDate}
        </li>
      </ul>
      <div className="px-[20px] pt-[14px] pb-[18px]">
        <h3 className="cursor-pointer text-black text-[25px] leading-[29px] font-medium mb-[10px]">
          <Link to="/">{title}</Link>
        </h3>
        <p className="text-accent text-[18px] leading-[20px] font-normal mb-[14px]">
          {description}
        </p>
        <div className="flex justify-center items-center">
          <div className="bg-white text-accent py-[7px] px-[18px] border border-primary rounded-[10px] text-[20px] font-normal leading-[24px] cursor-pointer capitalize transition-all duration-500 hover:bg-primary hover:text-white">
            {t("allnews.buttonText")}
          </div>
        </div>
      </div>
    </div>
  );
};

SingleNews.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SingleNews;
