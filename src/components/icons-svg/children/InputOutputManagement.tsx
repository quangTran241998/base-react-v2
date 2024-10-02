import { IColors } from "@/interfaces/common";
import React from "react";

const InputOutputManagementIcon = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M16.6666 14.6667H3.33331M3.33331 14.6667L6.66665 11.3333M3.33331 14.6667L6.66665 18M3.33331 6.33333H16.6666M16.6666 6.33333L13.3333 3M16.6666 6.33333L13.3333 9.66667"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default InputOutputManagementIcon;
