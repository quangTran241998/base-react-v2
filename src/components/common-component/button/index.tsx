import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  typeStyle?: "default" | "outline";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = (props: Props) => {
  const { children, startIcon, endIcon, typeStyle, ...rest } = props;

  const styleDefault = "bg-gradient-main";
  const styleOutline = "border border-yellow text-yellow bg-white";

  return (
    <button
      {...rest}
      className={`font-bold py-[12px] px-6 rounded-sm leading-textForm cursor-pointer min-w-fit text-nowrap flex items-center justify-center gap-x-1 ${
        typeStyle === "outline" ? styleOutline : styleDefault
      } `}
    >
      {startIcon && startIcon}
      <span>{children}</span>
      {endIcon && endIcon}
    </button>
  );
};

export default Button;
