import { AdditionalFormikProps } from "@/interfaces/common";
import { getIn } from "formik";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { iconsSvg } from "../../../icons-svg/index";
import Label, { LabelProps } from "../label/Label";

interface Props extends Omit<AdditionalFormikProps & LabelProps & HTMLInputElement, "input"> {
  isErrorCustom?: boolean;
  textErrorCustom?: string;
  setIsError?: (value: boolean) => void;
  CustomHeight?: string;
  isShowError: boolean;
  isDisplayTooltip: boolean;
}

const InputField = (props: Props) => {
  const {
    label,
    required,
    form,
    field,
    placeholder,
    isErrorCustom,
    textErrorCustom,
    setIsError,
    maxLength,
    type,
    isShowError = true,
    CustomHeight,
    disabled,
  } = props;

  const [isShowCloseText, setIsShowCloseText] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [typeInput, setTypeInput] = useState<string>(type || "text");

  const element = useRef<HTMLInputElement>(null);

  const { name, value } = field || {};
  const { errors, touched, setFieldValue, setFieldTouched } = form;

  const isTouched = getIn(touched, name!);
  const errorMessage = isErrorCustom ? textErrorCustom : getIn(errors, name!);
  const isError = isErrorCustom ? isErrorCustom : isTouched && errorMessage;

  useEffect(() => {
    value ? setIsShowCloseText(true) : setIsShowCloseText(false);
  }, [value]);

  const [errorLength, setErrorLength] = useState(false);

  const onHandlePassword = () => {
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
    setIsShowPassword(!isShowPassword);
  };

  const { t } = useTranslation();

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
          type={typeInput}
          className={`input`}
          value={value}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length >= (maxLength || 200)) {
              setErrorLength(true);
            } else {
              setErrorLength(false);
            }

            setFieldValue(name, value);
            setIsError && setIsError(false);
          }}
          maxLength={maxLength ? maxLength : 200}
          onBlur={() => {
            setFieldTouched(name, true);
          }}
          placeholder={placeholder}
          style={{ paddingTop: CustomHeight ? CustomHeight : "" }}
          disabled={disabled}
        />
        {type === "password" ? (
          <div
            className="absolute right-4 top-[50%] cursor-pointer"
            style={{
              transform: "translate(0,-50%)",
            }}
          >
            {isShowPassword ? <iconsSvg.HideEyeIcon onClick={onHandlePassword} /> : <iconsSvg.EyeIcon onClick={onHandlePassword} />}
          </div>
        ) : (
          <div
            className="absolute right-4 top-[50%] cursor-pointer"
            style={{
              transform: "translate(0,-50%)",
              display: isShowCloseText && !disabled ? "block" : "none",
            }}
            onClick={() => {
              setFieldValue(name, "");
              element.current?.focus();
            }}
          >
            <iconsSvg.CloseTextInputIcon />
          </div>
        )}
      </div>
      {isShowError && (
        <p style={{ visibility: isError || errorLength ? "visible" : "hidden" }} className={`invalid-text min-h-5 ${isError && "mb-5 mt-1"}`}>
          {errorMessage && !errorLength && errorMessage}
          {errorLength && `${label} ${t("inputErrorLength")}`}
        </p>
      )}
    </>
  );
};

export default InputField;
