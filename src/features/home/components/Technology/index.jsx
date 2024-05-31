import React from "react";
import { TechnologyRow } from "./style";
import { useTranslation } from "react-i18next";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { SiSass, SiRedux } from "react-icons/si";
import { FaReact, FaHtml5, FaJava, FaPython, FaLaravel } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPhp, BiLogoCPlusPlus } from "react-icons/bi";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiDjango } from "react-icons/di";

function Technology() {
  const { t } = useTranslation();
  return (
    <>
      <TechnologyRow>
        <div className="container">
          <h1>{t("Technology.title")}</h1>
          <div className="scroll-container">
            <div className="carousel-primary">
              <FaHtml5 className="img" color="#fff" size={111} />
              <FaJava className="img" color="#fff" size={111} />
              <SiSass className="img" color="#fff" size={111} />
              <FaPython className="img" color="#fff" size={111} />
              <BiLogoTypescript className="img" color="#fff" size={111} />
              <DiDjango className="img" color="#fff" size={111} />
              <BiLogoCPlusPlus className="img" color="#fff" size={111} />
            </div>
            <div className="carousel-primary carousel-secondary">
              <IoLogoCss3 className="img" color="#fff" size={111} />
              <AiOutlineDotNet className="img" color="#fff" size={111} />
              <RiJavascriptFill className="img" color="#fff" size={111} />
              <BiLogoPhp className="img" color="#fff" size={111} />
              <FaReact className="img" color="#fff" size={111} />
              <FaLaravel className="img" color="#fff" size={111} />
              <SiRedux className="img" color="#fff" size={111} />
            </div>
          </div>
        </div>
      </TechnologyRow>
    </>
  );
}

export default Technology;
