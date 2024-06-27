import React from "react";
import "./style.css";
import Card from "./cart";

function Convenience() {
  const cards = [
    <Card
      name="Murojaatlar tahlili"
      texts="Adminlar murojatlar bilan qay darajada ishlayotganligini doim ko’rib turishingiz mumkin"
      icon="fa-solid fa-note-sticky"
    />,
    <Card
      name="Guruhlash"
      texts="Adminlar ro’yxatdagi murojaatchilarni guruhlarga ajratishi osonlashadi"
      icon="fa-solid fa-people-group"
    />,
    <Card
      name="To’lovlar"
      texts="To’lovlar ikki tomonlama tasdiqlash orqali amalga oshiriladi. Ushbu jarayon pul o’g’irlanishini oldini oladi."
      icon="fa-solid fa-money-check-dollar"
    />,
    <Card
      name="Mobil ilova"
      texts="O’quvchilar o’z uy vazifalari, to’lovlari va dars jadvallarini ko’ra olishadi."
      icon="fa-solid fa-mobile"
    />,
    <Card
      name="Hisob-kitoblar"
      texts="O’quv markazidagi xisob-kitoblarni aniq raqamlarda ko’rib turasiz."
      icon="fa-solid fa-calculator"
    />,
    <Card
      name="Darslarni rejalashtirish"
      texts="O’qituvchilarning ish grafigi va dars jadvallarini istalgan vaqtda va joyda ko’rib turasiz."
      icon="fa-solid fa-calendar-days"
    />,
  ];

  return (
    <div className="convenience__wrapper">
      <p className="card__title">Qanday qulayliklarga ega bo’lasiz?</p>
      <div className="card__wrapper">{cards}</div>
    </div>
  );
}

export default Convenience;
