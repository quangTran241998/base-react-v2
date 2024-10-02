import { IColors } from "@/interfaces/common";
import React from "react";

const DealerManagementIcon = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <path
        opacity="0.12"
        d="M8.33331 10.5C10.4044 10.5 12.0833 8.82107 12.0833 6.75C12.0833 4.67893 10.4044 3 8.33331 3C6.26224 3 4.58331 4.67893 4.58331 6.75C4.58331 8.82107 6.26224 10.5 8.33331 10.5Z"
        fill={color}
      />
      <path
        d="M10 13.4167H6.25002C5.08705 13.4167 4.50557 13.4167 4.0324 13.5602C2.96707 13.8834 2.13339 14.717 1.81022 15.7824C1.66669 16.2555 1.66669 16.837 1.66669 18M15.8334 18V13M13.3334 15.5H18.3334M12.0834 6.75C12.0834 8.82107 10.4044 10.5 8.33335 10.5C6.26229 10.5 4.58335 8.82107 4.58335 6.75C4.58335 4.67893 6.26229 3 8.33335 3C10.4044 3 12.0834 4.67893 12.0834 6.75Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DealerManagementIcon;
