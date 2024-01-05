import { useTranslation } from "react-i18next";
import { FaLocationArrow } from "react-icons/fa";

const ApplyArea = () => {
  const { t } = useTranslation("global");
  return (
    <div className="bg-white pt-[100px] mx-[120px] relative z-[2] mb-[-70px]">
      <div className="bg-primary py-[53px] px-[45px] grid grid-cols-2 justify-items-center content-center">
        <h2 className="place-self-start text-white text-[45px]  font-medium">
          {t("applyarea.text")}
        </h2>
        <div className="place-self-center border-[2px] border-white rounded-[50px] text-white pr-[34px] text-[28px] font-medium flex justify-center items-center transition-all duration-500 hover:bg-white hover:text-primary cursor-pointer">
          <span
            className="bg-white rounded-[100px] w-[70px] h-[70px] 
           flex justify-center items-center text-primary mr-[20px]"
          >
            <FaLocationArrow />
          </span>
          {t("applyarea.btntext")}
        </div>
      </div>
    </div>
  );
};

export default ApplyArea;
