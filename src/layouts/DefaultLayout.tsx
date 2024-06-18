// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <div className="component:DefaultLayout">
      {/* <Header /> */}
      <div className="">{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
