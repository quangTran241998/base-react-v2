import { ROOT_URL } from "@/constants/apiUrl";
import { PaginationParams, ResponseCommon } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "../httpServices";
import queryString from "query-string";

export interface RequestDemo extends PaginationParams {}

export interface ResponseDataDemo {}

export type ResponseDemo = AxiosResponse<ResponseCommon<ResponseDataDemo>>;

class DemoService {
  get(params: RequestDemo): Promise<ResponseDemo> {
    return httpServices.get(
      `${ROOT_URL}/demo?${queryString.stringify(params || {})}`
    );
  }
}

export default new DemoService();
