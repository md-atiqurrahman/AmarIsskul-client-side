import PropTypes from "prop-types";
import CountUp, { useCountUp } from "react-countup";

import { useTranslation } from "react-i18next";

const SingleAchievement = ({ icon, id }) => {
  const { t } = useTranslation("global");

  let title;
  let number;
  if (id === 1) {
    title = t("achievement.achievementTitle1");
    number = t("achievement.number1");
  } else if (id === 2) {
    title = t("achievement.achievementTitle2");
    number = t("achievement.number2");
  } else if (id === 3) {
    title = t("achievement.achievementTitle3");
    number = t("achievement.number3");
  } else if (id === 4) {
    title = t("achievement.achievementTitle4");
    number = t("achievement.number4");
  }

  useCountUp({
    ref: "counter",
    end: number,
    enableScrollSpy: true,
    scrollSpyDelay: 5000,
  });

  return (
    <div
      className="single-achievement flex justify-center items-center flex-col bg-white text-accent text-center 
      border-[4px] border-primary rounded-[100%] w-[260px] h-[260px] mt-[32px] mb-[50px]  relative"
    >
      <div className="text-[44px] leading-[50px] text-primary border-b-[2px] border-primary pb-[15px] w-[132px] flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-[55px] font-bold text-black">
          <span>
            <CountUp end={number} enableScrollSpy />
          </span>
        </h3>
        <h4 className="text-[22px] mt-[-15px] font-normal text-black">
          {title}
        </h4>
      </div>
      <div id="counter" className="hidden">
        <CountUp end={number} enableScrollSpy />
      </div>
    </div>
  );
};

SingleAchievement.propTypes = {
  icon: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default SingleAchievement;
