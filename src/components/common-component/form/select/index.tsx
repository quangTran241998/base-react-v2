import { AdditionalFormikProps, OptionSelect } from "@/interfaces/common";
import { Dropdown, MenuProps } from "antd";
import { getIn } from "formik";
import { ReactNode, useRef, useState } from "react";
import Label, { LabelProps } from "../label/Label";
import { iconsSvg } from "../../../icons-svg/index";

interface Props extends Omit<AdditionalFormikProps & LabelProps, "select"> {
  label?: string;
  placeholder: string;
  icon?: ReactNode;
  options: OptionSelect[];
}

const SelectField = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { label, required, placeholder, icon, form, field, options } = props;
  const element = useRef<HTMLInputElement>(null);

  const { name, value } = field || {};
  const { errors, touched, setFieldValue, setFieldTouched } = form;

  const isTouched = getIn(touched, name!);
  const errorMessage = getIn(errors, name!);
  const isError = isTouched && errorMessage;

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
                setFieldValue(name, item.key);
                setFieldTouched(name);
                setIsOpen(false);
              }}
            >
              {item.label}
              {item.key === value && <iconsSvg.CheckSelect />}
            </div>
          );
        })}
      </div>
    );
  };

  const items: MenuProps["items"] = [...options];
  const labelValue = options.find((item) => item.key === value);

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
          {label && (
            <div className="absolute left-[16px] top-1 h-fit">
              <Label label={label} required={required} />
            </div>
          )}
          <input
            value={labelValue?.label ?? ""}
            ref={element}
            className={`input cursor-default ${!label && "py-[11px]"}`}
            placeholder={placeholder}
            readOnly
            onBlur={() => {
              setTimeout(() => {
                setIsOpen(false);
                setFieldTouched(name);
              }, 200);
            }}
          />
          <div className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer">{icon}</div>
        </div>
      </Dropdown>

      <p style={{ visibility: isError ? "visible" : "hidden" }} className={`invalid-text min-h-5 ${isError && "mb-5 mt-1"}`}>
        {errorMessage && errorMessage}
      </p>
    </>
  );
};

export default SelectField;
