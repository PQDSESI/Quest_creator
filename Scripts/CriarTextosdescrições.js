import { Textosquil } from "./Quillconfig.js";
import { dados } from "./Constantes.js";
import { total } from "./Constantes.js";
const { inicio, gabarito, nivel, fim,tipoLista, ...Dadosimportantes } = dados;

Dadosimportantes.qtddequestoes = total;
const TODOSOSTEXTOS = JSON.parse(localStorage.getItem("Notas")) || [];

export function GuardarAnotacoes() {
  const AnotacaodaLista = {
    Dadosimportantes,
    Textosquil,
  };
  TODOSOSTEXTOS.push(AnotacaodaLista);
  localStorage.setItem("Notas", JSON.stringify(TODOSOSTEXTOS));
}
