import { useRef } from "react";
import Label, { LabelProps } from "../label/Label";

interface Props extends LabelProps {
  label: string;
  onChangeParam: (value: string) => void;
  placeholder: string;
}

const InputSearch = (props: Props) => {
  const { label, required, placeholder, onChangeParam } = props;
  const element = useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        className="relative"
        style={{
          borderRadius: "8px",
        }}
      >
        <div className="absolute left-[16px] top-1 h-fit">
          <Label label={label} required={required} />
        </div>
        <input
          ref={element}
          className={`input`}
          onChange={(e) => {
            const value = e.target.value;
            onChangeParam(value);
          }}
          placeholder={placeholder}
        />
        {/* <div
          className="absolute right-4 top-[50%] cursor-pointer"
          onClick={() => {
            element.current?.focus();
          }}
        >
          <iconsSvg.CloseTextInputIcon />
        </div> */}
      </div>
    </>
  );
};

export default InputSearch;
