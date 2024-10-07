import { BaseRoute } from "@/constants/baseRoute";
import { OptionRadio, OptionSelect, ORDER_STATUS, ORDER_STATUS_MESSAGE } from "@/interfaces/common";
import { iconsSvg } from "../components/icons-svg/index";

export const listNav = [{ title: "Home", link: BaseRoute.Homepage }];

export const gender = [
  {
    label: "male",
    value: "male",
  },
  {
    label: "female",
    value: "female",
  },
];

export const listUser = [
  {
    label: "Quang",
    key: "1",
  },
  {
    label: "Nam",
    key: "2",
  },
];

export const ListPaymentMethod: OptionRadio[] = [
  {
    label: "Chuyển khoản",
    value: "Chuyển khoản",
    icon: iconsSvg.TransferAndCashIcon,
  },
  {
    label: "Tiền mặt",
    value: "Tiền mặt",
    icon: iconsSvg.TransferAndCashIcon,
  },
  {
    label: "Trả sau",
    value: "Trả sau",
    icon: iconsSvg.PayLaterIcon,
  },
];

export const listOrderStatus: OptionSelect[] = [
  { label: "all", key: "" },
  { label: ORDER_STATUS_MESSAGE.NEW_CREATE, key: ORDER_STATUS.NEW_CREATE },
  { label: ORDER_STATUS_MESSAGE.SUCCESS, key: ORDER_STATUS.SUCCESS },
  { label: ORDER_STATUS_MESSAGE.REFUSE, key: ORDER_STATUS.REFUSE },
  { label: ORDER_STATUS_MESSAGE.PENDING_APPROVAL, key: ORDER_STATUS.PENDING_APPROVAL },
  { label: ORDER_STATUS_MESSAGE.PROCESSING, key: ORDER_STATUS.PROCESSING },
];
