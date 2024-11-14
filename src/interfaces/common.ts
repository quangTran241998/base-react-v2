import { ReactNode } from "react";
import { PERMISSION_ENUM } from "./enum";
import { FieldInputProps, FormikProps } from "formik";

export interface AdditionalFormikProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  placeholder: string;
}

export interface UserInfos {
  username: string;
  roleId: PERMISSION_ENUM;
  accessToken: string;
  refreshToken: string;
  email: string;
}

export interface RequestCommon<T> {
  sessionId: string;
  token: string;
  wsCode: string;
  wsRequest: T;
}

export interface ResponseCommon<T> {
  statusCode: number;
  message: string;
  data: T;
}

export interface ResponseCommonGateWay<T> {
  errorCode: string;
  errorMessage: string;
  message: string;
  result: T;
}

export interface Option {
  label: string;
  value: string;
}

export type RouteType = {
  element?: ReactNode;
  path?: string;
  children?: ChildrenPathSideBar[];
  displayText: string;
  Icon: ReactNode | any;
  isChildren: boolean;
  pathChildren?: string[];
  isPermisson: boolean;
  listPathActive: string[];
};

export interface ChildrenPathSideBar {
  displayText: string;
  path: string;
  Icon: ReactNode | any;
  isPermisson: boolean;
}

export interface IColors {
  color?: string;
}

export interface PaginationParams {
  page: string;
  size: string;
}

export interface OptionSelect {
  label: string;
  key: string | number;
}
