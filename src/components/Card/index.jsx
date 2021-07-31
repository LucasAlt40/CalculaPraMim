import { Link } from "react-router-dom";

import "./style.scss";

function Card(props) {
  return (
    <div className="card-math">
      <div className="card-title">
        <h2>{props.title}</h2>
      </div>
      <img src={props.imageLink} alt="imagem" />
      <span />
      <div>
        <Link to={props.path}>
          <h2 className="link-calculator">{props.nameButton}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Card;
