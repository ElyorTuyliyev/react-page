import "./style.css";

function Card(props) {
  return (
    <div className="card__box">
      <div className="card__logo-wrapper">
        <i class={props.icon}></i>
      </div>
      <div className="card__text-wrapper">
        <p className="card__text-title">{props.name} </p>
        <p className="card__text"> {props.texts}</p>
      </div>
    </div>
  );
}

export default Card;
