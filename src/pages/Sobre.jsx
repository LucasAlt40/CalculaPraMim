import ArtigoContent from "../components/ArtigoContent";
import Header from "../components/Header";

function Sobre() {
  return (
    <div>
      <Header home="/" />
      <ArtigoContent title="Sobre nós">
        <p>
          O "Calcula Pra Mim?" é um projeto desenvolvido pensando em resolver
          algumas equações, para os estudantes que estão querendo uma resposta
          mais rápida.
        </p>
        <p>
          Um projeto desenvolvido por Lucas Alcantara, para aprimorar minhas
          habilidades em React.
        </p>
      </ArtigoContent>
    </div>
  );
}

export default Sobre;
