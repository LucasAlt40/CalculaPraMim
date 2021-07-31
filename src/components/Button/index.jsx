import React from "react";

import "./style.scss";

function Button(props) {
  return <button onClick={props.onClick}>Calcular</button>;
}

export default Button;
