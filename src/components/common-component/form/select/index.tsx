import { Select, SelectProps } from "antd";
import styled from "styled-components";

interface Props extends SelectProps {}

const StyledSelect = styled(Select)`
  width: 100%;
  height: 52px !important;

  .ant-select-selector {
    height: 52px !important;
    padding-left: 16px !important;
    span {
      padding-top: 16px !important;
    }
  }

  &:hover {
    .ant-select-selector {
      border-color: #333 !important;
    }
  }

  &:focus-within {
    .ant-select-selector {
      box-shadow: none !important;
      border-color: #333 !important;
    }
  }
`;

const SelectField = (props: Props) => {
  return <StyledSelect {...props} />;
};

export default SelectField;
