import Header from "../components/Header";
import Card from "../components/Card";

function Artigos() {
  return (
    <div>
      <Header home="/" />
      <div className="cards">
        <Card
          imageLink="https://pt-static.z-dn.net/files/d84/70a8ffa3527ca4c067a42dd700c04eb7.png"
          path="/artigos/SegundoGrau"
          title="Equação de Segundo Grau"
          nameButton="Veja como Resolver"
        />
        <Card
          imageLink="https://static.todamateria.com.br/upload/tr/ia/trianguloretanguloteoremadepitagoras.jpg"
          path="/artigos/TeoremaDePitagoras"
          title="Teorema de Pitágoras"
          nameButton="Veja como Resolver"
        />
      </div>
    </div>
  );
}

export default Artigos;
