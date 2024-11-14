import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="px-3 max-w-[1320px] mx-auto">{children}</div>;
};

export default Container;
