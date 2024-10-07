import { useTranslation } from "react-i18next";
import { iconsSvg } from "../../icons-svg/index";

const EmptyTable = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center mx-auto py-10">
      <iconsSvg.EmptyTableIcon />
      <h4 className="mt-3">{t("emptyDataTable")}</h4>
    </div>
  );
};

export default EmptyTable;
