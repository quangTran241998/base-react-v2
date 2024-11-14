import { ReactNode } from "react";
import { CommonComponent } from "../..";

interface Props {
  children: ReactNode;
  isBg?: boolean;
}

const SectionCotainer = ({ children, isBg }: Props) => {
  return (
    <div className={`py-[100px] ${isBg && "bg-container"}`} style={{}}>
      <CommonComponent.Container>{children}</CommonComponent.Container>
    </div>
  );
};

export default SectionCotainer;
