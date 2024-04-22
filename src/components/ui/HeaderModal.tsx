import React, { FC } from "react";
import "./HeaderModal.css";

export const HeaderModal: FC = () => {
  return (
    <div className="header-modal" onClick={(e) => e.stopPropagation()}>
      <div className="header-modal-align">
        <p>О 500на700</p>
        <p>Документы</p>
        <p>Устойчивое развитие</p>
        <p>Команда</p>
        <p>Стратегия</p>
      </div>
    </div>
  );
};
