import { BaseRoute } from "@/constants/baseRoute";
import { RouteType } from "@/interfaces/common";
import { useAuth } from "@/providers/AuthenticationProvider";
import { useTranslation } from "react-i18next";
import { iconsSvg } from "../icons-svg/index";
import SidebarItem from "./SideBarItem";
import SidebarItemCollapse from "./SideBarItemCollapse";
import { filterPermissions, isCheckRole } from "@/helpers/common";
import { PERMISSION_ENUM } from "@/interfaces/enum";
import { indexElement } from "@/constants/common";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const roleUser = user.roleId;
  const { t } = useTranslation();

  const appRoutes: RouteType[] = [
    {
      path: BaseRoute.Homepage,
      displayText: "Home",
      Icon: iconsSvg.DealerManagementIcon,
      isChildren: false,
      isPermisson: isCheckRole([PERMISSION_ENUM.ADMIN], roleUser),
      listPathActive: [BaseRoute.Homepage],
    },
    {
      path: BaseRoute.About,
      displayText: "About",
      Icon: iconsSvg.DealerManagementIcon,
      isChildren: false,
      isPermisson: isCheckRole([PERMISSION_ENUM.ADMIN], roleUser),
      listPathActive: [BaseRoute.About],
    },
    {
      path: BaseRoute.Cms,
      displayText: "Cms",
      Icon: iconsSvg.SalesManagementIcon,
      isChildren: true,
      listPathActive: [BaseRoute.Cms],
      isPermisson: isCheckRole([PERMISSION_ENUM.ADMIN], roleUser),
      children: [
        {
          displayText: "Articles",
          path: BaseRoute.Articles,
          Icon: iconsSvg.WholesaleIcon,
          isPermisson: isCheckRole([PERMISSION_ENUM.ADMIN], roleUser),
        },
      ],
    },
  ];

  const data = filterPermissions(appRoutes);

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
        zIndex: indexElement.sidebar,
        left: 0,
        margin: 0,
      }}
    >
      <div className="w-full">
        <div className="p-[22px]">
          <iconsSvg.LogoSkyfi />
        </div>
        <div className="px-5">
          {data?.map((route: RouteType, index: number) => {
            return !route.isChildren ? <SidebarItem key={index} item={route}></SidebarItem> : <SidebarItemCollapse key={index} item={route} />;
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
              <h6 className="text-white">{user?.username}</h6>
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
