interface Props {
  checked: boolean;
  disabled?: boolean;
}

const Radio = (props: Props) => {
  const { checked, disabled } = props;
  //   const [isActive, setIsActive] = useState<boolean>(false);

  const onTonggle = () => {
    // setIsActive(!isActive);
  };
  return checked ? (
    <RadioActive onClick={onTonggle} disabled={props.disabled ?? false} />
  ) : (
    <RadioDefault onClick={onTonggle} disabled={disabled ?? false} />
  );
};

export default Radio;

const RadioDefault = (
  props: React.SVGProps<SVGSVGElement> & { disabled: boolean }
) => {
  const { disabled } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <circle
        cx="8"
        cy="8"
        r="7"
        fill="white"
        stroke={disabled ? "#EEEFF1" : "#7E8592"}
      />
    </svg>
  );
};

const RadioActive = (
  props: React.SVGProps<SVGSVGElement> & { disabled: boolean }
) => {
  const { disabled } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <circle
        cx="8"
        cy="8"
        r="7.5"
        fill="white"
        stroke={disabled ? "#EEEFF1" : "#FFAA00"}
      />
      <circle
        cx="8"
        cy="8"
        r="3.5"
        fill={disabled ? "#EEEFF1" : "#FFAA00"}
        stroke={disabled ? "#EEEFF1" : "#FFAA00"}
      />
    </svg>
  );
};
