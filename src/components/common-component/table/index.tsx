import "@/styles/andt/table.css";
import { Table as TableAndt, TableProps } from "antd";
import { ColumnsType } from "antd/es/table";
import { isEmpty } from "lodash";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { TableRowSelection } from "antd/es/table/interface";
import { PropsPagiantion } from "../pagination";
import { CommonComponent } from "@/components/common-component";

interface Props extends Omit<TableProps & PropsPagiantion, ""> {
  columns: ColumnsType<any>;
  data: any;
  onChangePage: (page: number) => void;
  onChangePageSize: (page: number, size: number) => void;
  loading?: boolean;
  onClickRow: (row: any) => void;
  selection?: boolean;
  isPagination?: boolean;
  renderEmpty?: ReactNode;
  rowKey?: string;
  classNameTable?: string;
  rowSelection?: TableRowSelection;
}

const Table = (props: Props) => {
  const {
    columns,
    data,
    total,
    pageSize,
    page,
    onChangePage,
    onChangePageSize,
    loading = false,
    onClickRow,
    selection = false,
    isPagination = true,
    renderEmpty,
    rowKey,
    classNameTable,
    rowSelection,
    current,
    ...params
  } = props;

  const { t } = useTranslation();

  const fromData = page * pageSize + 1;
  const toData = data?.length === pageSize ? pageSize * (page + 1) : total;

  const convertColumns: ColumnsType<any> = [
    // {
    //   title: "STT",
    //   dataIndex: "stt",
    //   fixed: "left",
    //   align: "center",
    //   width: 80,
    //   render: (_, __, i) => {
    //     if (page !== 0) {
    //       return page * pageSize + i + 1;
    //     } else {
    //       return i + 1;
    //     }
    //   },
    // },
    ...columns,
  ];
  return (
    <div className="">
      <TableAndt
        className={`${classNameTable}`}
        loading={loading}
        columns={convertColumns}
        dataSource={data}
        locale={{ emptyText: renderEmpty ? renderEmpty : <CommonComponent.EmptyTable /> }}
        pagination={false}
        scroll={{ x: 1500 }}
        rowKey={rowKey}
        //@ts-ignore
        rowSelection={selection ? rowSelection : false}
        onRow={(record) => {
          return {
            onClick: () => {
              onClickRow(record);
            },
          };
        }}
        style={{
          borderRadius: "12px",
          overflow: "auto",
          border: "1px solid #ddd",
        }}
        {...params}
      />
      {isPagination && !isEmpty(data) && (
        <div className="fixed bottom-0 w-[calc(100vw-260px)] bg-white right-0 py-4 px-10 border-t border-[#F1F1F1] z-10">
          <div className="w-full flex justify-between">
            <div className="">
              {t("showOrder")} {fromData}-{toData} {t("in")} {total} {t("result")}
            </div>
            <div className="">
              <CommonComponent.Pagination
                showSizeChanger
                total={total}
                pageSize={pageSize}
                page={page}
                onChange={onChangePage}
                onShowSizeChange={onChangePageSize}
                current={current}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
