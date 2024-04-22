import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/pages/Home";
import { News } from "./components/pages/News";
import { FAQ } from "./components/pages/FAQ";
import { Mail } from "./components/pages/Mail";
import { Feedback } from "./components/pages/Feedback";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <News></News>
      <FAQ></FAQ>
      <Mail></Mail>
      <Feedback></Feedback>
    </div>
  );
}

export default App;
