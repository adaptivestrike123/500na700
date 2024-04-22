import { FC } from "react";
import "./Mail.css";
import { usePageWidth } from "../hook/usePageWidth";
import { Button } from "../ui/Button";

export const Mail: FC = () => {
  const width = usePageWidth();

  return (
    <div className="mail">
      <div className="container">
        <div className="mail-align">
          <div className="mail-header">
            <h1>Подпишись на рассылку</h1>
            {width < 1000 ? null : (
              <p>Отправляем анонсы новых статей, выпусков и трансляций</p>
            )}
          </div>
          <div className="mail-input">
            <input
              className="input-mail"
              placeholder="Электронная почта"
            ></input>
            <input
              className="input-mail"
              placeholder="Дата (например, 01.01.1990)"
            ></input>
            <input className="input-mail" placeholder="Телефон"></input>
            <input
              className="input-mail"
              placeholder="Время (например, 10:00)"
            ></input>
            <label className="checkbox">
              <input type="checkbox" /> Я согласен (-а) на обработку
              персональных данных
            </label>
            <Button text={"Подписаться"}></Button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
