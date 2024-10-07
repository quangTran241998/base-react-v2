import { ListPaymentMethod } from "@/mocks";
import { CommonComponent } from "../..";
import { AdditionalFormikProps } from "@/interfaces/common";

interface Props extends AdditionalFormikProps {}

const RadioGroup = (props: Props) => {
  const { field, form } = props;
  const { name, value } = field || {};
  const { setFieldValue } = form;

  return (
    <div className="flex flex-col gap-y-2">
      {ListPaymentMethod.map((item) => {
        const isChecked = value === item.value;
        return (
          <div
            key={item.value}
            className={`flex items-center gap-x-3 p-3 border border-default rounded-sm cursor-pointer ${
              isChecked && "bg-[#FEF7E9] [&&]:border-[#CC8F14]"
            }`}
            onClick={() => {
              setFieldValue(name, item.value);
            }}
          >
            <CommonComponent.Radio checked={isChecked} />
            <item.icon />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
