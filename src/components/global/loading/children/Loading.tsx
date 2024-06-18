import { useEffect } from "react";

export interface ILoadingGlobal {
  visible?: boolean;
}

const LoadingPage = (props: ILoadingGlobal) => {
  const { visible } = props;
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  if (!visible) return <div />;
  return (
    <>
      <div className="overlay">loading...</div>
    </>
  );
};
export default LoadingPage;
