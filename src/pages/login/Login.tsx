import { CommonComponent } from "@/components/common-component";
import { BaseRoute } from "@/constants/baseRoute";
import { useAuth } from "@/providers/AuthenticationProvider";
import AuthService from "@/services/auth/Auth.service";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface InittialsValue {
  username: string;
  password: string;
}

const Login = () => {
  const { login, isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate(BaseRoute.Homepage);
    }
  }, [isLogged]);

  const onSubmit = async (values: InittialsValue) => {
    const res = await AuthService.login(values);
    login(res.data.data);
  };

  const initialsValue: InittialsValue = {
    username: "admin",
    password: "123456",
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik initialValues={initialsValue} onSubmit={onSubmit}>
        {() => {
          return (
            <Form>
              <div className="w-full md:w-[500px] bg-white shadow p-5 rounded-md">
                <h1 className="mb-5">Đăng nhập</h1>
                <div className="">
                  <Field
                    component={CommonComponent.InputField}
                    name={"username"}
                    label={"Username"}
                    placeholder={"Nhập username"}
                  />
                </div>
                <div className="">
                  <Field
                    component={CommonComponent.InputField}
                    name={"password"}
                    label={"Password"}
                    placeholder={"Nhập password"}
                  />
                </div>
                <div className="flex justify-center">
                  <CommonComponent.Button className="w-full">
                    Login
                  </CommonComponent.Button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
