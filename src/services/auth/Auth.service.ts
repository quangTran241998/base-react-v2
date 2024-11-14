import { ROOT_URL } from "@/constants/apiUrl";
import { ResponseCommon, UserInfos } from "@/interfaces/common";
import { AxiosResponse } from "axios";
import httpServices from "../httpServices";

export interface RequestLogin {
  username: string;
  password: string;
}

export interface ResponseDataLogin extends UserInfos {}

export type ResponseLogin = AxiosResponse<ResponseCommon<ResponseDataLogin>>;

class AuthService {
  login(body: RequestLogin): Promise<ResponseLogin> {
    return httpServices.post(`${ROOT_URL}/auth/login`, body);
  }
}

export default new AuthService();
