import { Button } from "./Button";
import "./ModalContact.css";
import Close from "../../image/close.png";
import { FC } from "react";

interface Props {
  setContactModal: any;
}

export const ModalContact: FC<Props> = ({ setContactModal }) => {
  return (
    <div className="modal-contact">
      <div
        className="modal-contact-layout"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-contact-header">
          <h3>СВЯЗАТЬСЯ С НАМИ</h3>
          <img
            className="close"
            onClick={() => setContactModal(false)}
            src={Close}
          ></img>
        </div>
        <div className="modal-contact-input">
          <input className="input-mail" placeholder="Имя"></input>
          <input className="input-mail" placeholder="Фамилия"></input>
          <label className="checkbox">
            <input type="checkbox" /> Я согласен (-а) на обработку персональных
            данных
          </label>
        </div>
        <div onClick={() => setContactModal(false)}>
          <Button text="Отправить"></Button>
        </div>
      </div>
    </div>
  );
};
