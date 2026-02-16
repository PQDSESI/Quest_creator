const dados = JSON.parse(sessionStorage.getItem("dadosLista"));
const container = document.getElementById("questoes-container");
const numinicio = Number(dados.inicio);
const numfim = Number(dados.fim);
const total = Number(numfim - numinicio + 1);
const TamanhoDoGabarito = dados.gabarito.length;
const Passa = document.getElementById("PassaGabarito");
const Volta = document.getElementById("VoltaGabarito");
const ExcluirERetornar = document.getElementById("ExcluirERetornar");
export {
  container,
  numinicio,
  numfim,
  dados,
  total,
  TamanhoDoGabarito,
  Passa,
  Volta,
  ExcluirERetornar,
};
