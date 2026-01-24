import gerarTexto from "./GerarTexto.js";
import baixarTXT from "./BaixarTexto.js";
import { numinicio, numfim,dados } from "./Constantes.js";

function SubmeterFormulario() {
  document
    .getElementById("form-questoes")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const dadosquestao = [];

      for (let T = numinicio, i = 1, j = numfim; T <= j; T++, i++) {
        const marcada = document.querySelector(`input[name="q${T}"]:checked`);
        const respostaUsuario = marcada ? marcada.value : "-";
        const correta = dados.gabarito[i - 1];
        let motivodeerro = document.querySelector(
          `select[id="AVL-${T}"]`,
        ).value;
        let confirmacao;

        if (respostaUsuario === correta || motivodeerro === "anulada") {
          confirmacao = "V";
        } else {
          confirmacao = "F";
        }
        if(respostaUsuario === "-"){
          confirmacao = "-"
        }


        switch (motivodeerro) {
          case "anulada":
            motivodeerro = "Anulada";
            break;
          case "atencao":
            motivodeerro = "Atenção";
            break;
          case "dificuldade":
            motivodeerro = "Dificuldade";
            break;
          case "conteudo":
            motivodeerro = "Conteúdo";
            break;
          case "#":
            motivodeerro = null;
            break;
          default:
            break;
        }
        console.log(dadosquestao);
        dadosquestao.push({
          questao: T,
          marcada: respostaUsuario,
          correta: correta,
          resultado: confirmacao,
          motivoERRO: motivodeerro,
        });
      }
      const nome = `${dados.data} - (${dados.nivel}) ${dados.materia} ${dados.lista}.txt`;
      const textofeito = gerarTexto(dados, dadosquestao);
      baixarTXT(textofeito, nome);
    });
}

export { SubmeterFormulario };
