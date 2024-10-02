import { IColors } from "@/interfaces/common";
import React from "react";

const SalesManagementIcon = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M11.6666 9.66663H6.66665M8.33331 13H6.66665M13.3333 6.33329H6.66665M16.6666 9.24996V6.16663C16.6666 4.76649 16.6666 4.06643 16.3942 3.53165C16.1545 3.06124 15.772 2.67879 15.3016 2.43911C14.7668 2.16663 14.0668 2.16663 12.6666 2.16663H7.33331C5.93318 2.16663 5.23312 2.16663 4.69834 2.43911C4.22793 2.67879 3.84548 3.06124 3.6058 3.53165C3.33331 4.06643 3.33331 4.76649 3.33331 6.16663V14.8333C3.33331 16.2334 3.33331 16.9335 3.6058 17.4683C3.84548 17.9387 4.22793 18.3211 4.69834 18.5608C5.23312 18.8333 5.93318 18.8333 7.33331 18.8333H9.58331M18.3333 18.8333L17.0833 17.5833M17.9166 15.5C17.9166 17.1108 16.6108 18.4166 15 18.4166C13.3891 18.4166 12.0833 17.1108 12.0833 15.5C12.0833 13.8891 13.3891 12.5833 15 12.5833C16.6108 12.5833 17.9166 13.8891 17.9166 15.5Z"
        stroke={color ? color : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SalesManagementIcon;
