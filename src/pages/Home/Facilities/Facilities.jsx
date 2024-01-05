import "./Facilities.css";
import headingSlate from "/src/assets/home/Facilities/heading-slate-gray.png";
import teacher from "/src/assets/home/Facilities/facilities-teacher.png";
import library from "/src/assets/home/Facilities/facilities-library.png";
import transport from "/src/assets/home/Facilities/facilities-transport.png";
import hostel from "/src/assets/home/Facilities/facilities-hostel.png";
import SingleFacilities from "./SingleFacilities";
import { useTranslation } from "react-i18next";

const Facilities = () => {
  const { t } = useTranslation("global");

  let sectionHeaderClass;
  if (t("facilities.sectionTitle") === "আমাদের সুবিধাসমূহ") {
    sectionHeaderClass = "w-[497px] flex justify-center items-center gap-[30px] border-primary border-b-[3px]";
  }
  else if (t("facilities.sectionTitle") === "Our Facilities"){
    sectionHeaderClass = "w-[357px] flex justify-center items-center gap-[30px] border-primary border-b-[3px]";
  }

  const facilities = [
    {
      id: 1,
      icon: teacher,
    },
    {
      id: 2,
      icon: library,
    },
    {
      id: 3,
      icon: transport,
    },
    {
      id: 4,
      icon: hostel,
    },
  ];
  return (
    <div className="dark-effect bg-[url('/src/assets/home/Facilities/facilities-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed pt-[100px] px-[120px] z-[2]  relative text-white overflow-hidden">
      <div className="flex justify-center">
        <div className={`${sectionHeaderClass}`}>
          <img className="w-[35px] h-[36px]" src={headingSlate} alt="Heading Slate" />
          <h1 className="text-[50px] leading-[54px] font-medium">
            {t("facilities.sectionTitle")}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center content-center gap-[74px] relative pb-[100px] mt-[88px]">
        {facilities.map((facility) => (
          <SingleFacilities
            key={facility.id}
            icon={facility.icon}
            id={facility.id}
          ></SingleFacilities>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
