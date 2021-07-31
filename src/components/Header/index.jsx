import { Link } from "react-router-dom";

import "./style.scss";

function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li className="links">
            <Link to="/sobre">
              <h3>Sobre</h3>
            </Link>
          </li>
          <li className="title">
            <Link to={props.home}>
              <h1>Calcula Pra Mim?</h1>
            </Link>
          </li>
          <li className="links">
            <Link to="/artigos">
              <h3>Artigos</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
