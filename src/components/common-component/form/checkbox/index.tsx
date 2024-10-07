import { AdditionalFormikProps } from "@/interfaces/common";

interface Props extends AdditionalFormikProps {}

const CheckboxField = (props: Props) => {
  const { form, field } = props;
  const { name, value } = field || {};
  const { setFieldValue } = form;

  const onActive = () => {
    setFieldValue(name, true);
  };
  const onNotActive = () => {
    setFieldValue(name, false);
  };

  return !value ? <CheckboxDefault onClick={onActive} /> : <CheckboxActive onClick={onNotActive} />;
};

export default CheckboxField;

const CheckboxDefault = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4Z"
        fill="white"
        stroke="#A1A1A1"
      />
    </svg>
  );
};

const CheckboxActive = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z"
        fill="#F4B321"
      />
      <path d="M11.916 5.30762L6.53149 10.6921L4.08398 8.24463" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
