import headingSlate from "/public/heading-slate-gray.png";
import "./LatestEvent.css";
import eventImage1 from "/public/event-image-1.jpg";
import eventImage2 from "/public/event-image-2.jpg";
import eventImage3 from "/public/event-image-3.jpg";
import SingleEvent from "./SingleEvent";
import { useTranslation } from "react-i18next";
``

const LatestEvent = () => {
  const {t} = useTranslation("global");

  let sectionHeaderClass;
  if (t("events.sectionTitle") === "সর্বশেষ ইভেন্ট") {
    sectionHeaderClass = "w-[374px] flex justify-center items-center gap-[30px] border-primary border-b-[3px] text-black mb-[60px]";
  }
  else if (t("events.sectionTitle") === "Latest Event"){
    sectionHeaderClass = "w-[343px] flex justify-center items-center gap-[30px] border-primary border-b-[3px] text-black mb-[60px]";
  }

    const Events = [
        {
            id: 1,
            img: eventImage1,
        },
        {
            id: 2,
            img: eventImage2,
        },
        {
            id: 3,
            img: eventImage3,
        }
    ]
  return (
    <div className="bg-[url('/public/event-bg.png')] bg-cover bg-no-repeat bg-center pt-[100px] px-[120px] pb-[70px]">
      <div className="flex justify-center">
        <div className={`${sectionHeaderClass}`}>
          <img
            className="w-[35px] h-[36px]"
            src={headingSlate}
            alt="Heading Slate"
          />
          <h1 className="text-[50px] leading-[54px] font-medium">
           {t("events.sectionTitle")}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-[30px]">
       {
        Events.map(event => <SingleEvent
        key={event.id}
        img={event.img}
        id={event.id}
        >
        </SingleEvent>)
       }
      </div>
    </div>
  );
};

export default LatestEvent;
