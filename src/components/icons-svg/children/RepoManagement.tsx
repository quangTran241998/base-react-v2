import { IColors } from "@/interfaces/common";
import React from "react";

const RepoManagementIcon = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <path
        opacity="0.12"
        d="M17.5 4.66663C17.5 6.04734 14.1421 7.16663 10 7.16663C5.85786 7.16663 2.5 6.04734 2.5 4.66663V16.3333C2.5 17.7166 5.83333 18.8333 10 18.8333C14.1667 18.8333 17.5 17.7166 17.5 16.3333V4.66663Z"
        fill={color}
      />
      <path
        d="M17.5 4.66663C17.5 6.04734 14.1421 7.16663 10 7.16663C5.85786 7.16663 2.5 6.04734 2.5 4.66663M17.5 4.66663C17.5 3.28591 14.1421 2.16663 10 2.16663C5.85786 2.16663 2.5 3.28591 2.5 4.66663M17.5 4.66663V16.3333C17.5 17.7166 14.1667 18.8333 10 18.8333C5.83333 18.8333 2.5 17.7166 2.5 16.3333V4.66663M17.5 8.60014C17.5 9.98347 14.1667 11.1001 10 11.1001C5.83333 11.1001 2.5 9.98347 2.5 8.60014M17.5 12.5333C17.5 13.9166 14.1667 15.0333 10 15.0333C5.83333 15.0333 2.5 13.9166 2.5 12.5333"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RepoManagementIcon;
