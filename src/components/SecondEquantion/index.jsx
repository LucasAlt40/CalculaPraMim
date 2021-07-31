import "./style.scss";
import { useState, useRef } from "react";
import Calculator from "../Calculator";

export default function SecondEquuation() {
  var [valueA, setValueA] = useState("");
  var [valueB, setValueB] = useState("");
  var [valueC, setValueC] = useState("");
  const resultado = useRef();

  function calculateEquation() {
    var delta = valueB * valueB - 4 * valueA * valueC;

    if (Math.sign(delta) === 1) {
      var deltaRoot = Math.sqrt(delta);
    } else {
      return (resultado.current.innerHTML = `<span class="error">O valor de delta é igual ou menor que 0. ∆ = ${delta}</span>`);
    }

    if (Math.sign(valueB) === -1) {
      valueB = valueB * -1;
    }

    var x1a = -valueB + deltaRoot;
    var x1b = 2 * valueA;
    var x1c = x1a / x1b;
    var x1 = x1c;

    var x2a = -valueB - deltaRoot;
    var x2b = 2 * valueA;
    var x2c = x2a / x2b;
    var x2 = x2c;

    resultado.current.innerHTML = `
    <span>∆ = b² - 4 x a x c</span>
    <span>∆ = ${valueB}² - 4 x ${valueA} x ${valueC}</span>
    <span class="core-numbers">∆ = ${delta.toFixed(2)}</span>
    <br>
    <span>x = -b +√∆ / 2 x a </span>
    <span>x = -${valueB} + ou - √${delta} / 2 x ${valueA} </span>
    <span>x1 = -${valueB} + √${delta} / 2 x ${valueA} </span>
    <span class="core-numbers">x1 = ${x1.toFixed(2)} </span>
    <span>x2 = -${valueB} - √${delta} / 2 x ${valueA} </span>
    <span class="core-numbers">x2 = ${x2.toFixed(2)} </span>
    `;
  }

  return (
    <Calculator
      nameEquation="Equação do Segundo Grau"
      imageLink="https://pt-static.z-dn.net/files/d84/70a8ffa3527ca4c067a42dd700c04eb7.png"
      onChange1={(e) => setValueA(e.target.value)}
      onChange2={(e) => setValueB(e.target.value)}
      onChange3={(e) => setValueC(e.target.value)}
      onClick={calculateEquation}
      reference={resultado}
    />
  );
}
