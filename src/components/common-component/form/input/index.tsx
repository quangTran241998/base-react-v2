import { Input, InputProps } from "antd";
import styled from "styled-components";

interface Props extends InputProps {}

const StyledInput = styled(Input)`
  width: 100%;
  padding: 24px 16px 4px 16px;
  border-radius: 8px;

  &:focus-within {
    border-color: #333;
    box-shadow: none;
  }

  &:hover {
    border-color: #333;
  }

  &:focus {
    border-color: #333;
    box-shadow: none;
  }

  .ant-input {
    color: #333;
  }

  ::placeholder {
    font-weight: 400;
  }
`;

const InputField = (props: Props) => {
  return <StyledInput {...props} />;
};

export default InputField;
