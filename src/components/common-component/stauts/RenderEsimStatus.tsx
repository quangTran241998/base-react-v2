import { ESIM_STATUS, ESIM_STATUS_MESSAGE } from "@/interfaces/enum";
import { iconsSvg } from "../../icons-svg/index";
import { useTranslation } from "react-i18next";

interface Props {
  status: ESIM_STATUS;
}

const RenderEsimStatus = (props: Props) => {
  const { status } = props;
  const { t } = useTranslation();
  const checkStatus = () => {
    switch (status) {
      case ESIM_STATUS.ACTIVE: {
        return (
          <div className="px-2 py-[2px] bg-[#00B141] text-[white] rounded-xs w-fit flex items-center gap-x-1">
            <iconsSvg.ActiveEsimIcon />
            <p>{t(ESIM_STATUS_MESSAGE.ACTIVE)}</p>
          </div>
        );
      }
      case ESIM_STATUS.NOT_ACTIVE: {
        return (
          <div className="px-2 py-[2px] bg-[#767676] text-[white] rounded-xs w-fit flex items-center gap-x-1">
            <iconsSvg.NotActiceEsim />
            <p>{t(ESIM_STATUS_MESSAGE.NOT_ACTIVE)}</p>
          </div>
        );
      }
      case ESIM_STATUS.EXPIRED: {
        return (
          <div className="px-2 py-[2px] bg-[#767676] text-[white] rounded-xs w-fit flex items-center gap-x-1">
            <iconsSvg.NotActiceEsim />
            <p>{t(ESIM_STATUS_MESSAGE.EXPIRED)}</p>
          </div>
        );
      }
      case ESIM_STATUS.FINISHED: {
        return (
          <div className="px-2 py-[2px] bg-[#767676] text-[white] rounded-xs w-fit flex items-center gap-x-1">
            <iconsSvg.NotActiceEsim />
            <p>{t(ESIM_STATUS_MESSAGE.FINISHED)}</p>
          </div>
        );
      }
      case ESIM_STATUS.UNKNOWN: {
        return (
          <div className="px-2 py-[2px] bg-[#767676] text-[white] rounded-xs w-fit flex items-center gap-x-1">
            <iconsSvg.NotActiceEsim />
            <p>{t(ESIM_STATUS_MESSAGE.UNKNOWN)}</p>
          </div>
        );
      }
      default: {
        return "";
      }
    }
  };

  return <div>{checkStatus()}</div>;
};

export default RenderEsimStatus;
