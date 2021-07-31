import React from "react";
import ArtigoContent from "../../components/ArtigoContent";
import Header from "../../components/Header";

export default function ArtigoSegundoGrau() {
  return (
    <div>
      <Header home="/" />
      <ArtigoContent title="Equação do Segundo Grau">
        <div className="start-article">
          <p>
            Se você chegou aqui, significa que você não quer apenas a resposta
            para o cálculo, você quer saber como o resolve-lo! Bom, para
            começarmos, antes precisamos entender como funciona a fórmula ao
            todo analisando a imagem abaixo.
          </p>

          <img
            src="https://s3.static.brasilescola.uol.com.br/be/2020/03/shutterstock-355155302.jpg"
            alt="imagem"
          />
        </div>
        <p>
          Toda equação do segundo grau pode ser escrita na forma da imagem
          acima. Desse modo, o coeficiente a é o número que multiplica x². O
          coeficiente b é o número que multiplica x e o coeficiente c é um
          número real.
        </p>

        <p>
          Portanto, dada uma equação do segundo grau, escreva os valores de a, b
          e c de forma clara, objetiva e evidente para que eventuais consultas a
          esses valores sejam feitas rapidamente. Como exemplo, vamos escrever
          os coeficientes da equação:
        </p>

        <div>
          <p>
            <strong>2x² + 8x – 24 = 0</strong>
          </p>

          <p>a = 2 | b = 8 | c = –24</p>
        </div>

        <p>
          O valor de delta é dado pela seguinte expressão: Δ = b² – 4ac, em que
          a, b e c são coeficientes da equação e Δ é delta.
        </p>

        <div>
          <p>
            Tomando o exemplo anterior, na equação 2x² + 8x – 24 = 0, delta
            vale:
          </p>
          <p>Δ = b² – 4ac </p>
          <p>Δ = 8² – 4·2·(– 24)</p>
          <p>Δ = 64 + 192</p>
          <p>Δ = 256</p>
        </div>

        <p>
          Após calcular o valor de delta, os valores de x podem ser obtidos por
          meio da seguinte expressão:
        </p>

        <div>
          <p>
            x = <u>– b ± √Δ</u> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2·a
          </p>
        </div>

        <p>
          Observe que nessa expressão aparece o sinal ±. Isso indica que x
          possui dois valores: o primeiro para a √Δ (raiz de delta) negativa e o
          segundo para √Δ positiva.
        </p>

        <p>
          Tomando o exemplo já citado, observe a conclusão do terceiro passo:
        </p>

        <p>
          x = <u>– b ± √Δ</u> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2·a
        </p>

        <p>
          x = <u>– 8 ± √256</u> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; 2·2
        </p>

        <p>
          x = <u>– 8 ± 16</u> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;4
        </p>

        <p>Para √Δ negativa, teremos:</p>
        <p>
          x1 = <u>– 8 - 16</u> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;4
        </p>
        <p>
          x1 = <u>–24</u> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;4
        </p>

        <p>x1 = -6</p>

        <p>Para √Δ positiva, teremos:</p>
        <p>
          x2 = <u>– 8 + 16</u> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;4
        </p>
        <p>
          x2 = <u>8</u> <br /> &nbsp; &nbsp; &nbsp; &nbsp; 4
        </p>

        <p>x2 = 2</p>

        <p>
          E é isso! Agora é com você, nós esperamos que você agora possa
          calcular qualquer equação do Segundo Grau... Boa Sorte! &#128151;
        </p>
      </ArtigoContent>
    </div>
  );
}
