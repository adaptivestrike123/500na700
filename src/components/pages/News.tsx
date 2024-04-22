import React, { FC, useState, useEffect } from "react";
import "./News.css";
import OneImage from "../../image/1.png";
import TwoImage from "../../image/2.png";
import ThreeImage from "../../image/3.png";
import FourImage from "../../image/4.png";
import FiveImage from "../../image/5.png";
import SixImage from "../../image/6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import { Article } from "../Article";
import { usePageWidth } from "../hook/usePageWidth";

export interface IArticle {
  header: string;
  text: string;
  img: any;
}

export const News: FC = () => {
  const width = usePageWidth();

  const [articles, setArticles] = useState<IArticle[]>([
    {
      header: "ЗАГОЛОВОК НОВОСТИ 1",
      img: OneImage,
      text: "Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки",
    },
    {
      header: "ЗАГОЛОВОК НОВОСТИ 2",
      img: TwoImage,
      text: "Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки",
    },
    {
      header: "ЗАГОЛОВОК НОВОСТИ 3",
      img: ThreeImage,
      text: "Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки",
    },
    {
      header: "ЗАГОЛОВОК НОВОСТИ 4",
      img: FourImage,
      text: "Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки",
    },
    {
      header: "ЗАГОЛОВОК НОВОСТИ 5",
      img: FiveImage,
      text: "Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки",
    },
    {
      header: "ЗАГОЛОВОК НОВОСТИ 6",
      img: SixImage,
      text: "Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки Описание новости в 3 строки",
    },
  ]);
  return (
    <div className="news">
      <div className="container">
        <h1>Новости</h1>
        {width < 1000 ? (
          <Swiper
            className="sample-slider"
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2200 }}
            speed={1000}
          >
            {articles.map((elem) => (
              <SwiperSlide>
                <Article
                  text={elem.text}
                  img={elem.img}
                  header={elem.header}
                ></Article>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="news-align">
            {articles.map((elem: IArticle) => (
              <Article
                text={elem.text}
                img={elem.img}
                header={elem.header}
              ></Article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
