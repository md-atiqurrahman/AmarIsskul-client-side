import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdArrowDropdown,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default selected language
  const [isFixed, setIsFixed] = useState(false);

  const handleTranselateLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const selectLanguage = (language) => {
    if (language === "English") {
      handleTranselateLanguage("en");
    } else if (language === "Bangla") {
      handleTranselateLanguage("bn");
    }
    setSelectedLanguage(language); // Set the selected language
    toggleDropdown(); // Close the dropdown
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = `${isFixed ? "navbar-animation" : ""}`;

  return (
    <header>
      <div className="flex  items-center justify-between bg-primary px-[120px] py-[14px] text-[#f0f0f0]">
        <div className="flex justify-start items-center gap-[30px]">
          <div className="flex justify-center items-center gap-[8px] text-[16px] leading-[26px] font-normal">
            <FaPhoneAlt className="w-[19px] h-[18px]" />
            <p>+880 1722647592</p>
          </div>
          <div className="flex justify-center items-center gap-[8px] text-[16px] leading-[26px] font-normal">
            <RiMailSendLine className="w-[28px] h-[24px]" />
            <p>sch121437@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[26px]">
          <div>
            <div className="relative inline-block text-left group">
              <div
                className="border border-[#d0d0d0] rounded-[8px] px-[16px] text-[14px] text-normal h-[40px] flex justify-center items-center gap-[10px] cursor-pointer"
                onClick={toggleDropdown}
              >
                {selectedLanguage}
                <div className="arrow-container">
                  {isDropdownOpen ? (
                    <IoIosArrowUp className="w-[20px] h-[20px]" />
                  ) : (
                    <IoIosArrowDown className="w-[20px] h-[20px]" />
                  )}
                </div>
              </div>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 origin-top-right right-0 rounded-md shadow-lg bg-[#14151b] ring-1 ring-black ring-opacity-5">
                  <ul>
                    <li
                      className="py-2 px-4 text-sm text-white transition-all duration-300  hover:bg-[#3d3e43] cursor-pointer"
                      onClick={() => selectLanguage("English")}
                    >
                      English
                    </li>
                    <li
                      className="py-2 px-4 text-sm text-white transition-all duration-300  hover:bg-[#3d3e43] cursor-pointer"
                      onClick={() => selectLanguage("Bangla")}
                    >
                      Bangla
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 text-[20px]">
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=100064090835715"
            >
              <FaFacebookF className="text-[18px]" />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/">
              <FaInstagram />
            </Link>
            <Link target="_blank" to="https://twitter.com/">
              <FaTwitter />
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/@molongbazarblhighschool5569"
            >
              <FaYoutube className="text-[22px]" />
            </Link>
          </div>
          <div className="bg-[#3c4e56] w-[1px] h-[24px]" />
          <div className="text-[#f0f0f0] font-normal text-[16px] transition-all duration-300 ">
            <Link to="/">{t("header.login")}</Link>
          </div>
        </div>
      </div>
      <div className={navClasses}>
        <nav
          className={`${
            isFixed
              ? "flex justify-between items-center px-[120px] bg-primary text-white py-[10px]"
              : "flex justify-between items-center px-[120px] bg-secondary text-white py-[10px]"
          }`}
        >
          <div>
            <Link to="/">
              <img
                className="w-full h-[78px]"
                src="../../../../src/assets/Navbar/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex justify-center items-center gap-[30px] text-[18px] font-normal capitalize">
              <li>
                <Link to="/">{t("menu.home")}</Link>
              </li>
              <li>
                <div className="relative inline-block text-left group">
                  <button className="flex justify-center items-center gap-2 transition-all duration-300 ">
                    <p>{t("menu.announcement")}</p>
                    <IoMdArrowDropdown className="mt-[3px] text-[21px]" />
                  </button>
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute z-10 mt-2 w-48 origin-top-right right-0 rounded-md shadow-lg bg-[#14151b] ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-white transition-all duration-300  hover:bg-[#3d3e43] cursor-pointer"
                        role="menuitem"
                      >
                        {t("menu.news")}
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-white transition-all duration-300  hover:bg-[#3d3e43] cursor-pointer"
                        role="menuitem"
                      >
                        {t("menu.notice")}
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-white transition-all duration-300  hover:bg-[#3d3e43] cursor-pointer"
                        role="menuitem"
                      >
                        {t("menu.result")}
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-white transition-all duration-300  hover:bg-[#3d3e43] cursor-pointer"
                        role="menuitem"
                      >
                        {t("menu.holiday")}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/">{t("menu.events")}</Link>
              </li>
              <li>
                <Link to="/">{t("menu.teacher")}</Link>
              </li>
              <li>
                <Link to="/">{t("menu.staff")}</Link>
              </li>
              <li>
                <Link to="/">{t("menu.contact")}</Link>
              </li>
              <div className="bg-white text-primary font-semibold py-[11px] px-[13px] border border-white  rounded-[4px] text-[16px] cursor-pointer capitalize transition-all duration-500 hover:bg-transparent hover:text-white">
                {t("menu.admission")}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
