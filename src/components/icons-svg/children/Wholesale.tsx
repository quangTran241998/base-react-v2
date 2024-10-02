import { IColors } from "@/interfaces/common";
import React from "react";

const WholesaleIcon = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M11.6666 9.66663H6.66665M8.33331 13H6.66665M13.3333 6.33329H6.66665M16.6666 6.16663V14.8333C16.6666 16.2334 16.6666 16.9335 16.3942 17.4683C16.1545 17.9387 15.772 18.3211 15.3016 18.5608C14.7668 18.8333 14.0668 18.8333 12.6666 18.8333H7.33331C5.93318 18.8333 5.23312 18.8333 4.69834 18.5608C4.22793 18.3211 3.84548 17.9387 3.6058 17.4683C3.33331 16.9335 3.33331 16.2334 3.33331 14.8333V6.16663C3.33331 4.76649 3.33331 4.06643 3.6058 3.53165C3.84548 3.06124 4.22793 2.67879 4.69834 2.43911C5.23312 2.16663 5.93318 2.16663 7.33331 2.16663H12.6666C14.0668 2.16663 14.7668 2.16663 15.3016 2.43911C15.772 2.67879 16.1545 3.06124 16.3942 3.53165C16.6666 4.06643 16.6666 4.76649 16.6666 6.16663Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default WholesaleIcon;
