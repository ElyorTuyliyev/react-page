import React from "react";
import "./style.css";
import Card from "./card";
function Question() {
  const cards = [<Card />, <Card />, <Card />, <Card />];
  return (
    <div className="question__wrapper">
      <p className="question__title">Tez-tez so’raladigan savollar</p>
      <div className="cards__wrapper">{cards}</div>
    </div>
  );
}

export default Question;
