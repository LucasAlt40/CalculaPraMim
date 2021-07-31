import Card from "../components/Card";
import Header from "../components/Header";

import "../styles/Calculos.scss";

function Calculos() {
  return (
    <div>
      <Header home="/" />
      <div className="cards">
        <Card
          imageLink="https://pt-static.z-dn.net/files/d84/70a8ffa3527ca4c067a42dd700c04eb7.png"
          path="/calculos/SegundoGrau"
          title="Equação de Segundo Grau"
          nameButton="Resolver Agora"
        />
        <Card
          imageLink="https://static.todamateria.com.br/upload/tr/ia/trianguloretanguloteoremadepitagoras.jpg"
          path="/calculos/Pitagoras"
          title="Teorema de Pitágoras"
          nameButton="Resolver Agora"
        />
      </div>
    </div>
  );
}

export default Calculos;
