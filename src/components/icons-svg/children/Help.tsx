import { IColors } from "@/interfaces/common";
import React from "react";

const HelpIcon = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="icon-sidebar" {...props}>
      <path
        d="M7.575 8C7.77092 7.44306 8.15763 6.97342 8.66663 6.67428C9.17563 6.37513 9.77408 6.26578 10.356 6.36559C10.9379 6.4654 11.4657 6.76794 11.8459 7.21961C12.2261 7.67128 12.4342 8.24294 12.4333 8.83333C12.4333 10.5 9.93333 11.3333 9.93333 11.3333M10 14.6667H10.0083M6.5 18H13.5C14.9001 18 15.6002 18 16.135 17.7275C16.6054 17.4878 16.9878 17.1054 17.2275 16.635C17.5 16.1002 17.5 15.4001 17.5 14V7C17.5 5.59987 17.5 4.8998 17.2275 4.36502C16.9878 3.89462 16.6054 3.51217 16.135 3.27248C15.6002 3 14.9001 3 13.5 3H6.5C5.09987 3 4.3998 3 3.86502 3.27248C3.39462 3.51217 3.01217 3.89462 2.77248 4.36502C2.5 4.8998 2.5 5.59987 2.5 7V14C2.5 15.4001 2.5 16.1002 2.77248 16.635C3.01217 17.1054 3.39462 17.4878 3.86502 17.7275C4.3998 18 5.09987 18 6.5 18Z"
        stroke={props.color ? props.color : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default HelpIcon;
