import httpServices from "@/services/httpServices";

export const requestBaseApi = (props: {
  sessionId?: string;
  token?: string;
  wsCode: string;
  wsRequest?: string;
}) => {
  const { sessionId, token, wsCode, wsRequest } = props;
  return {
    sessionId: sessionId ?? httpServices.getUserStorage()?.sessionId ?? "",
    token: token ?? httpServices.getUserStorage()?.token ?? "",
    wsCode: wsCode ?? "",
    wsRequest: wsRequest ?? {},
  };
};

export const checkPassword = (password: string): boolean => {
  const newArray: string[] = password.split("");
  const isAscending: boolean = newArray.every(
    (val: string, index: number) => +val - index === 1
  );
  const allEqual: boolean = newArray.every(
    (val: string) => val === newArray[0]
  );
  return isAscending || allEqual ? false : true;
};
