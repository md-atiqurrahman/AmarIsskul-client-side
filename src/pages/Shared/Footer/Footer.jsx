import { Link } from "react-router-dom";
import logo from "/src/assets/Navbar/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vitae elit vel velit euismod porttitor sed eu neque. Praesent sed
              volutpat metus. Etiam ut ultricies magna, commodo porta velit.
              Cras aliquet lectus mauris, sed lacinia nisi cursus a.
            </p>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-[26px] leading-[30px] font-normal pb-[8px] mb-[28px] border-b-[2px] border-primary">
            Quick Link
          </h3>
          <ul className="links">
            <li>
              <Link to="/">Admission</Link>
            </li>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/">Notice</Link>
            </li>
            <li>
              <Link to="/">Holiday</Link>
            </li>
            <li>
              <Link to="/">Event</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">Teacher</Link>
            </li>
            <li>
              <Link to="/">Staff</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Our Mission</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms & Condition</Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-[26px] leading-[30px] font-normal pb-[8px] mb-[28px] border-b-[2px] border-primary">
            Opening Hour
          </h3>
          <ul className="hours text-[16px] leading-[30px] text-white">
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
              Sunday
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
              Monday
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
              Tuesday
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
              Wednesday
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
              Thursday
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
              Friday
              <span>Closed</span>
            </li>
            <li className="border-b border-primary pb-[8px] pl-[20px] mb-[8px] flex justify-between relative">
              Saturday
              <span>Closed</span>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="text-[26px] leading-[30px] font-normal pb-[8px] mb-[28px] border-b-[2px] border-primary">
            Get in Touch
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
              Moheshpur, Ghagar Bazar-5710, Sadullapur, Gaibandha
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
        Copyright © {year}
        <Link
          target="_blank"
          to="https://atiqur-rahman-portfolio-2022.netlify.app/"
        >
          <span className="cursor-pointer font-bold"> Atiqur Rahman </span>
        </Link>
        - All right reserved
      </div>
    </footer>
  );
};

export default Footer;
