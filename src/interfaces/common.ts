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
