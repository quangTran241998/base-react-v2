interface Props {
  checked: boolean;
}

const Radio = (props: Props) => {
  const { checked } = props;
  //   const [isActive, setIsActive] = useState<boolean>(false);

  const onTonggle = () => {
    // setIsActive(!isActive);
  };
  return checked ? <RadioActive onClick={onTonggle} /> : <RadioDefault onClick={onTonggle} />;
};

export default Radio;

const RadioDefault = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <circle cx="8" cy="8" r="7.5" fill="white" stroke="#7E8592" />
    </svg>
  );
};

const RadioActive = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <circle cx="8" cy="8" r="7.5" fill="white" stroke="#F4B321" />
      <circle cx="8" cy="8" r="3.5" fill="#F4B321" stroke="#F4B321" />
    </svg>
  );
};
