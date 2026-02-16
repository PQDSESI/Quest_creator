const Notas = JSON.parse(localStorage.getItem("Notas")) || [];
const Titulo = document.getElementById("No-nome");
const Materia = document.getElementById("No-materia");
const Data = document.getElementById("No-data");
const qtdquestoes = document.getElementById("No-qtdquestoes");
const LugardeTexto = document.getElementById("notebook-view-main");

export function PlotarCaderno(numero) {
  if (!Notas[numero]) {
    alert("Ainda sem nenhum Texto, É assim que você quer passar ? 💅");
    return;
  }

  const Dados = Notas[numero].Dadosimportantes;
  Titulo.textContent = `${Dados.lista}`;
  Data.textContent = `Data : ${Dados.data}`;
  qtdquestoes.textContent = `Numero de questões : ${Dados.qtddequestoes}`;
  Materia.textContent = `Matéria : ${Dados.materia}`;
  PlotarConteudo(numero);
}

function PlotarConteudo(numero) {
  LugardeTexto.innerHTML = ``
  const { Dadosimportantes, ...textosquill } = Notas[numero];
  const PuroConteudo = textosquill.Textosquil;
  let TodosOsTextos = [];
  PuroConteudo.forEach((element) => {
    TodosOsTextos.push(element.ops);
  });
  TodosOsTextos = [].concat(...TodosOsTextos);
  TodosOsTextos = TodosOsTextos.map((item) =>
    item.insert.replace(/\n/g, "<br>"),
  ).join("");
  LugardeTexto.innerHTML += `${TodosOsTextos}
  `;
}

export function ExcluirTextos(Contador) {
Notas.splice(Contador, 1)
localStorage.setItem("Notas", JSON.stringify(Notas));
return Notas ;
}