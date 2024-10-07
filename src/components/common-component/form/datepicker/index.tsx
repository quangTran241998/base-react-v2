import { iconsSvg } from "@/components/icons-svg";
import { AdditionalFormikProps } from "@/interfaces/common";
import { DatePicker, DatePickerProps } from "antd";
import { getIn } from "formik";
import Label, { LabelProps } from "../label/Label";
import dayjs from "dayjs";
import { dateMoment, typeDate } from "@/helpers/date";
import styled from "styled-components";

interface Props extends Omit<AdditionalFormikProps & DatePickerProps & LabelProps, "datepicker"> {}

const DatepcikerStyle = styled(DatePicker)`
  width: 100%;
  padding: 0;
  padding-right: 16px;

  &:focus-within {
    border-color: #333;
    box-shadow: none;
  }

  &:hover {
    border-color: #333;
  }
  input {
    padding: 20px 16px 1px 16px !important;
    line-height: 25px !important;
  }
`;

const DatepickerField = (props: Props) => {
  const { placeholder, form, field, label, required } = props;

  const { name, value } = field || {};
  const { errors, touched, setFieldValue, setFieldTouched } = form;

  const isTouched = getIn(touched, name!);
  const errorMessage = getIn(errors, name!);
  const isError = isTouched && errorMessage;
  const dateYYYYMMDD = value ? dateMoment.convertDate(value, typeDate.ddmmyyyy, typeDate.yyyymmdd) : null;
  const convertValue = value ? dayjs(dateYYYYMMDD) : null;

  return (
    <>
      <div className="relative">
        <div className="absolute left-[16px] top-1 h-fit z-10">
          <Label label={label} required={required} />
        </div>
        <DatepcikerStyle
          value={convertValue}
          onChange={(dateDayjs, dateString) => {
            setFieldTouched(name);
            setFieldValue(name, dateString);
            console.log(dateDayjs, "dateDayjs");
          }}
          suffixIcon={<iconsSvg.DateIcon />}
          allowClear={{
            clearIcon: <iconsSvg.CloseTextInputIcon />,
          }}
          format={dateFormatList}
          placeholder={placeholder}
        />
      </div>
      <p style={{ visibility: isError ? "visible" : "hidden" }} className={`invalid-text min-h-5 ${isError && "mb-5 mt-1"}`}>
        {errorMessage && errorMessage}
      </p>
    </>
  );
};

export default DatepickerField;

export const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
