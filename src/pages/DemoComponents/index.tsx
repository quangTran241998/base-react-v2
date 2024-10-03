import { CommonComponent } from "@/components/common-component";
import { listUser } from "@/mocks";
import { Field, Form, Formik } from "formik";
import { iconsSvg } from "../../components/icons-svg/index";
import * as yup from "yup";

interface InitialValues {
  name: string;
  fullname: string;
}

const DemoComponents = () => {
  const initialValues: InitialValues = {
    name: "",
    fullname: "",
  };

  const onSubmit = () => {};

  const validation = yup.object().shape({
    name: yup.string().required("abc"),
    fullname: yup.string().required("Truong nay la bat buoc"),
  });

  return (
    <div className="px-[100px] py-[100px]">
      <h1 className="mb-10">Demo component</h1>
      <div className="mt-10 ">
        <div className="flex flex-col gap-y-4 w-fit mb-4">
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <h5>h5</h5>
          <h6>h6</h6>
        </div>
        <div className="flex flex-col gap-y-4 w-fit mb-4">
          <h1>Button</h1>
          <CommonComponent.Button typeStyle={"default"}>Button default</CommonComponent.Button>
          <CommonComponent.Button typeStyle={"outline"} startIcon={<iconsSvg.DownloadIcon color="#CC8F14" />}>
            Button ouline
          </CommonComponent.Button>
        </div>
        <div className=" w-fit mb-4">
          <h1>Form</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validation}>
            {() => {
              return (
                <Form>
                  <div className="">
                    <Field component={CommonComponent.InputField} name={"name"} label={"Ten"} required placeholder={"Input form"} />
                    <Field
                      component={CommonComponent.SelectField}
                      name={"fullname"}
                      label={"Fullname"}
                      required
                      placeholder={"Select form"}
                      options={listUser}
                      icon={<iconsSvg.ChevronDown />}
                    />
                    <Field
                      component={CommonComponent.SelectField}
                      name={"fullname"}
                      required
                      placeholder={"Select form"}
                      options={listUser}
                      icon={<iconsSvg.ChevronDown />}
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="flex flex-col gap-y-4 w-fit mb-4">
          <h1>Search</h1>
          <CommonComponent.InputSearch label="Ten" onChangeParam={() => {}} placeholder="Input search" />
          <CommonComponent.InputSearchColTable onChangeParam={() => {}} placeholder="Input search table" />
          <CommonComponent.SelectSearch label={"Ten"} onChangeParam={() => {}} placeholder="Select search" options={listUser} />
          <CommonComponent.SelectSearchTable label={"Ten"} onChangeParam={() => {}} placeholder="Select search table" options={listUser} />
          <CommonComponent.DatepickerRangeSearch onChangeParam={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default DemoComponents;
