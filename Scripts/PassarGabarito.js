import {numinicio,TamanhoDoGabarito,dados } from "./Constantes.js";
const Titulo = document.getElementById("NmrDaQuestaoTitulo");

let Numerodaquestão = numinicio;

const PutText = (NumeroQ) => {
  document.getElementById("gabarito-content").textContent =
    `${dados.gabarito[NumeroQ - numinicio]}`;
  Titulo.textContent = ` ${NumeroQ}`;
};


function PassaGabarito() {
  if (Numerodaquestão - numinicio + 1 < TamanhoDoGabarito) {
    Numerodaquestão++;
  } else {
    Numerodaquestão = numinicio;
  }
  PutText(Numerodaquestão);
};

function VoltaGabarito(){
  if (Numerodaquestão > numinicio) {
    Numerodaquestão--;
  } else {
    Numerodaquestão = numinicio + TamanhoDoGabarito - 1;
  }
  PutText(Numerodaquestão);
};

export {
    PassaGabarito,VoltaGabarito,PutText
}