import React from "react";
import { LastSectionRow } from "./style";
import { useTranslation } from "react-i18next";

function LastSection() {
  const { t } = useTranslation();
  return (
    <>
      <LastSectionRow>
        <div className="row">
          <div className="container">
            <h1>{t("LastSection.title")}</h1>
            <p>{t("LastSection.text")}</p>
          </div>
        </div>
      </LastSectionRow>
    </>
  );
}

export default LastSection;
