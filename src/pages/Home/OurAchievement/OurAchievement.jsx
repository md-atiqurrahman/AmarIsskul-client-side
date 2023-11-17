import { FaPaw,  FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import headingSlate from "/public/heading-slate-gray.png";
import "./OurAchievement.css";
import SingleAchievement from "./SingleAchievement";
import { useTranslation } from "react-i18next";

const OurAchievement = () => {
    const {t} = useTranslation("global");

    let sectionHeaderClass;
  if (t("achievement.sectionTitle") === "আমাদের অর্জন") {
    sectionHeaderClass = "w-[403px] flex justify-center items-center gap-[30px] border-primary border-b-[3px] mb-[60px]";
  }
  else if (t("achievement.sectionTitle") === "Our Achievement"){
    sectionHeaderClass = "w-[449px] flex justify-center items-center gap-[30px] border-primary border-b-[3px] mb-[60px]";
  }

  const Achievements = [
    {
      id: 1,
      icon: <GiTeacher/>
    },
    {
      id: 2,
      icon: <PiStudentFill/>
    },
    {
      id: 3,
      icon: <FaPaw/>
    },
    {
      id: 4,
      icon: <FaUsers/>
    },
  ];
  
  return (
    <div className="dark-effect bg-[url('/public/achivement-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed pt-[100px] px-[120px] pb-[70px] z-[2] relative text-white overflow-hidden">
      <div className="flex justify-center">
        <div className={`${sectionHeaderClass}`}>
          <img
            className="w-[35px] h-[36px]"
            src={headingSlate}
            alt="Heading Slate"
          />
          <h1 className="text-[50px] leading-[54px] font-medium">
           {t("achievement.sectionTitle")}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center content-center gap-[27px]">
        {
             Achievements.map(achievement => <SingleAchievement
             key={achievement.id}
             icon={achievement.icon}
             id={achievement.id}
             >
             </SingleAchievement>)
        }
        </div>
    </div>
  );
};

export default OurAchievement;
