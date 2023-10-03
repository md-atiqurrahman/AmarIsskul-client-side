import "./Facilities.css";
import headingSlate from "../../../assets/Facilities/heading-slate-gray.png";
import teacher from "../../../assets/Facilities/facilities-teacher.png";
import library from "../../../assets/Facilities/facilities-library.png";
import transport from "../../../assets/Facilities/facilities-transport.png";
import hostel from "../../../assets/Facilities/facilities-hostel.png";
import SingleFacilities from "./SingleFacilities";
import { useTranslation } from "react-i18next";

const Facilities = () => {
  const { t } = useTranslation("global");

  let width;
  if (t("facilities.sectionTitle") === "আমাদের সুবিধাসমূহ") {
    width = "497px";
  }
  else if (t("facilities.sectionTitle") === "Our Facilities"){
    width = "357px";
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
    <div className="dark-effect bg-[url('/src/assets/Facilities/facilities-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed pt-[100px] z-[2]  relative text-white overflow-hidden">
      <div className="flex justify-center">
        <div
          className="flex justify-center items-center gap-[30px] border-primary border-b-[3px]" style={{width: `${width}`}}
        >
          <img className="w-[35px] h-[36px]" src={headingSlate} alt="Heading Slate" />
          <h1 className="text-[50px] leading-[54px] font-medium">
            {t("facilities.sectionTitle")}
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[74px] relative pb-[100px] mt-[88px]">
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
