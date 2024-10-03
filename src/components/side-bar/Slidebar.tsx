import { BaseRoute } from "@/constants/baseRoute";
import { RouteType } from "@/interfaces/common";
import { PERMISSION_ALL } from "@/interfaces/enum";
import { useAuth } from "@/providers/AuthenticationProvider";
import { useTranslation } from "react-i18next";
import { iconsSvg } from "../icons-svg/index";
import SidebarItem from "./SideBarItem";
import SidebarItemCollapse from "./SideBarItemCollapse";

const Sidebar = () => {
  const { user, logout } = useAuth();

  const { t } = useTranslation();

  const appRoutes: RouteType[] = [
    {
      path: BaseRoute.SalesManagement,
      displayText: "Quản lý bán hàng",
      Icon: iconsSvg.SalesManagementIcon,
      isChild: true,
      roles: PERMISSION_ALL,
      listPathActive: [BaseRoute.SalesManagement],
      children: [
        {
          displayText: "Tổng quan",
          path: BaseRoute.OverviewSalesManagement,
          roles: PERMISSION_ALL,
          Icon: iconsSvg.OverviewIcon,
        },
        {
          displayText: "Bán buôn",
          path: BaseRoute.Wholesale,
          roles: PERMISSION_ALL,
          Icon: iconsSvg.WholesaleIcon,
        },
        {
          displayText: "Bán lẻ",
          path: BaseRoute.Retail,
          roles: PERMISSION_ALL,
          Icon: iconsSvg.RetailIcon,
        },
      ],
    },
    {
      path: BaseRoute.DealerManagement,
      displayText: "Quản lý đại lý",
      Icon: iconsSvg.DealerManagementIcon,
      isChild: false,
      roles: PERMISSION_ALL,
      listPathActive: [BaseRoute.DealerManagement],
    },
    {
      path: BaseRoute.RepoManagement,
      displayText: "Quản lý kho",
      Icon: iconsSvg.RepoManagementIcon,
      isChild: false,
      roles: PERMISSION_ALL,
      listPathActive: [BaseRoute.RepoManagement],
    },
    {
      path: BaseRoute.InputOutputManagement,
      displayText: "Quản lý đầu ra đầu vào",
      Icon: iconsSvg.InputOutputManagementIcon,
      isChild: false,
      roles: PERMISSION_ALL,
      listPathActive: [BaseRoute.InputOutputManagement],
    },
  ];

  return (
    <div
      className=""
      style={{
        paddingTop: "30px",
        minWidth: "260px",
        maxWidth: "260px",
        background: "white",
        height: `100vh`,
        position: "fixed",
        backgroundColor: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: "40px",
        top: 0,
        zIndex: 1000,
        left: 0,
        margin: 0,
      }}
    >
      <div className="w-full">
        <div className="p-[22px]">
          <iconsSvg.LogoSkyfi />
        </div>
        <div className="px-5">
          {appRoutes.map((route: RouteType, index) => {
            return !route.isChild ? <SidebarItem key={index} item={route}></SidebarItem> : <SidebarItemCollapse key={index} item={route} />;
          })}
        </div>
      </div>
      <div className=" px-5">
        <div className="flex items-center px-3 py-3 gap-x-2 text-white cursor-pointer" onClick={logout}>
          <iconsSvg.LogoutIcon />
          <p>{"Đăng xuất"}</p>
        </div>
        <div
          className=" flex justify-between items-center border border-[#5C5C5C] rounded-sm px-3 py-3 mt-4 cursor-pointer"
          onClick={() => {
            // navigate(BaseRoute.SettingAccount);
          }}
        >
          <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <iconsSvg.AvatarIcon />
            </div>
            <div className="">
              <h3 className="text-white">{user?.username}</h3>
              <p className=" text-[#A1A1A1]">{t("agentLevel")} 1</p>
            </div>
          </div>
          <div className="">
            <iconsSvg.SettingIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
