import { IColors } from "@/interfaces/common";
import React from "react";

const LogoutIcon = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="icon-sidebar" {...props}>
      <path
        d="M13.3333 14.6667L17.5 10.5M17.5 10.5L13.3333 6.33333M17.5 10.5H7.5M10 14.6667C10 15.4416 10 15.8291 9.91482 16.147C9.68365 17.0098 9.00978 17.6836 8.14705 17.9148C7.82913 18 7.44164 18 6.66667 18H6.25C5.08515 18 4.50272 18 4.04329 17.8097C3.43072 17.556 2.94404 17.0693 2.6903 16.4567C2.5 15.9973 2.5 15.4149 2.5 14.25V6.75C2.5 5.58515 2.5 5.00272 2.6903 4.54329C2.94404 3.93072 3.43072 3.44404 4.04329 3.1903C4.50272 3 5.08515 3 6.25 3H6.66667C7.44164 3 7.82913 3 8.14705 3.08519C9.00978 3.31635 9.68365 3.99022 9.91482 4.85295C10 5.17087 10 5.55836 10 6.33333"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
