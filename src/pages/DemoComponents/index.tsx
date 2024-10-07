import { CommonComponent } from "@/components/common-component";
import { listOrderStatus, listUser } from "@/mocks";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { iconsSvg } from "../../components/icons-svg/index";
import { TableRowSelection } from "antd/es/table/interface";
import { SELECTION_ENUM } from "@/interfaces/common";
import { useState } from "react";
import { isEmpty } from "lodash";

interface InitialValues {
  name: string;
  fullname: string;
  paymentMethod: string;
  date: string;
  isConfirm: boolean;
}

const DemoComponents = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);

  const initialValues: InitialValues = {
    name: "",
    fullname: "",
    paymentMethod: "",
    date: "",
    isConfirm: false,
  };

  const onSubmit = () => {};

  const validation = yup.object().shape({
    name: yup.string().required("abc"),
    fullname: yup.string().required("Truong nay la bat buoc"),
  });

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    // handleAddParams({ isFilter: false });
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const onHandleCheckbox = (id: any) => {
    const isSelected = selectedRowKeys.includes(id);
    if (isSelected) {
      const filter = selectedRowKeys.filter((item: any) => item != id);
      setSelectedRowKeys(filter);
    } else {
      setSelectedRowKeys([...selectedRowKeys, id]);
    }
  };

  const renderSelection = () => {
    if (!isEmpty(selectedRowKeys) && selectedRowKeys.length === data?.length) {
      return SELECTION_ENUM.SELECTED_ALL;
    } else if (!isEmpty(selectedRowKeys)) {
      return SELECTION_ENUM.SELECTED;
    } else {
      return SELECTION_ENUM.NO_SELECT;
    }
  };

  const RenderTitleSelection = (props: { type: SELECTION_ENUM }) => {
    switch (props.type) {
      case SELECTION_ENUM.SELECTED:
        return <iconsSvg.CheckboxSelectedHeaderIcon onClick={() => setSelectedRowKeys([])} />;
      case SELECTION_ENUM.SELECTED_ALL:
        return <iconsSvg.CheckboxAllIcon onClick={() => setSelectedRowKeys([])} />;
      default:
        return (
          <iconsSvg.CheckboxIcon
            onClick={() => {
              const getAllIccid = data?.map((item) => item.id);
              setSelectedRowKeys(getAllIccid || []);
            }}
          />
        );
    }
  };

  const rowSelection: TableRowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    columnTitle: (
      <div className="flex justify-center pr-1">
        <RenderTitleSelection type={renderSelection()} />
      </div>
    ),

    renderCell: (checked: boolean, record) => {
      return (
        <div className="flex justify-center pr-1">
          {checked ? (
            <iconsSvg.CheckboxActiveIcon
              onClick={() => {
                onHandleCheckbox(record.id);
              }}
            />
          ) : (
            <iconsSvg.CheckboxIcon
              onClick={() => {
                onHandleCheckbox(record.id);
              }}
            />
          )}
        </div>
      );
    },
  };

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
                    <Field component={CommonComponent.DatepickerField} name={"date"} label={"Date"} required placeholder={"Chon ngay"} />
                    <Field component={CommonComponent.RadioGroup} name={"paymentMethod"} />
                    <div className="py-5">
                      <Field component={CommonComponent.CheckboxField} name={"isConfirm"} />
                    </div>
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
          <CommonComponent.SelectSearchTable onChangeParam={() => {}} placeholder="Select search table" options={listUser} />
          <CommonComponent.DatepickerSearch onChangeParam={() => {}} placeholder="Chon ngay" />
          <CommonComponent.DatepickerRangeSearch onChangeParam={() => {}} />
        </div>
        <div className="flex flex-col gap-y-4 w-fit mb-4">
          <div className="">
            <CommonComponent.Table
              columns={columns}
              current={1}
              data={data}
              page={1}
              pageSize={10}
              total={10}
              onChangePage={() => {}}
              onChangePageSize={() => {}}
              onClickRow={() => {}}
              classNameTable="table-list-order"
              isPagination={false}
            />
          </div>
          <div className="">
            <div className="">
              <CommonComponent.Table
                columns={columns2}
                data={data}
                page={1}
                pageSize={10}
                total={10}
                onChangePage={() => {}}
                onChangePageSize={() => {}}
                onClickRow={() => {}}
                selection
                rowSelection={rowSelection}
                rowKey="id"
                isPagination={false}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 w-fit mb-4">
          <h1>Trạng thái đơn hàng</h1>
          <CommonComponent.RenderOrderStatus status={0} />
          <CommonComponent.RenderOrderStatus status={1} />
          <CommonComponent.RenderOrderStatus status={2} />
          <CommonComponent.RenderOrderStatus status={3} />
          <CommonComponent.RenderOrderStatus status={4} />
          <CommonComponent.RenderOrderStatus status={5} />
          <h1>Trạng thái thanh toán</h1>
          <CommonComponent.RenderPayStatus status={0} />
          <CommonComponent.RenderPayStatus status={1} />
        </div>
      </div>
    </div>
  );
};

