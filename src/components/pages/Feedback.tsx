import "./Feedback.css";
import WLogo from "../../image/white-logo.png";
import Youtube from "../../image/youtube.png";
import Telegram from "../../image/telegr.png";
import Vk from "../../image/vk.png";

export const Feedback = () => {
  return (
    <div className="feedback">
      <div className="container">
        <div className="feedback-align">
          <div className="feedback-logo">
            <img src={WLogo}></img>
            <div className="feedback-contact">
              <img src={Youtube}></img>
              <img src={Telegram}></img>
              <img src={Vk}></img>
            </div>
          </div>
          <div className="feedback-navigation">
            <p>О нас</p>

            <p>Проекты</p>

            <p>Новости</p>

            <p>FAQ</p>

            <p>Контакты</p>
          </div>
          <div className="address">
            <p>
              г. Горгород,<br></br> ул. Мегаполисная, 1
            </p>
            <p>+7 (000) 000-00-00</p>
            <p>email@email.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
};
