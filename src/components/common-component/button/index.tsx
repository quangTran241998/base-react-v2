interface Props {
  children: string;
}

const Button = (props: Props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Button;
