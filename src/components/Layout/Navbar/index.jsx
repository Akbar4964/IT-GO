import React, { useState } from "react";
import { NavbarRow } from "./style";
import { ProjectTitle } from "../../../helpers/title";
import { NavLink } from "react-router-dom";
import { Select } from "antd";
import { NavbarFlagRussian, NavbarFlagUzbekistan } from "../../../assets/svg";
import { useTranslation } from "react-i18next";
import { routes } from "../../../constants/routes";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavbarMenuClose, NavbarMenuOpen } from "../../../assets/images";
import { MdCancel } from "react-icons/md";

function Navbar() {
  const { t, i18n } = useTranslation();

  const [isOpenSolution, setIsOpenSolution] = useState(false);

  const lng = "Navbar.NavbarMenu";

  const language = localStorage.getItem("i18nextLng");

  function handleOpen() {
    setIsOpenSolution(!isOpenSolution);
  }

  function handleChange(value) {
    const selectedValue = value;
    i18n.changeLanguage(selectedValue);
    setIsOpenSolution(false);
  }
  return (
    <>
      <NavbarRow>
        <div className="container">
          <div className="navbar-row">
            <div className="navbar-logo">
              <h1>{ProjectTitle}</h1>
            </div>
            <div className="open-navbar-menu">
              <li>
                <Select
                  className="navbar-select"
                  value={language}
                  onChange={handleChange}
                  placeholder="select"
                >
                  <Select.Option value="uz">
                    <img src={NavbarFlagUzbekistan} alt="" />
                  </Select.Option>
                  <Select.Option value="ru">
                    <img src={NavbarFlagRussian} alt="" />
                  </Select.Option>
                </Select>
              </li>
              {isOpenSolution ? (
                <img
                  className="img"
                  onClick={handleOpen}
                  src={NavbarMenuOpen}
                  alt=""
                />
              ) : (
                <img
                  className="img"
                  onClick={handleOpen}
                  src={NavbarMenuClose}
                  alt=""
                />
              )}
            </div>
            {isOpenSolution && (
              <ul className="navbar-menu-rwd">
                <div>
                  <li>
                    <NavLink to={routes.HOME}>{t(`${lng}.about`)}</NavLink>
                  </li>
                  <li>
                    <NavLink to={routes.HOME}>{t(`${lng}.services`)}</NavLink>
                  </li>
                  <li>
                    <NavLink to={routes.HOME}>{t(`${lng}.solutions`)}</NavLink>
                  </li>
                  <li>
                    <NavLink to={routes.HOME}>{t(`${lng}.support`)}</NavLink>
                  </li>
                  <li>
                    <NavLink to={routes.HOME}>{t(`${lng}.faq`)}</NavLink>
                  </li>
                  <li>
                    <NavLink to={routes.HOME}>{t(`${lng}.contact`)}</NavLink>
                  </li>
                </div>
                <div
                  className="cancel"
                  onClick={() => setIsOpenSolution(false)}
                >
                  <MdCancel size={33} />
                </div>
              </ul>
            )}

            <ul className="navbar-menu">
              <li>
                <NavLink to={routes.HOME}>{t(`${lng}.about`)}</NavLink>
              </li>
              <li>
                <NavLink to={routes.HOME}>{t(`${lng}.services`)}</NavLink>
              </li>
              <li onClick={handleOpen}>
                <NavLink to={routes.HOME}>
                  {t(`${lng}.solutions`)}
                  {isOpenSolution ? (
                    <div>
                      <IoIosArrowUp />
                      <ul className="solutions-menu">
                        <li>
                          <NavLink to={routes.HOME}>
                            {t(`${lng}.support`)}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={routes.HOME}>{t(`${lng}.faq`)}</NavLink>
                        </li>
                        <li>
                          <NavLink to={routes.HOME}>
                            {t(`${lng}.contact`)}
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <IoIosArrowDown />
                  )}
                </NavLink>
              </li>
              <li>
                <Select
                  className="navbar-select"
                  value={language}
                  onChange={handleChange}
                  placeholder="select"
                >
                  <Select.Option value="uz">
                    <img src={NavbarFlagUzbekistan} alt="" />
                  </Select.Option>
                  <Select.Option value="ru">
                    <img src={NavbarFlagRussian} alt="" />
                  </Select.Option>
                </Select>
              </li>
            </ul>
          </div>
        </div>
      </NavbarRow>
    </>
  );
}

export default Navbar;
