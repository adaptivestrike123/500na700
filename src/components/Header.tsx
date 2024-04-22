import React, { FC, useState } from "react";
import "./Header.css";
import Logo from "../image/Vector.png";
import Arrow from "../image/Arrow.png";
import { Button } from "./ui/Button";
import { CSSTransition } from "react-transition-group";
import { HeaderModal } from "./ui/HeaderModal";
import ReverseArrow from "../image/Type=Hover.png";
import { usePageWidth } from "./hook/usePageWidth";
import Burger from "../image/Burger.png";
import { HeaderMobile } from "./ui/HeaderMobile";
import { ModalContact } from "./ui/ModalContact";
import CloseBurger from "../image/burger-close.png";

export const Header = () => {
  const width = usePageWidth();

  const [modal, setModal] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [contactModal, setContactModal] = useState<boolean>(false);

  return (
    <div className="header" onMouseLeave={() => setModal(false)}>
      <div className="container">
        <div className="header-align">
          <div className="header-logo">
            <img src={Logo}></img>
          </div>
          {width < 1000 ? (
            <div className="header-mobile-wrapper">
              {menu ? (
                <img onClick={() => setMenu(!menu)} src={CloseBurger}></img>
              ) : (
                <img src={Burger} onClick={() => setMenu(!menu)}></img>
              )}
              <CSSTransition
                in={menu}
                timeout={200}
                classNames="alert"
                unmountOnExit
              >
                <HeaderMobile></HeaderMobile>
              </CSSTransition>
            </div>
          ) : (
            <div className="header-navigation">
              <div
                className="text-container"
                onMouseEnter={() => setModal(true)}
              >
                <p>О нас</p>
                <img src={modal ? ReverseArrow : Arrow}></img>
                <CSSTransition
                  in={modal}
                  timeout={200}
                  classNames="alert"
                  unmountOnExit
                >
                  <HeaderModal></HeaderModal>
                </CSSTransition>
              </div>
              <div className="text-container">
                <p>Проекты</p>
                <img src={Arrow}></img>
              </div>
              <div className="text-container">
                <p>Новости</p>
              </div>
              <div className="text-container">
                <p>FAQ</p>
              </div>
              <div className="text-container">
                <p>Контакты</p>
              </div>
            </div>
          )}
          <CSSTransition
            in={modal}
            timeout={200}
            classNames="alert"
            unmountOnExit
          >
            <HeaderModal></HeaderModal>
          </CSSTransition>
          {width < 1000 ? null : (
            <div
              className="contact"
              onClick={() => setContactModal(!contactModal)}
            >
              <Button text={"Связаться с нами"}></Button>
              <CSSTransition
                in={contactModal}
                timeout={200}
                unmountOnExit
                classNames="alert"
              >
                <ModalContact setContactModal={setContactModal}></ModalContact>
              </CSSTransition>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
