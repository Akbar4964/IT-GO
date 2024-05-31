import React, { useState } from "react";
import { AnchorTechnologyRow } from "./style";
import {
  AnchorBusiness,
  AnchorIntegration,
  AnchorStrategy,
} from "../../../../assets/images";
import { useTranslation } from "react-i18next";

function AnchorTechnology() {
  const [activeTitle, setActiveTitle] = useState(1);

  const [imageSrc, setImageSrc] = useState({ img: AnchorBusiness });

  const { t } = useTranslation();

  const lng = "Anchor.AnchorContent";

  const handleTitleClick = (number) => {
    setActiveTitle(number);
    switch (number) {
      case 1:
        setImageSrc({ img: AnchorBusiness });
        break;
      case 2:
        setImageSrc({ img: AnchorStrategy });
        break;
      case 3:
        setImageSrc({ img: AnchorIntegration });
        break;
      default:
        setImageSrc({ img: AnchorBusiness });
    }
  };
  return (
    <>
      <AnchorTechnologyRow>
        <div className="container">
          <div className="anchor-row">
            <ul>
              <li
                className={activeTitle == 1 ? "active" : null}
                onClick={() => handleTitleClick(1)}
              >
                <h1>{t(`${lng}.invest`)}</h1>
                <p>{t(`${lng}.invest_text`)}</p>
                <div className={activeTitle == 1 ? "active-line" : null}></div>
              </li>
              <li
                className={activeTitle == 2 ? "active" : null}
                onClick={() => handleTitleClick(2)}
              >
                <h1>{t(`${lng}.strategy`)}</h1>
                <p>{t(`${lng}.strategy_text`)}</p>
                <div className={activeTitle == 2 ? "active-line" : null}></div>
              </li>
              <li
                className={activeTitle == 3 ? "active" : null}
                onClick={() => handleTitleClick(3)}
              >
                <h1>{t(`${lng}.integration`)}</h1>
                <p>{t(`${lng}.integration_text`)}</p>
                <div className={activeTitle == 3 ? "active-line" : null}></div>
              </li>
            </ul>
            <div className="image-container">
              <img src={imageSrc.img} alt="Image" />
            </div>
          </div>
        </div>
      </AnchorTechnologyRow>
    </>
  );
}

export default AnchorTechnology;
