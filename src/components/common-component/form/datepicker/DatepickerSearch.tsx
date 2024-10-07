import { iconsSvg } from "@/components/icons-svg";
import { DatePicker } from "antd";
import { dateFormatList } from "./index";
import styled from "styled-components";

interface Props {
  onChangeParam: (value: string) => void;
  placeholder: string;
}

const DatepcikerStyle = styled(DatePicker)`
  width: 100%;
  padding: 6px 8px;

  &:focus-within {
    border-color: #333;
    box-shadow: none;
  }

  &:hover {
    border-color: #333;
  }
  input {
  }
`;

const DatepickerSearch = (props: Props) => {
  const { onChangeParam, placeholder } = props;

  return (
    <DatepcikerStyle
      onChange={(_dateDayjs, dateString) => onChangeParam(dateString as string)}
      suffixIcon={<iconsSvg.DateIcon />}
      allowClear={{
        clearIcon: <iconsSvg.CloseTextInputIcon />,
      }}
      format={dateFormatList}
      placeholder={placeholder}
    />
  );
};

export default DatepickerSearch;
