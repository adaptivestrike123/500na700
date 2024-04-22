import React, { FC } from "react";
import "./Button.css";

interface Props {
  text: string;
}

export const Button: FC<Props> = ({ text }) => {
  return (
    <div className="button-wrap">
      <button className="button">
        <p>{text}</p>
      </button>
    </div>
  );
};
