import { numinicio, dados } from "./Constantes.js";
import { PutText } from "./PassarGabarito.js";


export default function BannerDeQuestao() {
  const inputs = document.querySelectorAll('[type="radio"]');

  inputs.forEach((input) => {
  input.addEventListener("click", function () {
    let idModificado = this.id.split("-");
    let NumeroId = Number(idModificado[1]);
    PutText(NumeroId);
    const GabaritoDaMarcada = dados.gabarito[NumeroId - numinicio];
    const selecionada = document.querySelector(
      `input[name="q${NumeroId}"]:checked`,
    ).value;
    const box = document.getElementById(`T-${NumeroId}`);
    const indicadordeerro = document.getElementById(`AVL-${NumeroId}`);

    if (GabaritoDaMarcada === selecionada) {
      box.setAttribute("class", "certa");
      box.textContent = `Você acertou, a resposta era ${GabaritoDaMarcada}`;
      indicadordeerro.style.display = "none";
    } else {
      box.setAttribute("class", "errada");
      box.textContent = `Você errou, a resposta era ${GabaritoDaMarcada} `;
      indicadordeerro.style.display = "block";
    }
  });
});
}