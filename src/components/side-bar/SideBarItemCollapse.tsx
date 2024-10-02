import { RouteType } from "@/interfaces/common";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iconsSvg } from "../icons-svg/index";

interface Props {
  item: RouteType;
}

const SidebarItemCollapse = (props: Props) => {
  const { item } = props;
  const { displayText, children, Icon, listPathActive } = item;

  const pathUrl = window.location.pathname;
  const pathDad = `/${pathUrl.split("/")[1]}`;

  const isActiveDad = listPathActive.includes(pathDad);

  const [isOpen, setIsOpen] = useState<boolean>(isActiveDad ?? false);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`sidebar-item header-collapse-sidebar flex justify-between items-center py-[10px] px-3 cursor-pointer hover:rounded-sm mb-1 rounded-sm ${
          isActiveDad && "bg-gradient-main"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`flex items-center gap-x-2 `}>
          <Icon color={isActiveDad ? "#333" : "white"} />
          <p className={`title-sidebar text-[14px] font-medium ${isActiveDad ? "text-[#333] [&&]:font-bold" : "text-white"}`}>{displayText}</p>
        </div>
        <iconsSvg.ChevronDown
          style={!isOpen ? { transform: "rotate(0deg)", transition: "all 0.5s" } : { transform: "rotate(180deg)", transition: "all 0.5s" }}
          color={isActiveDad ? "#333" : "white"}
        />
      </div>
      <div className="content" style={isOpen ? { ...openSearchExtend } : { ...closeSearchExtend }}>
        <div className=" list-disc my-1">
          {children?.map((item, index) => {
            const isActiveRouteChild = location.pathname === item.path;
            return (
              <div
                key={index}
                className={` child-sidebar-item ml-[24px] text-[14px] px-3 cursor-pointer py-[12px] flex items-center hover:bg-hover-nav-bar hover:rounded-sm hover:text-white mb-1 rounded-sm gap-x-2 ${
                  isActiveRouteChild && "bg-gradient-main"
                }`}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {<item.Icon color={isActiveRouteChild ? "#333" : "white"} />}
                <p className={`title-sidebar-child text-white font-medium ${isActiveRouteChild ? "text-[#333] [&&]:font-bold" : ""}`}>
                  {item.displayText}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SidebarItemCollapse;

const closeSearchExtend = {
  overflow: "hidden",
  maxHeight: "0",
  transition: "all 0.5s",
};

const openSearchExtend = {
  ...closeSearchExtend,
  maxHeight: "1000px",
};
