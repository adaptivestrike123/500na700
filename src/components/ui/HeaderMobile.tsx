import { useState } from "react";
import "./HeaderMobile.css";
import { HeaderModal } from "./HeaderModal";
import ReverseArrow from "../../image/Type=Hover.png";
import Arrow from "../../image/Arrow.png";
import { CSSTransition } from "react-transition-group";
import { Button } from "./Button";
import { ModalContact } from "./ModalContact";

export const HeaderMobile = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [contactModal, setContactModal] = useState<boolean>(false);
  return (
    <div className="header-mobile">
      <div className="header-mobile-elem" onClick={() => setModal(!modal)}>
        <div className="header-mobile-wrapper">
          <b>
            <p>О нас</p>
          </b>
          <img src={modal ? ReverseArrow : Arrow}></img>
        </div>
        <CSSTransition
          timeout={200}
          in={modal}
          unmountOnExit
          classNames="alert"
        >
          <div className="header-mobile-modal">
            <p>О 500на700</p>
            <p>Документы</p>
            <p>Устойчивое развитие</p>
            <p>Команда</p>
            <p>Стратегия</p>
          </div>
        </CSSTransition>
      </div>
      <div className="header-mobile-elem">
        <div className="header-mobile-wrapper">
          <b>
            <p>Проекты</p>
          </b>
          <img src={Arrow}></img>
        </div>
      </div>
      <div className="header-mobile-elem">
        <b>
          <p>Новости</p>
        </b>
      </div>
      <div className="header-mobile-elem">
        <b>
          <p>FAQ</p>
        </b>
      </div>
      <div className="header-mobile-elem">
        <b>
          <p>Контакты</p>
        </b>
      </div>
      <div className="contact" onClick={() => setContactModal(!contactModal)}>
        <Button text={"Связаться с нами"}></Button>
      </div>
      <CSSTransition
        in={contactModal}
        unmountOnExit
        timeout={200}
        classNames="alert"
      >
        <ModalContact setContactModal={setContactModal}></ModalContact>
      </CSSTransition>
    </div>
  );
};
