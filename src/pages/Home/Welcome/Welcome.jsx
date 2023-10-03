import { useTranslation } from "react-i18next";
import about from "../../../assets/Welcome/about-image.jpg";

const Welcome = () => {
  const { t } = useTranslation("global");
  return (
    <div className="bg-[url('/src/assets/Welcome/welcome-bg.png')] bg-cover bg-center bg-no-repeat py-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-start gap-[65px]">
        <div className="place-self-end">
          <img
            className="border border-transparent rounded-[50%]"
            src={about}
            alt="About"
          />
        </div>
        <div className="place-self-start w-[80%] text-accent text-[44px] leading-[46px] font-light">
          <h1> {t("welcome.text")}</h1>
          <h1 className="text-primary underline text-[40px] leading-[42px] font-bold mb-[50px]">
            {t("welcome.name")}
          </h1>
          <p className="text-justify text-[18px] leading-[25px] font-normal mt-[15px]">
            {t("welcome.about")}
          </p>
          <div className="flex justify-end items-center">
            <div className="bg-white text-primary py-[10px] px-[25px]  mt-[50px] border border-primary rounded-[10px] text-[25px] font-medium leading-[28px] cursor-pointer capitalize transition-all duration-500 hover:bg-primary hover:text-white">
              {t("welcome.buttonText")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
