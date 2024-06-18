import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { device } from "@/consts/common";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Login = ({ children }: Props) => {
  const { isMobile } = device();
  return (
    <div>
      <Header />

      <div className={`flex   sm:mt-[60px] sm:mb-[75px] ${isMobile ? "h-full   " : " justify-center    items-center"}    `}>
        <div
          style={{
            boxShadow: isMobile ? "" : "0px 3px 8px 0px rgba(0, 0, 0, 0.10)",
            background: "linear-gradient(153deg, #FDF6F4 -7.76%, #EEF6FE 64.5%, #F5FFF9 109.16%)",
          }}
          className={` ${isMobile ? "w-full px-4 pt-5 " : " w-[540px]  rounded-2xl p-10"} max-sm:pt-[60px] max-sm:pb-[75px]   `}
        >
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Login;
