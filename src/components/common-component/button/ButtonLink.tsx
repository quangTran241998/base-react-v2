import { iconsSvg } from "@/components/icons-svg";
interface Props {
  children?: string;
  onClick: () => void;
}

const ButtonLink = ({ children, onClick }: Props) => {
  return (
    <div className="text-greenMain flex items-center cursor-pointer hover:underline" onClick={onClick}>
      {children ?? "Learn more "} <iconsSvg.IconCheveronRight className="ml-1 mt-1" />
    </div>
  );
};

export default ButtonLink;
