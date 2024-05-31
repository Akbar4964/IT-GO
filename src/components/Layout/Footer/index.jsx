import React from "react";
import { FooterRow } from "./style";
import { ProjectTitle } from "../../../helpers/title";
import { NavLink } from "react-router-dom";
import { routes } from "../../../constants/routes";
import { useTranslation } from "react-i18next";
import { SiW3Schools, SiCodepen } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import {
  FaLinkedin,
  FaInfoCircle,
  FaGithub,
  FaStackOverflow,
  FaQuestionCircle,
  FaTelegram,
  FaInstagramSquare,
} from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineContactSupport, MdContacts } from "react-icons/md";
import { Button, Form, Input } from "antd";

function Footer() {
  const { t } = useTranslation();

  const lng = "Footer.FooterMenu";

  const placeholderLang = "Forms";

  return (
    <>
      <FooterRow>
        <div className="container">
          <div className="footer-row">
            <div className="footer-logo">
              <h2>{ProjectTitle}</h2>
            </div>
            <ul className="footer-site-map">
              <h3>{t(`${lng}.about`)}</h3>
              <li>
                <NavLink to={routes.HOME}>
                  <FaInfoCircle />
                  {t(`${lng}.about`)}
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.HOME}>
                  <RiCustomerService2Fill />
                  {t(`${lng}.services`)}
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.HOME}>
                  <AiOutlineSolution />
                  {t(`${lng}.solutions`)}
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.HOME}>
                  <MdOutlineContactSupport />
                  {t(`${lng}.support`)}
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.HOME}>
                  <FaQuestionCircle />
                  {t(`${lng}.faq`)}
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.HOME}>
                  <MdContacts />
                  {t(`${lng}.contact`)}
                </NavLink>
              </li>
            </ul>
            <ul className="footer-site-map">
              <h3>{t(`${lng}.partners`)}</h3>
              <li>
                <NavLink to={routes.STACKOVERFLOW}>
                  <FaStackOverflow />
                  Stack OverFlow
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.W3SCHOOLS}>
                  <SiW3Schools />
                  W3Schools
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.CODEPEN}>
                  <SiCodepen />
                  Codepen
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.GITHUB}>
                  <FaGithub />
                  GitHub
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.MEDIUM}>
                  <BsMedium />
                  Medium
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.LINKEDIN}>
                  <FaLinkedin />
                  LinkedIn
                </NavLink>
              </li>
            </ul>
            <div className="footer-subscribe">
              <h3>{t(`${lng}.subscribe`)}</h3>
              <p className="join">{t(`${lng}.join`)}</p>
              <Form className="form">
                <Form.Item name="email">
                  <div className="input-row">
                    <Input
                      type="email"
                      placeholder={t(
                        `${placeholderLang}.input_email_placeholder`
                      )}
                    />
                    <Button>{t(`${lng}.submit`)}</Button>
                  </div>
                </Form.Item>
              </Form>
              <p>{t(`${lng}.text`)}</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="socials">
            <p className="socials-title">
              © 2024 <span> </span>
              <NavLink
                style={{ textDecorationLine: "underline" }}
                to={"https://t.me/akb_inf"}
              >
                akb_inf
              </NavLink>
              . All rights reserved.
            </p>
            <div>
              <NavLink to={routes.SN_TELEGRAM}>
                <FaTelegram size={33} />
              </NavLink>
              <NavLink to={routes.SN_INSTAGRAM}>
                <FaInstagramSquare size={33} />
              </NavLink>
              <NavLink to={routes.SN_LINKEDIN}>
                <FaLinkedin size={33} />
              </NavLink>
            </div>
          </div>
        </div>
      </FooterRow>
    </>
  );
}

export default Footer;
