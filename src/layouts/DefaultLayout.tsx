import Sidebar from "@/components/side-bar/Slidebar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <div className="component:DefaultLayout">
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex justify-end w-screen">
          <div className="pb-5 h-screen w-[calc(100%-260px)] overflow-auto bg-default">
            <div className="px-10 pt-5 pb-9 h-[calc(100%-40px)]">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
