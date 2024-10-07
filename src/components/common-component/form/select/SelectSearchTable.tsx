import { OptionSelect } from "@/interfaces/common";
import { Dropdown, MenuProps } from "antd";
import { ReactNode, useRef, useState } from "react";
import { iconsSvg } from "../../../icons-svg/index";

interface Props {
  placeholder: string;
  icon?: ReactNode;
  options: OptionSelect[];
  onChangeParam: (value: string | number) => void;
}

const SelectSearchTable = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | number>("");

  const { placeholder, icon, options, onChangeParam } = props;
  const element = useRef<HTMLInputElement>(null);

  const RenderDropdown = (props: { options: OptionSelect[] }) => {
    const { options } = props;
    return (
      <div className="bg-white shadow-default rounded-sm py-1">
        {options.map((item) => {
          return (
            <div
              key={item.key}
              className="px-2 py-[6px] cursor-pointer hover:bg-[#F7F7F7] flex justify-between items-center"
              onClick={() => {
                setValue(item.label);
                onChangeParam(item.key);
                setIsOpen(false);
              }}
            >
              {item.label}
              {item.label === value && <iconsSvg.CheckSelect />}
            </div>
          );
        })}
      </div>
    );
  };

  const items: MenuProps["items"] = [...options];

  return (
    <>
      <Dropdown
        open={isOpen}
        menu={{ items }}
        trigger={["click"]}
        dropdownRender={(menus: any) => {
          return <RenderDropdown options={menus?.props?.items ?? []} />;
        }}
      >
        <div
          className="relative"
          style={{
            borderRadius: "8px",
          }}
          onClick={() => setIsOpen(true)}
        >
          <input
            value={value}
            ref={element}
            className={`input cursor-default py-[7px]`}
            placeholder={placeholder}
            readOnly
            onBlur={() => {
              setTimeout(() => {
                setIsOpen(false);
              }, 200);
            }}
          />
          <div className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer">{icon ? icon : <iconsSvg.ChevronDown />}</div>
        </div>
      </Dropdown>
    </>
  );
};

export default SelectSearchTable;
