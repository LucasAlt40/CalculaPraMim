import { Link } from "react-router-dom";

import Header from "../components/Header";

import "../styles/Home.scss";

function Home() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return (
      <div>
        <h1>Desculpe, mas a versão mobile ainda está em desenvolvimento :( </h1>
      </div>
    );
  } else {
    return (
      <div>
        <Header />

        <div className="card">
          <h2>Uma iniciativa de estudantes para estudantes.</h2>

          <span></span>

          <div className="sub-title">
            <p>
              Nós sabemos o quanto é chato fazer aqueles cálculos enormes e
              difíceis (Meu Deus era muito chato...). Pensando nisso nós
              desenvolvemos algo que pode te ajudar... Vem conferir!
            </p>
          </div>

          <span></span>

          <Link className="button" to="/calculos">
            Não clique aqui
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
