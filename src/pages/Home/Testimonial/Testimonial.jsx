import headingSlate from "../../../assets/Facilities/heading-slate-gray.png";
import "./Testimonial.css";
import schoolLogo from "../../../assets/Navbar/logo-school.png";

const Testimonial = () => {
  return (
    <div className="dark-effect bg-[url('/src/assets/OurAchievement/achivement-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed py-[100px] px-[120px] z-[2] relative text-white overflow-hidden">
      <div className="flex justify-center">
        <div className="w-[516px] flex justify-center items-center gap-[30px] border-primary border-b-[3px] mb-[60px]">
          <img
            className="w-[35px] h-[36px]"
            src={headingSlate}
            alt="Heading Slate"
          />
          <h1 className="text-[50px] leading-[54px] font-medium">
            What Principal Say?
          </h1>
        </div>
      </div>
      <div className="single-testimonial bg-white text-center pt-[30px] px-[80px] pb-[40px] mx-[95px]">
        <div className="principal-thumb">
          <img src={schoolLogo} alt="" />
        </div>
        <div className="mb-[20px] border-primary border-b-[3px] w-[184px] mx-auto">
          <h4 className="text-black text-[20px] leading-[24px] font-bold">
            Abdul Motin Sarkar
          </h4>
        </div>
        <p className="text text-accent text-[18px] leading-[25px] font-medium relative py-0 px-[34px] text-justify">
          In my 20-year occupation as a principal at Molong Bazar BL High School,
          I have seen the incredible potential in our students. With proper
          support, they can excel. The current educational issues are not their
          fault; it is the system and resource limitations. Molong Bazar BL High
          School is known for quality education, focusing on academics and
          overall development through co-curricular activities. My message to
          students: you can achieve wonders with dedication. To parents: support
          your childs passions. Teachers, your success depends on your
          students. I am confident Molong Bazar BL High School will fulfill its
          mission and shine like a star. We need community support for success.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
