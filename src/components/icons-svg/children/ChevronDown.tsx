import { IColors } from "@/interfaces/common";

const ChevronDown = (props: Omit<React.SVGProps<SVGSVGElement> & IColors, "icon">) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <path d="M6 9.53223L12 15.5322L18 9.53223" stroke={color ?? "black"} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default ChevronDown;
