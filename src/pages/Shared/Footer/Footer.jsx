import { Link } from "react-router-dom";
import logo from "/src/assets/Navbar/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot} from "react-icons/fa6";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  const { t } = useTranslation("global");

  return (
    <footer>
      <div className="dark-effect bg-[url('/src/assets/Footer/footer-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed pt-[160px] pb-[50px] px-[120px] z-[1] relative text-white overflow-hidden border-t-[3px] border-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] justify-items-center items-start">
        <div className="flex justify-start items-center">
          <div>
            <img
              className="max-w-full h-[78px] mb-[28px]"
              src={logo}
              alt="Heading Slate"
            />
            <p className="text-[18px] leading-[25px] font-normal">
            {t("footer.info")}
            </p>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-[26px] leading-[30px] font-normal pb-[8px] mb-[28px] border-b-[2px] border-primary">
           {t("footer.linkHeader")}
          </h3>
          <ul className="links">
            <li>
              <Link to="/">{t("footer.linkText1")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText2")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText3")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText4")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText5")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText6")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText7")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText8")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText9")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText10")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText11")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText12")}</Link>
            </li>
            <li>
              <Link to="/">{t("footer.linkText13")}</Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-[26px] leading-[30px] font-normal pb-[8px] mb-[28px] border-b-[2px] border-primary">
            {t("footer.scheduleHeader")}
          </h3>
          <ul className="hours text-[16px] leading-[30px] text-white">
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
              {t("footer.weekday1")}
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
            {t("footer.weekday2")}
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
            {t("footer.weekday3")}
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
            {t("footer.weekday4")}
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
            {t("footer.weekday5")}
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
            {t("footer.weekday6")}
              <span>{t("footer.weekinfo")}</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
            {t("footer.weekday7")}
              <span>{t("footer.weekinfo")}</span>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-[26px] leading-[30px] font-normal pb-[8px] mb-[28px] border-b-[2px] border-primary">
           {t("footer.contactHeader")}
          </h3>
          <ul className="text-[16px] leading-[24px] text-white">
            <li className="flex justify-start items-center mb-[22px] pt-[4px]">
              <span className="mr-[12px]">
                <FaPhone />
              </span>
              +880 1722647592
            </li>
            <li className="flex justify-start items-center mb-[22px]">
              <span className="mr-[12px]">
                <IoMail className="text-[18.5px]"/>
              </span>
              sch121437@gmail.com
            </li>
            <li className="flex justify-start items-start mb-[30px]">
              <span className="mr-[12px] mt-[4px]">
                <FaLocationDot/>
              </span>
              {t("footer.location")}
            </li>
          </ul>
          <ul className="text-[18px] leading-[30px] text-white flex justify-start items-center">
            <li className="mr-[9px] border border-primary w-[30px] h-[30px] flex justify-center items-center transition-all ease-in-out duration-[0.3s] hover:bg-primary">
              <Link  to="/">
                <FaFacebookF/>
              </Link>
            </li>
            <li className="mr-[9px] border border-primary w-[30px] h-[30px] flex justify-center items-center transition-all ease-in-out duration-[0.3s] hover:bg-primary">
              <Link  to="/">
                <FaTwitter/>
              </Link>
            </li>
            <li className="mr-[9px] border border-primary w-[30px] h-[30px] flex justify-center items-center transition-all ease-in-out duration-[0.3s] hover:bg-primary">
              <Link  to="/">
                <FaLinkedinIn/>
              </Link>
            </li>
            <li className="mr-[9px] border border-primary w-[30px] h-[30px] flex justify-center items-center transition-all ease-in-out duration-[0.3s] hover:bg-primary">
              <Link  to="/">
                <FaYoutube/>
              </Link>
            </li>
            <li className="mr-[9px] border border-primary w-[30px] h-[30px] flex justify-center items-center transition-all ease-in-out duration-[0.3s] hover:bg-primary">
              <Link  to="/">
                <FaInstagram/>
              </Link>
            </li>
            <li className="mr-[9px] border border-primary w-[30px] h-[30px] flex justify-center items-center transition-all ease-in-out duration-[0.3s] hover:bg-primary">
              <Link  to="/">
                <FaPinterestP/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-neutral py-[20px] text-center text-[16px] leading-[20px] font-normal">
        {t("footer.copyrightText1")} {year}
        <Link
          target="_blank"
          to="https://atiqur-rahman-portfolio-2022.netlify.app/"
        >
          <span className="cursor-pointer font-bold"> {t("footer.copyrightText2")} </span>
        </Link>
        {t("footer.copyrightText3")}
      </div>
    </footer>
  );
};

export default Footer;
