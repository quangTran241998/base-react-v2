import { IColors } from "@/interfaces/common";

const AddIcon = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M10.8333 4.16671C10.8333 3.70647 10.4602 3.33337 9.99998 3.33337C9.53973 3.33337 9.16665 3.70647 9.16665 4.16671V9.16671H4.16665C3.70641 9.16671 3.33331 9.53979 3.33331 10C3.33331 10.4603 3.70641 10.8334 4.16665 10.8334H9.16665V15.8334C9.16665 16.2936 9.53973 16.6667 9.99998 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8334V10.8334H15.8333C16.2936 10.8334 16.6666 10.4603 16.6666 10C16.6666 9.53979 16.2936 9.16671 15.8333 9.16671H10.8333V4.16671Z"
        fill={color ?? "#333"}
      />
    </svg>
  );
};

export default AddIcon;
