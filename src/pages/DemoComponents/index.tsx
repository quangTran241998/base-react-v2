import InputField from "@/components/common-component/form/input";
import SelectField from "@/components/common-component/form/select";
import { gender } from "@/mocks";
import { Button, Form } from "antd";

const DemoComponents = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values, "values");
  };

  return (
    <div className="px-[100px] py-[100px]">
      <h1 className="mb-10">Demo component</h1>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label={"123"} name="username" rules={[{ required: true, message: "Please input your username!" }]} labelAlign={"right"}>
          <InputField placeholder="Nhap ten" />
        </Form.Item>
        <Form.Item label={"123"} name="gender" rules={[{ required: true, message: "Please input your gender!" }]}>
          <SelectField options={gender} placeholder={"Nhap gioi tinh"} />
        </Form.Item>
        <Button htmlType={"submit"}>submit</Button>
      </Form>
    </div>
  );
};

export default DemoComponents;
