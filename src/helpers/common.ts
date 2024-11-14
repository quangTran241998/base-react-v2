import { secretKeyEncrypt } from "@/constants/common";
import { RouteType } from "@/interfaces/common";
import { PERMISSION_ENUM } from "@/interfaces/enum";
import PopupService from "@/services/popupPage";
import CryptoJS from "crypto-js";

export const onClosePopup = () => {
  PopupService.instance.current.close();
};

export const isCheckRole = (
  roles: PERMISSION_ENUM[],
  roleUser: PERMISSION_ENUM
) => {
  return roles.includes(roleUser);
};

export const filterPermissions = (items: RouteType[]) => {
  return items
    .map((item: RouteType) => {
      if (item.isChildren && item.children && item.isPermisson) {
        const filterChildren = item.children.filter((item) => item.isPermisson);
        const filteredChildren = filterChildren;
        if (filteredChildren.length > 0) {
          return { ...item, children: filteredChildren };
        }
      } else if (item.isPermisson === true) {
        return item;
      }
      return null;
    })
    .filter((item) => item !== null);
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

export const decodeInfo = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKeyEncrypt);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export const totalCount = (list: any) => {
  return list.reduce((acc: any, curr: any) => {
    return curr.pricePromotion
      ? acc + curr.pricePromotion * curr.quantity
      : acc + curr.price * curr.quantity;
  }, 0);
};

export const totalCountQuantity = (list: any) => {
  return list.reduce((acc: any, curr: any) => {
    return acc + curr.quantity;
  }, 0);
};

export const convertCurrency = (
  amount: number,
  unit?: string,
  noUnit?: boolean
) => {
  const convert = `${amount}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return `${convert}${noUnit ? "" : unit ? ` ${unit}` : " VND"}`;
};

export const getBase64 = (file: File) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const base64string = event.target?.result?.toString().split(",")[1];
      resolve(base64string);
    };
  });
};

export const convertPhoneDotNumber = (value: string) => {
  let tmpClear = value.replace("/s+/g", "").replace(/[^\d+]/g, "");
  if (tmpClear.startsWith("+84")) {
    tmpClear = "0" + tmpClear.slice(3);
  }
  const tmp = tmpClear.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3");
  return tmp;
};

/**
 *
 * @param base64string
 * @param nameFile
 * @description flow download file excel:
 */
export const exportFileBase64 = (
  base64string: string,
  nameFile: string,
  type?: string
) => {
  //let's decode base64 from string to ArrayBuffer
  const byteCharacters = atob(base64string);
  const byteNumbers = new Array(byteCharacters.length);
  for (let index = 0; index < byteNumbers.length; index++) {
    byteNumbers[index] = byteCharacters.charCodeAt(index);
  }
  const byteArray = new Uint8Array(byteNumbers);

  // create a Blob from ArrayBuffer
  const blob = new Blob([byteArray], {
    type:
      type ??
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  //create a link temporary anchor element
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = nameFile;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const numberWithoutDots = (price: string) => {
  return Number(price.replace(/\./g, ""));
};
