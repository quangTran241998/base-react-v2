import { listNav } from "@/mocks";
import { useNavigate } from "react-router-dom";
import { CommonComponent } from "../common-component";

const Header = () => {
  const navigate = useNavigate();
  const isActive = (path: string) => {
    return path === location.pathname;
  };
  return (
    <div className="header bg-white sticky py-4">
      <CommonComponent.Container>
        <div className="flex justify-between items-center">
          <div className="logo">logo</div>
          <div className="">
            <div className="">
              <ul className="flex items-center gap-x-4">
                {listNav.map((item) => {
                  return (
                    <li
                      key={item.title}
                      className={`py-2 px-2 uppercase font-bold hover:text-[#2dbe60] cursor-pointer`}
                      onClick={() => navigate(item.link)}
                      style={{
                        color: isActive(item.link) ? "#2dbe60" : "#4c4d4d",
                      }}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </CommonComponent.Container>
    </div>
  );
};

export default Header;
