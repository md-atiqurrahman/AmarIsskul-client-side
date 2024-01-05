import headingSlate from "/src/assets/home/Facilities/heading-slate-gray.png";
import "./Testimonial.css";
import schoolLogo from "/src/assets/home/Navbar/logo.png";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation("global");

  let sectionHeaderClass;
  if (t("testimonial.sectionTitle") === "কি বলেন প্রধান শিক্ষক?") {
    sectionHeaderClass =
      "w-[573px]  flex justify-center items-center gap-[30px] border-primary border-b-[3px] mb-[60px]";
  } else if (t("testimonial.sectionTitle") === "What Head Teacher Say?") {
    sectionHeaderClass =
      "w-[634px] flex justify-center items-center gap-[30px] border-primary border-b-[3px] mb-[60px]";
  }

  let authorNameClass;
  if (t("testimonial.principalName") === "আব্দুল মতিন সরকার") {
    authorNameClass =
      "mb-[20px] border-primary border-b-[3px] w-[195px] mx-auto";
  } else if (t("testimonial.principalName") === "Abdul Motin Sarkar") {
    authorNameClass =
      "mb-[20px] border-primary border-b-[3px] w-[184px] mx-auto";
  }

  return (
    <div className="dark-effect bg-[url('/src/assets/home/Testimonial/testimonial-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed py-[100px] px-[120px] z-[2] relative text-white overflow-hidden">
      <div className="flex justify-center">
        <div className={`${sectionHeaderClass}`}>
          <img
            className="w-[35px] h-[36px]"
            src={headingSlate}
            alt="Heading Slate"
          />
          <h1 className="text-[50px] leading-[54px] font-medium">
            {t("testimonial.sectionTitle")}
          </h1>
        </div>
      </div>
      <div className="single-testimonial bg-white text-center pt-[30px] px-[80px] pb-[40px] mx-[95px]">
        <div className="principal-thumb">
          <img src={schoolLogo} alt="" />
        </div>
        <div className={`${authorNameClass}`}>
          <h4 className="text-black text-[20px] leading-[24px] font-bold">
            {t("testimonial.principalName")}
          </h4>
        </div>
        <p className="text text-accent text-[18px] leading-[25px] font-medium relative py-0 px-[34px] text-justify">
          {t("testimonial.text")}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
