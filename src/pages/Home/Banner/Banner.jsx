import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./Banner.css";

const Banner = () => {
  const { t } = useTranslation("global");
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      bannerImage: "url('/src/assets/Banner/banner-1.jpg')",
    },
    {
      id: 2,
      bannerImage: "url('/src/assets/Banner/banner-2.jpg')",
    },
    {
      id: 3,
      bannerImage: "url('/src/assets/Banner/banner-3.jpg')",
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentReview((currentReview) =>
      currentReview === reviews.length - 1 ? 0 : currentReview + 1
    );
  }, [setCurrentReview, reviews.length]);

  const handlePrev = () => {
    setCurrentReview(
      currentReview === 0 ? reviews.length - 1 : currentReview - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentReview, handleNext]);

  return (
    <div
      className="flex flex-row justify-between items-center text-center max-w-xs lg:max-w-[1440px] h-[648px] px-1 py-6 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: reviews[currentReview].bannerImage,
      }}
    >
      <button
        onClick={handlePrev}
        className="w-[60px] h-[60px] 
                border bg-[#d7d7d7] rounded-[50px] text-xl text-primary hover:bg-white focus:outline-none absolute lg:relative z-[5] left-0 md:relative"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="text-container">
        <div className="text-accent text-[42px] font-sembold leading-[57px]">
          {t("banner.text")}
        </div>
        <div className="text-white text-[42px] font-bold leading-[57px] mb-[65px] px-[50px]">
          {t("banner.name")}
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white py-[9px] px-[25px]  border border-primary rounded-[10px] text-[24px] font-medium leading-[28px] cursor-pointer capitalize transition-all duration-500 hover:bg-primary">
            {t("banner.admission")}
          </div>
        </div>
      </div>
      <button
        onClick={handleNext}
        className="w-[60px] h-[60px] 
                border bg-[#d7d7d7] rounded-[50px] text-xl text-primary hover:bg-white focus:outline-none absolute lg:relative z-[5] left-0 md:relative"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Banner;
