const CircleMinusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { stroke, ...newProps } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" {...newProps}>
      <path
        stroke={stroke ? stroke : `#DDDDDD`}
        d="M12 18H24M33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CircleMinusIcon;
