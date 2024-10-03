export interface LabelProps {
  label?: string | React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}

const Label = (props: LabelProps) => {
  const { label, required, htmlFor } = props;
  return (
    <label
      htmlFor={htmlFor}
      style={{
        fontWeight: 500,
        fontSize: "12px",
        cursor: "pointer",
        display: "flex",
      }}
    >
      {label} {required ? <span className="text-red-500">*</span> : ""}
    </label>
  );
};

export default Label;
