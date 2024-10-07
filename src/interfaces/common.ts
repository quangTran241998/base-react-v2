import { LANG_ENUM } from "@/i18n/config";
import { FieldInputProps, FormikProps } from "formik";
import { ReactNode } from "react";

export interface AdditionalFormikProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  placeholder: string;
}

export interface UserInfos {
  accountId: number;
  sessionId: string;
  token: string;
  username: string;
  appCode: string;
  application: [];
  customerName: string;
  domain: string;
  firstLogin: boolean;
}

export interface RequestCommon<T> {
  sessionId: string;
  token: string;
  wsCode: string;
  wsRequest: T;
}

export interface ResponseCommon<T> {
  errorCode: string;
  errorMessage: string;
  message: string;
  result: {
    errorCode: string;
    message: string;
    wsResponse: T;
  };
}
export interface ResponseCommonGateWay<T> {
  errorCode: string;
  errorMessage: string;
  message: string;
  result: T;
}

export interface Option {
  label: string;
  value: string | number;
}

export interface OptionSelect {
  label: string;
  key: string | number;
}

export interface OptionRadio {
  label: string;
  value: string | number;
  icon: ReactNode | any;
}

export interface OptionExportFile {
  label: string;
  value: string | number;
  disabled: boolean;
}

export type RouteType = {
  element?: ReactNode;
  path?: string;
  children?: ChildrenPathSideBar[];
  displayText: string;
  Icon: ReactNode | any;
  isChild: boolean;
  pathChildren?: string[];
  roles: number[];
  listPathActive: string[];
};

export interface ChildrenPathSideBar {
  displayText: string;
  path: string;
  roles: number[];
  Icon: ReactNode | any;
}

export interface IColors {
  color?: string;
}

export interface PaginationParams {
  page: string;
  size: string;
}

export interface IpInfo {
  clientIp: string;
  ipLocation: string;
}

export interface ParamsApp {
  language: LANG_ENUM;
}

export interface ResponseDataFile {
  fileData: string;
  fileUrl: string;
}

export enum STATUS {
  success = 1,
  fail = 0,
  lock = 2,
}

export enum PAYMENT_STATUS {
  FAIL = 0,
  SUCCESS = 1,
}

export enum PAYMENT_STATUS_MESSAGE {
  FAIL = "Chưa thanh toán",
  SUCCESS = "Đã thanh toán",
}

export enum ORDER_STATUS {
  NEW_CREATE = 0,
  SUCCESS = 1,
  REFUSE = 2,
  HANLDE_ERROR = 3,
  PENDING_APPROVAL = 4,
  PROCESSING = 5,
}

export enum ORDER_STATUS_MESSAGE {
  NEW_CREATE = "Đơn mới ",
  SUCCESS = "Đã giao thành công",
  REFUSE = "Đã Huỷ",
  HANLDE_ERROR = "Nhập hàng lỗi",
  PENDING_APPROVAL = "Chờ giao đơn",
  PROCESSING = "Đang xử lý",
}

export enum ESIM_STATUS {
  ACTIVE = "ACTIVE",
  NOT_ACTIVE = "NOT_ACTIVE",
  FINISHED = "FINISHED",
  UNKNOWN = "UNKNOWN",
  EXPIRED = "EXPIRED",
  ALL = "",
}

export enum ESIM_STATUS_MESSAGE {
  ACTIVE = "active",
  NOT_ACTIVE = "notActive",
  FINISHED = "finished",
  UNKNOWN = "unknown",
  EXPIRED = "exprired",
}

export enum LOCATION_TYPE {
  NATIONS = 1,
  AREAS = 2,
  GLOBAL = 3,
}

export enum AppCode {
  skyjoy = "SKYJOY",
  portal = "WEB_PORTAL",
  vja = "VJA",
  partner = "PARTNER",
}

export enum STATUS_API {
  success = "success",
  s200 = "S200",
}

export enum CURRENCY {
  VND = "VND",
  USD = "USD",
}

export enum SELECTION_ENUM {
  NO_SELECT = "NO_SELECT",
  SELECTED = "SELECTED",
  SELECTED_ALL = "SELECTED_ALL",
}
