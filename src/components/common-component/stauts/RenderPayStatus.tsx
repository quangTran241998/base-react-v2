import { PAYMENT_STATUS, PAYMENT_STATUS_MESSAGE } from "@/interfaces/common";
import { useTranslation } from "react-i18next";

interface Props {
  status: PAYMENT_STATUS;
}

const RenderPayStatus = (props: Props) => {
  const { status } = props;
  const { t } = useTranslation();
  const checkStatus = () => {
    switch (status) {
      case PAYMENT_STATUS.SUCCESS: {
        return (
          <div className="px-2 py-[2px] bg-[#E6F7EC] text-[#00B141] border border-[#8ADBA8] rounded-xs w-fit">
            {t(PAYMENT_STATUS_MESSAGE.SUCCESS)}
          </div>
        );
      }
      case PAYMENT_STATUS.FAIL: {
        return (
          <div className="px-2 py-[2px] bg-[#FFF3E9] text-[#FF831E] border border-[#FFC698] rounded-xs w-fit">{t(PAYMENT_STATUS_MESSAGE.FAIL)}</div>
        );
      }
      default: {
        return "";
      }
    }
  };

  return <div>{checkStatus()}</div>;
};

export default RenderPayStatus;
