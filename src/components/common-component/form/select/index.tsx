import { AdditionalFormikProps, OptionSelect } from "@/interfaces/common";
import { Dropdown, MenuProps } from "antd";
import { getIn } from "formik";
import { ReactNode, useEffect, useRef, useState } from "react";
import Label, { LabelProps } from "../label/Label";
import { iconsSvg } from "@/components/icons-svg";
import { isEmpty } from "lodash";
import { maxLengthFields } from "@/constants/common";

interface Props extends Omit<AdditionalFormikProps & LabelProps, "select"> {
  label?: string;
  placeholder: string;
  icon?: ReactNode;
  options: OptionSelect[];
  type: "search";
  disabled?: boolean;
  onChangeSelect: (value: string | number, item: any) => void;
}

const SelectField = (props: Props) => {
  const {
    label,
    required,
    placeholder,
    icon = <iconsSvg.ChevronDown />,
    form,
    field,
    options = [],
    type,
    disabled = false,
    onChangeSelect,
  } = props;

  const { name, value } = field || {};
  const { errors, touched, setFieldValue, setFieldTouched } = form;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [textSearch, setTextSearch] = useState<string>("");

  const [data, setData] = useState<OptionSelect[]>([]);

  const element = useRef<HTMLInputElement>(null);

  const isTouched = getIn(touched, name!);
  const errorMessage = getIn(errors, name!);
  const isError = isTouched && errorMessage;

  useEffect(() => {
    if (textSearch) {
      const newData = options.filter((item) => {
        return item.label
          .toLowerCase()
          .includes(textSearch.toLowerCase().trim());
      });
      setData(newData);
    } else {
      if (!isEmpty(options)) {
        setData(options);
      }
    }
  }, [textSearch, options]);

  const RenderDropdown = (props: {
    options: OptionSelect[];
    onChangeSelect: (value: string | number, item: any) => void;
  }) => {
    const { options } = props;
    return (
      <div
        className="bg-white rounded-sm py-1 max-h-[310px] overflow-auto"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
        {isEmpty(options) ? (
          <div className="px-3 py-5 text-center">Không có kết quả</div>
        ) : (
          <>
            {options?.map((item) => {
              return (
                <div
                  key={item.key}
                  className="px-2 py-[6px] cursor-pointer hover:bg-[#F7F7F7] flex justify-between items-center"
                  onClick={() => {
                    setFieldValue(name, item.key);
                    setTextSearch("");
                    setFieldTouched(name);
                    setIsOpen(false);
                    onChangeSelect(item.key, item);
                  }}
                >
                  {item.label}
                  {item.key === value && <iconsSvg.CheckSelect />}
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  };

  const items: MenuProps["items"] = [...options];

  const handleValue = () => {
    if (isOpen) {
      return textSearch;
    } else {
      const labelValue = options.find((item) => item.key === value);
      return labelValue?.label ?? "";
    }
  };

  return (
    <>
      <Dropdown
        open={isOpen}
        menu={{ items }}
        trigger={["click"]}
        dropdownRender={() => {
          return (
            <RenderDropdown
              options={data ?? []}
              onChangeSelect={onChangeSelect}
            />
          );
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
            value={handleValue() ?? ""}
            ref={element}
            className={`input cursor-default ${!label && "py-[11px]"}`}
            placeholder={placeholder}
            readOnly={!type}
            onFocus={() => {
              setIsOpen(true);
            }}
            onChange={(e) => {
              setTextSearch(e.target.value);
            }}
            onBlur={() => {
              setTimeout(() => {
                setIsOpen(false);
                setFieldTouched(name);
              }, 200);
            }}
            disabled={disabled}
            maxLength={maxLengthFields.default}
          />
          <div className="absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer">
            {textSearch && isOpen ? (
              <iconsSvg.SearchIcon onClick={() => setIsOpen(false)} />
            ) : (
              icon
            )}
          </div>
        </div>
      </Dropdown>

      <p
        style={{ visibility: isError ? "visible" : "hidden" }}
        className={`invalid-text min-h-5 ${isError && "mb-5 mt-1"}`}
      >
        {errorMessage && errorMessage}
      </p>
    </>
  );
};

export default SelectField;
