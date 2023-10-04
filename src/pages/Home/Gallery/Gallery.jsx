import { useState } from "react";
import "./Gallery.css";
import headingSlate from "../../../assets/Facilities/heading-slate-gray.png";
import img1 from "../../../assets/OurGallery/All/image-1.jpg";
import img2 from "../../../assets/OurGallery/All/image-2.jpg";
import img3 from "../../../assets/OurGallery/All/image-3.jpg";
import img4 from "../../../assets/OurGallery/All/image-4.jpg";
import img5 from "../../../assets/OurGallery/All/image-5.jpg";
import img6 from "../../../assets/OurGallery/All/image-6.jpg";
import classImage1 from "../../../assets/OurGallery/Class Room/classImage-1.jpg";
import classImage2 from "../../../assets/OurGallery/Class Room/classImage-2.jpg";
import classImage3 from "../../../assets/OurGallery/Class Room/classImage-3.jpg";
import campusImage1 from "../../../assets/OurGallery/School Campus/campusImage-1.jpg"
import campusImage2 from "../../../assets/OurGallery/School Campus/campusImage-2.jpg"
import campusImage3 from "../../../assets/OurGallery/School Campus/campusImage-3.jpg"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const buttonClass =
    "gallery-btn bg-white text-accent py-[7px] px-[18px] border border-primary rounded-[5px] text-[20px] font-normal leading-[24px] cursor-pointer capitalize";
  const selectedButtonClass =
    "gallery-btn bg-primary text-white py-[7px] px-[18px] border border-primary rounded-[5px] text-[20px] font-normal leading-[24px] cursor-pointer capitalize ";

  const hiddenImageClass =
    "hidden gallery-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center content-center";

  const visibleImageClass =
    "block gallery-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center content-center";

  return (
    <div className="bg-white pt-[100px] pb-[70px] mx-[120px]">
      <div className="flex justify-center">
        <div className="flex justify-center items-center gap-[30px] border-primary border-b-[3px] text-black mb-[60px]">
          <img
            className="w-[35px] h-[36px]"
            src={headingSlate}
            alt="Heading Slate"
          />
          <h1 className="text-[50px] leading-[54px] font-medium">
            Our Gallery
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[20px] mb-[50px]">
        <div
          className={`${
            selectedCategory === "All" ? selectedButtonClass : buttonClass
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </div>
        <div
          className={`${
            selectedCategory === "ClassRoom" ? selectedButtonClass : buttonClass
          }`}
          onClick={() => handleCategoryClick("ClassRoom")}
        >
          Class Room
        </div>
        <div
          className={`${
            selectedCategory === "SchoolCampus"
              ? selectedButtonClass
              : buttonClass
          }`}
          onClick={() => handleCategoryClick("SchoolCampus")}
        >
          School Campus
        </div>
      </div>
      <div>
        <div
          className={`${
            selectedCategory === "All" ? visibleImageClass : hiddenImageClass
          }`}
        >
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
        <div className={`${
            selectedCategory === "ClassRoom" ? visibleImageClass : hiddenImageClass
          }`}>
          <img src={classImage1} alt="" />
          <img src={classImage2} alt="" />
          <img src={classImage3} alt="" />
        </div>
        <div className={`${
            selectedCategory === "SchoolCampus" ? visibleImageClass : hiddenImageClass
          }`}>
          <img src={campusImage1} alt="" />
          <img src={campusImage2} alt="" />
          <img src={campusImage3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