export default DemoComponents;

const columns: any = [
  {
    title: (
      <div className="">
        <div className="py-4 px-4 bg-header-table line-th">Ten</div>
        <div className="h-[53px] px-4 py-2 bg-white">
          <CommonComponent.InputSearchColTable onChangeParam={() => {}} placeholder={"Tim ten"} />
        </div>
      </div>
    ),
    dataIndex: "name",
    align: "left",
    width: 200,
  },
  {
    title: (
      <div className="">
        <div className="py-4 px-4 bg-header-table line-th">Age</div>
        <div className="h-[53px] px-4 py-2 bg-white"></div>
      </div>
    ),
    dataIndex: "age",
    align: "left",
    width: 100,
  },
  {
    title: (
      <div className="">
        <div className="py-4 px-4 bg-header-table line-th">Email</div>
        <div className="h-[53px] px-4 py-2 bg-white"></div>
      </div>
    ),
    dataIndex: "email",
    align: "left",
    width: 200,
  },
  {
    title: (
      <div className="">
        <div className="py-4 px-4 bg-header-table line-th">Ngay tao</div>
        <div className="h-[53px] px-4 py-2 bg-white">
          <CommonComponent.DatepickerSearch onChangeParam={() => {}} placeholder="Chon ngay" />
        </div>
      </div>
    ),
    dataIndex: "createTime",
    align: "left",
    width: 200,
  },
  {
    title: (
      <div className="">
        <div className="py-4 px-4 bg-header-table line-th">Trang thai</div>
        <div className="h-[53px] px-4 py-2 bg-white">
          <CommonComponent.SelectSearchTable onChangeParam={() => {}} placeholder={"Trang thai"} options={listOrderStatus} />
        </div>
      </div>
    ),
    dataIndex: "status",
    align: "left",
    width: 200,
  },
];

const columns2: any = [
  {
    title: "Ten",
    dataIndex: "name",
    align: "left",
    width: 200,
  },
  {
    title: "Age",
    dataIndex: "age",
    align: "left",
    width: 100,
  },
  {
    title: "Email",
    dataIndex: "email",
    align: "left",
    width: 200,
  },
  {
    title: "Create time",
    dataIndex: "createTime",
    align: "left",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    align: "left",
    width: 200,
  },
];

const data = [
  {
    id: 1,
    name: "Quang",
    age: 26,
    email: "quangtran@gmail.com",
    createTime: "2024-10-04 10:25",
    status: "active",
  },
  {
    id: 2,
    name: "Quang",
    age: 26,
    email: "quangtran@gmail.com",
    createTime: "2024-10-04 10:25",
    status: "active",
  },
  {
    id: 3,
    name: "Quang",
    age: 26,
    email: "quangtran@gmail.com",
    createTime: "2024-10-04 10:25",
    status: "active",
  },
  {
    id: 4,
    name: "Quang",
    age: 26,
    email: "quangtran@gmail.com",
    createTime: "2024-10-04 10:25",
    status: "active",
  },
  {
    id: 5,
    name: "Quang",
    age: 26,
    email: "quangtran@gmail.com",
    createTime: "2024-10-04 10:25",
    status: "active",
  },
];
