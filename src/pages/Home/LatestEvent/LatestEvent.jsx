import headingSlate from "../../../assets/LatestEvents/heading-slate-gray.png";
import "./LatestEvent.css";
import eventImage1 from "../../../assets/LatestEvents/event-image-1.jpg";
import eventImage2 from "../../../assets/LatestEvents/event-image-2.jpg";
import eventImage3 from "../../../assets/LatestEvents/event-image-3.jpg";
import SingleEvent from "./SingleEvent";
import { useTranslation } from "react-i18next";
``

const LatestEvent = () => {
  const {t} = useTranslation("global");

  let width;
  if (t("events.sectionTitle") === "সর্বশেষ ইভেন্ট") {
    width = "374px";
  }
  else if (t("events.sectionTitle") === "Latest Event"){
    width = "343px";
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
    <div className="bg-[url('/src/assets/LatestEvents/event-bg.png')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[70px]">
      <div className="flex justify-center">
        <div className="flex justify-center items-center gap-[30px] border-primary border-b-[3px] text-black mb-[60px]" style={{width: `${width}`}}>
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
      <div className="flex flex-wrap justify-center items-center gap-[30px]">
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
