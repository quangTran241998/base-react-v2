import { listNav, listSocial } from "@/mocks";
import { CommonComponent } from "../common-component";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="py-[66px]">
      <CommonComponent.Container>
        <div className="flex justify-between">
          <div className="">
            <ul className="flex items-center gap-x-4">
              {listNav.map((item) => {
                return (
                  <li
                    key={item.title}
                    className={`py-2 px-2 text-[#252b33] hover:text-[#2dbe60] cursor-pointer`}
                    onClick={() => navigate(item.link)}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <ul className="flex ">
              {listSocial.map((item, index) => {
                return (
                  <li key={index} className="px-1 py-1">
                    <item.icon />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="h-[1px] bg-[#e2e8ea]"></div>
      </CommonComponent.Container>
    </div>
  );
};

export default Footer;
