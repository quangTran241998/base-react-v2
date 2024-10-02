import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Login = ({ children }: Props) => {
  return (
    <div>
      login layout
      <div>{children}</div>
    </div>
  );
};
export default Login;
