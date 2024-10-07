import { IColors } from "@/interfaces/common";

const PayLaterIcon = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" {...props}>
      <path
        d="M27.5 12.5H2.5M13.75 23.75L23.5 23.75C24.9001 23.75 25.6002 23.75 26.135 23.4775C26.6054 23.2378 26.9878 22.8554 27.2275 22.385C27.5 21.8502 27.5 21.1501 27.5 19.75V10.25C27.5 8.84987 27.5 8.1498 27.2275 7.61503C26.9878 7.14462 26.6054 6.76217 26.135 6.52249C25.6002 6.25 24.9001 6.25 23.5 6.25H21.25M13.75 23.75L16.25 26.25M13.75 23.75L16.25 21.25M8.75 23.75H6.5C5.09987 23.75 4.3998 23.75 3.86502 23.4775C3.39462 23.2378 3.01217 22.8554 2.77248 22.385C2.5 21.8502 2.5 21.1501 2.5 19.75V10.25C2.5 8.84987 2.5 8.1498 2.77248 7.61502C3.01217 7.14462 3.39462 6.76217 3.86502 6.52248C4.3998 6.25 5.09987 6.25 6.5 6.25H16.25M16.25 6.25L13.75 8.75M16.25 6.25L13.75 3.75"
        stroke={color ?? "#333"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PayLaterIcon;
