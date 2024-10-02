import { RouteType } from "@/interfaces/common";
import { useNavigate } from "react-router-dom";

type Props = {
  item: RouteType;
};

const SidebarItem = (props: Props) => {
  const { Icon, displayText, path, listPathActive } = props.item;
  const navigate = useNavigate();
  const pathUrl = window.location.pathname;
  const pathCurrent = `/${pathUrl.split("/")[1]}`;
  const isActive = listPathActive.includes(pathCurrent);

  return (
    <div
      onClick={() => navigate(path ?? "")}
      className={`flex items-center p-3 cursor-pointer rounded-sm hover:bg-hover-nav-bar mb-1 ${isActive && "bg-gradient-main"}`}
      // style={{
      //   background: path === pathUrl ? "red" : "",
      // }}
    >
      {<Icon color={isActive ? "#333" : "white"} />}
      <p className={`ml-2 font-medium text-white text-[14px] ${isActive && "[&&]:text-[#333] [&&]:font-bold"}`}>{displayText}</p>
    </div>
  );
};

export default SidebarItem;
