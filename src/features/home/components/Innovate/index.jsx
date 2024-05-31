import React from "react";
import { InnovateRow } from "./style";
import { InnovateSupport } from "../../../../assets/images";
import { useTranslation } from "react-i18next";
import { GrTechnology } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { TbBusinessplan } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const LNG = "Innovate.InnovateContent";

function Innovate() {
  const { t } = useTranslation();
  return (
    <>
      <InnovateRow>
        <div className="container">
          <div className="innovate-row">
            <img src={InnovateSupport} alt="" />
            <div className="solutions">
              <h1 className="solutions-title">{t(`${LNG}.title`)}</h1>
              <p className="solutions-text">{t(`${LNG}.text`)}</p>
              <p className="solutions-name">
                <BiSupport color="#1f618d" size={33} />
                {t(`${LNG}.proactive`)}
              </p>
              <p className="solutions-name">
                <GrTechnology color="#1f618d" size={33} />
                {t(`${LNG}.technology`)}
              </p>
              <p className="solutions-name">
                <TbBusinessplan color="#1f618d" size={33} />
                {t(`${LNG}.tailored`)}
              </p>
              <NavLink>
                <Button className="solutions-btn">
                  {t(`${LNG}.infoButton`)}
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </InnovateRow>
    </>
  );
}

export default Innovate;
