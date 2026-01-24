import {criarquestao, Cabeçalho} from "./CriarQuestões.js"
import { SubmeterFormulario } from "./Listener.js";
import { PassaGabarito, VoltaGabarito, PutText } from "./PassarGabarito.js";
import { numinicio, Passa, Volta, ExcluirERetornar, dados } from "./Constantes.js";
import BannerDeQuestao from "./BannerDeAcerto.js";
import AnularOpcao from "./AnularOpcao.js";


ExcluirERetornar.onclick = () => {
  sessionStorage.clear();

}

Passa.onclick = PassaGabarito
Volta.onclick = VoltaGabarito

if (!dados) {
  alert("Dados da lista não encontrados.");
  window.location.href = "index.html";
}

SubmeterFormulario();
Cabeçalho();
criarquestao();
BannerDeQuestao();
PutText(numinicio);
AnularOpcao();


