import React, { FC, useState } from "react";
import "./FAQ.css";
import Arrow from "../../image/Arrow.png";
import ReverseArrow from "../../image/Type=Hover.png";
import { CSSTransition } from "react-transition-group";

export const FAQ: FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="faq">
      <div className="container">
        <div className="faq-align">
          <h1>FAQ</h1>
          <div className="faq-wrapper">
            <div className="faq-block">
              <div className="faq-elem">
                <div className="faq-header-wrapper">
                  <h2>КАКИЕ УСЛУГИ ПРЕДОСТАВЛЯЕТ ВАША СТУДИЯ?</h2>
                </div>
                <img className="faq-arrow" src={Arrow}></img>
              </div>
            </div>
            <div className="faq-block" onClick={() => setModal(!modal)}>
              <div className="faq-elem">
                <div className="faq-header-wrapper">
                  <h2>КАК ВЫ ОБЕСПЕЧИВАЕТЕ КАЧЕСТВО И УНИКАЛЬНОСТЬ ДИЗАЙНА?</h2>
                </div>
                {modal ? (
                  <img className="faq-arrow" src={ReverseArrow}></img>
                ) : (
                  <img className="faq-arrow" src={Arrow}></img>
                )}
              </div>
              <CSSTransition
                in={modal}
                timeout={200}
                classNames="alert"
                unmountOnExit
              >
                <div className="faq-desc">
                  <p>
                    Мы придерживаемся высоких стандартов качества и стремимся
                    создавать уникальный дизайн, отвечающий потребностям и
                    ожиданиям наших клиентов. Наши дизайнеры постоянно
                    совершенствуют свои навыки и следят за новыми трендами в
                    дизайне.
                  </p>
                </div>
              </CSSTransition>
            </div>
            <div className="faq-block">
              <div className="faq-elem">
                <div className="faq-header-wrapper">
                  <h2>
                    ПРЕДОСТАВЛЯЕТЕ ЛИ ВЫ УСЛУГИ ПО СОЗДАНИЮ КОНТЕНТА ДЛЯ САЙТОВ
                    И ПРИЛОЖЕНИЙ?
                  </h2>
                </div>
                <img className="faq-arrow" src={Arrow}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
