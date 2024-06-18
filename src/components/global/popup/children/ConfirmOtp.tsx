import { CommonStyles } from "@/components/commonStyles";
import { useTranslation } from "react-i18next";

interface props {
  onClick: () => void;
}
const ConfirmOtp = (props: props) => {
  const { onClick } = props;
  const { t } = useTranslation();
  return (
    <div>
      <p className="py-3">{t("inverifyAccount")}</p>
      <CommonStyles.Button className=" w-full " onClick={onClick}>
        {t("Agree")}
      </CommonStyles.Button>
    </div>
  );
};
export default ConfirmOtp;
