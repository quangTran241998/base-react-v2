const CirclePlusIcon = (props: Omit<React.SVGProps<SVGSVGElement> & { color?: string }, "">) => {
  const { color } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 0.5C7.88731 0.5 0.5 7.88731 0.5 17C0.5 26.1126 7.88731 33.5 17 33.5C26.1126 33.5 33.5 26.1126 33.5 17C33.5 7.88731 26.1126 0.5 17 0.5ZM17 9.5C17.8284 9.5 18.5 10.1716 18.5 11V15.5H23C23.8284 15.5 24.5 16.1715 24.5 17C24.5 17.8284 23.8284 18.5 23 18.5H18.5V23C18.5 23.8284 17.8284 24.5 17 24.5C16.1715 24.5 15.5 23.8284 15.5 23V18.5H11C10.1716 18.5 9.5 17.8284 9.5 17C9.5 16.1715 10.1716 15.5 11 15.5H15.5V11C15.5 10.1716 16.1715 9.5 17 9.5Z"
        fill={color ? color : "#F4B321"}
      />
    </svg>
  );
};

export default CirclePlusIcon;
