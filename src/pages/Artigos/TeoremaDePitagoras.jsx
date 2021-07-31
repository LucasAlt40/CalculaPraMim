import React from "react";
import ArtigoContent from "../../components/ArtigoContent";
import Header from "../../components/Header";

export default function TeoremaDePitagoras() {
  return (
    <div>
      <Header home="/" />
      <ArtigoContent title="Teorema de Pitágoras">
        <div className="start-article">
          <p>
            Bom, primeiramente devemos entender como funciona a fórmula do
            teorema de pitágoras. Vamos começar analisando a imagem abaixo:
          </p>

          <img
            src="https://s5.static.brasilescola.uol.com.br/img/2019/10/trinagulo-retangulo.jpg"
            alt="imagem"
          />
        </div>
        <p>
          O teorema de Pitágoras diz que o quadrado da hipotenusa é igual à soma
          dos quadrados dos catetos. Temos então a seguinte fórmula:
        </p>
        <p>a² = b² + c²</p>
        <p>a = hipotenusa, b = cateto, c = cateto</p>

        <br />

        <p>Agora para melhor entendimento vamos usar o seguinte exemplo:</p>
        <img
          src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/04/2-exemplo1.jpg"
          alt="imagem"
        />
        <p>
          Primeiro vamos identificar os catetos e a hipotenusa do triângulo.
          Note que x é a hipotenusa e que os catetos medem 7 cm e 24 cm. Então,
          temos que:
        </p>
        <p>a² = b² + c²</p>
        <p>x² = 7² + 24²</p>
        <p>x² = 49 + 576</p>
        <p>x² = 625</p>
        <p>x = √625</p>
        <p>x = 25 cm</p>

        <p>
          Pronto! Facíl né? Agora para descobrir valor de um cateto, é só
          inverter o a, pelo cateto desejado, por exemplo:
        </p>
        <p>a² = b² + c²</p>
        <p>25² = 24² + x²</p>
        <p>-x² = -25² + 24²</p>

        <p>
          E com isso finalizamos, esperamos que tenha entendido o contéudo, boa
          sorte com os estudos, até a próxima!
        </p>
      </ArtigoContent>
    </div>
  );
}
