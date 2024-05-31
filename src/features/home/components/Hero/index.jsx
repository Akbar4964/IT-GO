import React from "react";
import { HeroRow } from "./style";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { routes } from "../../../../constants/routes";

function Hero() {
  const { t } = useTranslation();

  const lng = "Hero.HeroContent";
  return (
    <>
      <HeroRow>
        <div className="container">
          <div className="hero-row">
            <h1>{t(`${lng}.title`)}</h1>
            <div className="hero-info">
              <p>{t(`${lng}.text`)}</p>
              <NavLink to={routes.HOME}>
                <Button>{t(`${lng}.button`)}</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </HeroRow>
    </>
  );
}

export default Hero;
