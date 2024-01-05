import eventImage1 from "/src/assets/home/LatestEvents/event-image-1.jpg";
import eventImage2 from "/src/assets/home/LatestEvents/event-image-2.jpg";
import eventImage3 from "/src/assets/home/LatestEvents/event-image-3.jpg";
import SingleEvent from "./../Home/LatestEvent/SingleEvent";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation("global");

  let titleClass;
  if (t("eventsPage.title") === "ইভেন্টস") {
    titleClass = "font-normal text-[43px]";
  } else if (t("eventsPage.title") === "Events") {
    titleClass = "font-normal text-[50px]";
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
    },
  ];

  return (
    <div>
      <div className="dark-effect bg-[url('/src/assets/events/bg.png')] bg-cover bg-center bg-no-repeat bg-fixed pt-[70px] pb-[110px] z-[1] relative text-white">
        <div className="flex flex-col justify-items-center items-center">
          <h1 className={`${titleClass}`}>{t("eventsPage.title")}</h1>
          <div className="border-t-2 border-primary mt-[-11px]">
            <h3 className="font-normal text-[20px] pt-[7px]">
              {t("eventsPage.text")}
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-[90px] px-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-[30px]">
        {Events.map((event) => (
          <SingleEvent
            key={event.id}
            img={event.img}
            id={event.id}
          ></SingleEvent>
        ))}
      </div>
    </div>
  );
};

export default Events;
