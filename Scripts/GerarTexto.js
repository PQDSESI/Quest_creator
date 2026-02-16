
export default function gerarTexto(dados, dadosquestao) {
  let texto = "";

  texto += `Matéria: ${dados.materia}\n`;
  texto += `Lista: ${dados.lista}\n`;
  texto += `Tipo: ${dados.tipoLista}\n`;
  texto += `Data: ${dados.data}\n\n`;
  texto += `Nível: ${dados.nivel}\n\n`;

  texto += "QUESTÕES\n";
  texto += "--------------------------------\n";

  dadosquestao.forEach((r) => {
    texto += `Q${r.questao} | Marcada: ${r.marcada} | Correta: ${r.correta ? r.correta : "-"} | ${r.resultado} | ${r.motivoERRO === null ? "" : r.motivoERRO} \n`;
  });

  const acertos = dadosquestao.filter((r) => r.resultado === "V").length;
  const revisar = dadosquestao.filter((r) => r.motivoERRO === "Dificuldade" );
  const revisarnumeros = revisar.map((r) => r.questao);

  texto += `\nResultado final: ${acertos} / ${dadosquestao.length}\n\n`;
  texto += `Rever questões ${revisarnumeros}\n`;

  return texto;
}

