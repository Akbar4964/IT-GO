import React, { useState } from "react";
import { PaymentRow } from "./style";
import { useTranslation } from "react-i18next";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";

const LNG = "Payment.PaymentContent";

function Payment() {
  const [isActive, setIsActive] = useState(false);

  function handleActive(number) {
    if (number) {
      setIsActive(!isActive);
    }
  }

  const { t } = useTranslation();
  return (
    <>
      <PaymentRow>
        <div className="container">
          <h1>{t(`${LNG}.title`)}</h1>
          <p>{t(`${LNG}.text`)}</p>
          <div className="payment-buttons">
            <button
              className={isActive ? "" : "active"}
              onClick={() => handleActive(1)}
            >
              {t(`${LNG}.btn_text_month`)}
            </button>
            <button
              className={isActive ? "active" : ""}
              onClick={() => handleActive(2)}
            >
              {t(`${LNG}.btn_text_year`)}
            </button>
          </div>
          <div className="payment-row">
            <div className="card">
              <div className="img-row">
                <PiCurrencyCircleDollarFill color="#1f618d" size={33} />
              </div>
              <h4>{t(`${LNG}.basic`)}</h4>
              <h3>{isActive ? "$33.33/yr" : "$9.99/mo"}</h3>
              <hr />
              <h5>Includes:</h5>
              <h6>🟢 React</h6>
              <h6>🟢 Redux</h6>
              <h6>🔴 . Net</h6>
              <h6>🟢 Php</h6>
              <h6>🟢 Python</h6>
              <h6>🔴 TypeScript</h6>
              <h6>🔴 Django</h6>
              <h6>🔴 Laravel</h6>
              <h6>🔴 Java</h6>
              <div className="btn-row">
                <button>{t(`${LNG}.started`)}</button>
              </div>
            </div>
            <div className="card">
              <div className="img-row">
                <PiCurrencyCircleDollarFill color="#1f618d" size={33} />
              </div>
              <h4>{t(`${LNG}.business`)}</h4>
              <h3>{isActive ? "$39.99/yr" : "$11.11/mo"}</h3>
              <hr />
              <h5>Includes:</h5>
              <h6>🟢 React</h6>
              <h6>🟢 Redux</h6>
              <h6>🟢 . Net</h6>
              <h6>🟢 Php</h6>
              <h6>🟢 Python</h6>
              <h6>🔴 TypeScript</h6>
              <h6>🔴 Django</h6>
              <h6>🟢 Laravel</h6>
              <h6>🔴 Java</h6>
              <div className="btn-row">
                <button>{t(`${LNG}.started`)}</button>
              </div>
            </div>
            <div className="card">
              <div className="img-row">
                <PiCurrencyCircleDollarFill color="#1f618d" size={33} />
              </div>
              <h4>{t(`${LNG}.vip`)}</h4>
              <h3>{isActive ? "$44.44/yr" : "$12.12/mo"}</h3>
              <hr />
              <h5>Includes:</h5>
              <h6>🟢 React</h6>
              <h6>🟢 Redux</h6>
              <h6>🟢 . Net</h6>
              <h6>🟢 Php</h6>
              <h6>🟢 Python</h6>
              <h6>🟢 TypeScript</h6>
              <h6>🟢 Django</h6>
              <h6>🟢 Laravel</h6>
              <h6>🟢 Java</h6>
              <div className="btn-row">
                <button>{t(`${LNG}.started`)}</button>
              </div>
            </div>
          </div>
        </div>
      </PaymentRow>
    </>
  );
}

export default Payment;
