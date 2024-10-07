import { ORDER_STATUS, ORDER_STATUS_MESSAGE } from "@/interfaces/common";
import { useTranslation } from "react-i18next";

interface Props {
  status: ORDER_STATUS;
}

const RenderOrderStatus = (props: Props) => {
  const { status } = props;
  const { t } = useTranslation();

  const checkStatus = () => {
    switch (status) {
      case ORDER_STATUS.SUCCESS: {
        return (
          <div className="px-2 py-[2px] bg-[#E6F7EC] text-[#00B141] border border-[#8ADBA8] rounded-xs w-fit">{t(ORDER_STATUS_MESSAGE.SUCCESS)}</div>
        );
      }
      case ORDER_STATUS.NEW_CREATE: {
        return (
          <div className="px-2 py-[2px] bg-transparent text-[#333] border border-default rounded-xs w-fit">{t(ORDER_STATUS_MESSAGE.NEW_CREATE)}</div>
        );
      }
      case ORDER_STATUS.REFUSE: {
        return <div className="px-2 py-[2px] bg-[#E60A32] text-white border rounded-xs w-fit">{t(ORDER_STATUS_MESSAGE.REFUSE)}</div>;
      }
      case ORDER_STATUS.HANLDE_ERROR: {
        return (
          <div className="px-2 py-[2px] bg-[#FDE7EB] text-[#E60A32] border border-[#F48EA1] rounded-xs w-fit">
            {t(ORDER_STATUS_MESSAGE.HANLDE_ERROR)}
          </div>
        );
      }
      case ORDER_STATUS.PENDING_APPROVAL: {
        return (
          <div className="px-2 py-[2px] bg-[#FFF3E9] text-[#FF831E] border border-[#FFC698] rounded-xs w-fit">
            {t(ORDER_STATUS_MESSAGE.PENDING_APPROVAL)}
          </div>
        );
      }
      case ORDER_STATUS.PROCESSING: {
        return (
          <div className="px-2 py-[2px] bg-[#EAF1FF] text-[#2F74FF] border border-[#BFD4FF] rounded-xs w-fit">
            {t(ORDER_STATUS_MESSAGE.PROCESSING)}
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

export default RenderOrderStatus;
