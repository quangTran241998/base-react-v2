import { useState } from "react";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
interface Props {
  content: string;
  title: string;
}

const DropDownItem = (props: Props) => {
  const { content, title } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div className="sub-container my-0">
      <div className="header-drop-down flex justify-between items-center py-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="title-drop-down font-medium text-[20px] text-desc" style={{ color: isOpen ? "#2dbe60" : "" }}>
          {t(title)}
        </div>
        <DropDownIcon isOpen={isOpen} color={isOpen ? "#2dbe60" : "#5C5C5C"} />
      </div>
      <div className={`content-drop-down max-h-0 overflow-hidden transition-all duration-300 ${isOpen && "max-h-[1000px]"}`}>
        <div className=" md:pl-4">
          <div className=" font-medium text-[14px] pl-2 mb-2">{parse(t(`${content}`))}</div>
        </div>
      </div>
      <div className="w-full border-b-[1px]"></div>
    </div>
  );
};

export default DropDownItem;

const DropDownIcon = ({ isOpen, color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`${isOpen ? "rotate-180 transition-all duration-300" : "rotate-0 transition-all duration-300"}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.4107 6.91082C4.73614 6.58539 5.26378 6.58539 5.58922 6.91082L9.99996 11.3216L14.4107 6.91082C14.7361 6.58539 15.2638 6.58539 15.5892 6.91082C15.9146 7.23626 15.9146 7.7639 15.5892 8.08934L10.5892 13.0893C10.2638 13.4147 9.73613 13.4147 9.41071 13.0893L4.4107 8.08934C4.08527 7.7639 4.08527 7.23626 4.4107 6.91082Z"
        fill={color ?? "#5C5C5C"}
      />
    </svg>
  );
};
