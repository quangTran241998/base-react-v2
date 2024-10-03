import { iconsSvg } from "@/components/icons-svg";
import { useRef } from "react";

interface Props {
  onChangeParam: (value: string) => void;
  placeholder: string;
}

const InputSearchColTable = (props: Props) => {
  const { placeholder, onChangeParam } = props;
  const element = useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        className="relative"
        style={{
          borderRadius: "8px",
        }}
      >
        <div className="absolute left-[16px] top-1 h-fit"></div>
        <input
          ref={element}
          className={`input [&&]:py-[7px]`}
          onChange={(e) => {
            const value = e.target.value;
            onChangeParam(value);
          }}
          placeholder={placeholder}
        />
        <div
          className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer"
          onClick={() => {
            element.current?.focus();
          }}
        >
          <iconsSvg.SearchIcon />
        </div>
      </div>
    </>
  );
};

export default InputSearchColTable;
