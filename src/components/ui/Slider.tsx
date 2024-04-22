import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";
import "swiper/css/navigation";
import Image from "../../image/Rectangle605.png";
import { Autoplay, Navigation } from "swiper";
import { usePageWidth } from "../hook/usePageWidth";

export const Slider = () => {
  const width = usePageWidth();
  return (
    <div className="slider">
      <Swiper
        className="sample-slider"
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 2200 }}
        speed={1000}
      >
        <SwiperSlide>
          <div className="slider-wrapper">
            <div className="slider-desc">
              {width > 1000 ? (
                <button className="button-gray">
                  <p>Сайты</p>
                </button>
              ) : null}
              <div className="home-article">
                <div className="home-article-text">
                  <h1>Заголо вок 1 Заголо вок 1 Заголо вок 1</h1>
                  <p>
                    Описание проекта Описание проекта Описание проекта Описание
                    проекта Описание проекта Описание проекта Описание проекта
                    Описание проекта
                  </p>
                </div>
              </div>
            </div>
            <img src={Image}></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
