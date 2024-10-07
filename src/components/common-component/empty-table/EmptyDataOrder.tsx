import { useTranslation } from "react-i18next";
import { CommonComponent } from "..";
import { iconsSvg } from "../../icons-svg/index";
import { useNavigate } from "react-router-dom";
import { BaseRoute } from "@/constants/baseRoute";

const EmptyDataOrder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-[300px] mx-auto py-20">
      <iconsSvg.EmptyTableIcon />
      <h4 className="mt-3">{t("emptyDataTable")}</h4>
      <p className="my-3 text-center">{t("visitStore")}</p>
      <div className="w-full">
        <CommonComponent.Button onClick={() => navigate(BaseRoute.Nations)} startIcon={<iconsSvg.AddIcon color="#333" />} style={{ width: "100%" }}>
          {t("order")}
        </CommonComponent.Button>
      </div>
    </div>
  );
};

export default EmptyDataOrder;
