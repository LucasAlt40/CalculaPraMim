import Button from "../Button";

import "./style.scss";

function Calculator(props) {
  return (
    <div className="calculator-content">
      <div className="title">
        <h1>{props.nameEquation}</h1>
        <img src={props.imageLink} alt="imagem" />
        <h2>{props.desc}</h2>
      </div>
      <div className="inputs">
        <label htmlFor="valueA">
          <h2>Valor de a:</h2>
          <input onChange={props.onChange1} type="number" />
        </label>

        <label htmlFor="valueB">
          <h2>Valor de b:</h2>
          <input onChange={props.onChange2} type="number" />
        </label>

        <label htmlFor="valueC">
          <h2>Valor de c:</h2>
          <input onChange={props.onChange3} type="number" />
        </label>
      </div>

      <Button onClick={props.onClick} />

      <div ref={props.reference} className="result" />
    </div>
  );
}

export default Calculator;
