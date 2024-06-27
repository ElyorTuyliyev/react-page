import React, { useState } from "react";
import "./style.css";
function Card() {
  const [toggle, setToggle] = useState(false);
  const text = () => {
    // const runText = document.getElementsByClassName("question__text");
    setToggle(!toggle);
  };
  return (
    <div onClick={text} className="question__card-wrapper">
      <p className="question__name">
        Mijozlarning bazsini boshqa raqabobtdoshlarga berib yuborsachi ?
        <span className="question__icon-chevron-wrapper">
          <i class="fa-solid fa-chevron-up"></i>
        </span>
      </p>
      {toggle ? (
        <p className="question__text">
          Biz sizning ma’lumotlaringizni saqlanishi haqida siz uchun o’ylab
          qo’yganmiz. Ma’lumotlar bazasini xafvsiz ta’minlash uchun sizning
          o’quv markazingiz va kompaniyamiz o’rtasida sirlarni saqlash uchun
          maxfiylik siyosati nomli shartnoma imzolanadi. Bu orqali sizning
          ma’lumotlaringizni oshkora qilmaslik majburiyatini bizning
          kompaniyamiz oladi.
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Card;
