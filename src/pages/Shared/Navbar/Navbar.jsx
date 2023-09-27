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
import './Navbar.css';

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

  const headerClasses = `${
    isFixed ? 'header-animation' : ''
  }`;

  return (
    <header className={headerClasses}>
      <div className="flex items-center justify-between bg-primary px-[120px] py-[14px] text-[#f0f0f0]">
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
          <div className="mt-[8px]">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current text-secondary w-[20px] h-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-[20px] h-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
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
                <div className="absolute z-10 mt-2 w-48 origin-top-right right-0 rounded-md shadow-lg bg-[#27282e] ring-1 ring-black ring-opacity-5">
                  <ul>
                    <li
                      className="py-2 px-4 text-sm text-white transition-all duration-300 hover:text-secondary hover:bg-[#3d3e43] cursor-pointer"
                      onClick={() => selectLanguage("English")}
                    >
                      English
                    </li>
                    <li
                      className="py-2 px-4 text-sm text-white transition-all duration-300 hover:text-secondary hover:bg-[#3d3e43] cursor-pointer"
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
              className="transition-all duration-300 hover:text-secondary"
            >
              <FaFacebookF className="text-[18px]" />
            </Link>
            <Link
              className="transition-all duration-300 hover:text-secondary"
              target="_blank"
              to="https://www.instagram.com/"
            >
              <FaInstagram />
            </Link>
            <Link
              className="transition-all duration-300 hover:text-secondary"
              target="_blank"
              to="https://twitter.com/"
            >
              <FaTwitter />
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/@molongbazarblhighschool5569"
              className="transition-all duration-300 hover:text-secondary"
            >
              <FaYoutube className="text-[22px]" />
            </Link>
          </div>
          <div className="bg-[#3c4e56] w-[1px] h-[24px]" />
          <div className="text-[#f0f0f0] font-normal text-[16px] transition-all duration-300 hover:text-secondary">
            <Link to="/">{t("header.login")}</Link>
          </div>
        </div>
      </div>
      <nav className="flex justify-between items-center px-[120px] bg-[#14151b] text-white">
        <div>
          <Link to="/">
            <img
              className="w-[95px] h-[95px]"
              src="../../../../src/assets/Navbar/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-[30px] text-[18px] font-normal capitalize">
            <li>
              <Link
                className="transition-all duration-300 hover:text-secondary"
                to="/"
              >
                {t("menu.home")}
              </Link>
            </li>
            <li>
              <div className="relative inline-block text-left group">
                <button className="flex justify-center items-center gap-2 transition-all duration-300 hover:text-secondary">
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
                      className="block px-4 py-2 text-sm text-white transition-all duration-300 hover:text-secondary hover:bg-[#3d3e43] cursor-pointer"
                      role="menuitem"
                    >
                      {t("menu.news")}
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white transition-all duration-300 hover:text-secondary hover:bg-[#3d3e43] cursor-pointer"
                      role="menuitem"
                    >
                      {t("menu.notice")}
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white transition-all duration-300 hover:text-secondary hover:bg-[#3d3e43] cursor-pointer"
                      role="menuitem"
                    >
                      {t("menu.result")}
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white transition-all duration-300 hover:text-secondary hover:bg-[#3d3e43] cursor-pointer"
                      role="menuitem"
                    >
                      {t("menu.holiday")}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-secondary"
                to="/"
              >
                {t("menu.events")}
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-secondary"
                to="/"
              >
                {t("menu.teacher")}
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-secondary"
                to="/"
              >
                {t("menu.staff")}
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-secondary"
                to="/"
              >
                {t("menu.contact")}
              </Link>
            </li>
            <div className="bg-secondary text-white py-[11px] px-[13px]  border border-secondary rounded-[4px] text-[16px] font-bold cursor-pointer capitalize transition-all duration-300 hover:bg-inherit hover:text-secondary hover:border hover:border-secondary">
              {t("menu.admission")}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
