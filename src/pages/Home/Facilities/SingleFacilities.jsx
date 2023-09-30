import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SingleFacilities = ({ icon, id }) => {
  const { t } = useTranslation("global");

  let title;
  if (id === 1) {
    title = t("facilities.facilityTitle1");
  } else if (id === 2) {
    title = t("facilities.facilityTitle2");
  } else if (id === 3) {
    title = t("facilities.facilityTitle3");
  } else if (id === 4) {
    title = t("facilities.facilityTitle4");
  }

  return (
    <div className="single-facilities flex flex-col gap-[12px] justify-center items-center text-center bg-primary w-[210px] h-[210px]  rounded-[50%]">
      <img src={icon} alt="Icon" />
      <p className="text-[20px] leading-[24px] font-medium">{title}</p>
    </div>
  );
};

SingleFacilities.propTypes = {
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default SingleFacilities;
