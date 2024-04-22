import React from "react";
import "./Home.css";
import { Slider } from "../ui/Slider";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-align">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};
