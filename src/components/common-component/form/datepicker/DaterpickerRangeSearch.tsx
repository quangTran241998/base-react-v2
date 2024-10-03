import { iconsSvg } from "@/components/icons-svg";
import { DatePicker } from "antd";
import styled from "styled-components";

interface Props {
  onChangeParam: (dateRange: string[]) => void;
}

const { RangePicker } = DatePicker;

const StyledDatePicker = styled(RangePicker)`
  && {
    width: 100%;
    box-shadow: none;
    &:hover {
      border-color: #ff831e;
      box-shadow: none;
    }
  }
`;

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

const DatepickerRangeSearch = ({ onChangeParam }: Props) => (
  <StyledDatePicker
    style={{ padding: "12px 8px", width: "100%" }}
    suffixIcon={<iconsSvg.DateIcon />}
    allowClear={{
      clearIcon: <iconsSvg.CloseTextInputIcon />,
    }}
    onChange={(_value, dateString: string[]) => onChangeParam(dateString)}
    format={dateFormatList}
  />
);

export default DatepickerRangeSearch;
