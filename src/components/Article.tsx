import React, { FC } from "react";
import "./Article.css";
import { IArticle } from "./pages/News";

export const Article: FC<IArticle> = ({ text, img, header }) => {
  return (
    <div className="article">
      <img className="image-article" src={img}></img>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
};
