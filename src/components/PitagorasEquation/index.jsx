import { useRef, useState } from "react";
import Calculator from "../Calculator";

import "./style.scss";

function PitagorasEquation() {
  var [valueA, setValueA] = useState("");
  var [valueB, setValueB] = useState("");
  var [valueC, setValueC] = useState("");
  const resultado = useRef();

  function decideFunction() {
    if (!valueA && !valueB && !valueC) {
      resultado.current.innerHTML = `<span class="error">Erro!</span>`;
    } else if (valueA && valueB && valueC) {
      resultado.current.innerHTML = `<span class="error">Erro!</span>`;
    } else if (valueA && !valueB && !valueC) {
      resultado.current.innerHTML = `<span class="error">Erro!</span>`;
    } else if (!valueA) {
      calculateHypotenuse();
    } else {
      calculateCateto();
    }
  }

  function calculateHypotenuse() {
    var b = valueB * valueB;
    var c = valueC * valueC;
    var a = b + c;
    var aFinal = Math.sqrt(a);

    resultado.current.innerHTML = `
    <span>a² = b² + c²</span>
    <span>a² = ${valueB}² + ${valueC}²</span>
    <span>a² = ${b} + ${c}</span>
    <span>a² = ${a}</span>
    <span class="core-numbers">a = ${aFinal.toFixed(2)}</span>
    `;
  }

  function calculateCateto() {
    var b = valueB * valueB;
    var c = valueC * valueC;
    var a = valueA * valueA;

    if (!valueB) {
      if (c > a) {
        var bValue = c - a;
      } else {
        bValue = a - c;
      }
    } else {
      if (b > a) {
        var cValue = b - a;
      } else {
        cValue = a - b;
      }
    }

    if (!valueC) {
      resultado.current.innerHTML = `
    <span>a² = b² + c²</span>
    <span>${valueA}² = ${valueB}² + c²</span>
    <span>c² = ${a} - ${b}</span>
    <span>c² = ${cValue}</span>
    <span class="core-numbers">c = ${Math.sqrt(cValue).toFixed(2)}</span>
    `;
    } else {
      resultado.current.innerHTML = `
    <span>a² = b² + c²</span>
    <span>${valueA}² = b² + ${valueC}²</span>
    <span>b² = ${a} - ${c}</span>
    <span>b² = ${bValue}</span>
    <span class="core-numbers">b = ${Math.sqrt(bValue).toFixed(2)}</span>
    `;
    }
  }

  return (
    <div>
      <Calculator
        nameEquation="Teorema de Pitágoras"
        imageLink="https://static.todamateria.com.br/upload/tr/ia/trianguloretanguloteoremadepitagoras.jpg"
        onChange1={(e) => setValueA(e.target.value)}
        onChange2={(e) => setValueB(e.target.value)}
        onChange3={(e) => setValueC(e.target.value)}
        onClick={decideFunction}
        reference={resultado}
        desc="a = hipotenusa, b & c = cateto"
      />
    </div>
  );
}

export default PitagorasEquation;
