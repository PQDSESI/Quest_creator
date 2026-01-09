const dados = JSON.parse(sessionStorage.getItem("dadosLista"));

if (!dados) {
  alert("Dados da lista não encontrados.");
  window.location.href = "index.html";
}

document.getElementById("infoLista").innerText =
  `${dados.materia} - ${dados.lista} - ${dados.tipoLista} - ${dados.nivel}`;

const container = document.getElementById("questoes-container");
const numinicio = Number(dados.inicio);
const numfim = Number(dados.fim);

const total = Number(numfim - numinicio + 1);

for (let i = numinicio, j = numfim; i <= j; i++) {
  const bloco = document.createElement("div");
  bloco.style.marginBottom = "15px";

  bloco.innerHTML = `
            <strong>Questão ${i}</strong><br>
            <div class="opcoesecontainer">
            <div class="opcoes">

            <div class="vazio-box">
            <label class="containerdeopcaoetitulo">
                <input  id="A-${i}" type="radio"   name="q${i}" value="A"> A
            </label>
            <input id="NA-${i}" type="checkbox" class="apagaopcao">
            </div>

            <div class="vazio-box">
            <label class="containerdeopcaoetitulo">
                <input id="B-${i}" type="radio" name="q${i}" value="B"> B
            </label>
            <input id="NB-${i}" type="checkbox" class="apagaopcao">
            </div>

            <div class="vazio-box">
            <label class="containerdeopcaoetitulo">
                <input id="C-${i}" type="radio"  name="q${i}" value="C"> C
            </label>
            <input id="NC-${i}" type="checkbox" class="apagaopcao">
            </div>

            <div class="vazio-box">
            <label class="containerdeopcaoetitulo">
                <input id="D-${i}" type="radio"  name="q${i}" value="D"> D
            </label>
            <input id="ND-${i}" type="checkbox" class="apagaopcao">
            </div>

            <div class="vazio-box">
            <label class="containerdeopcaoetitulo">
                <input id="E-${i}" type="radio"  name="q${i}" value="E"> E
            </label>
            <input id="NE-${i}" type="checkbox" class="apagaopcao">
            </div>

            </div>
            <div class="banner-questoes"><p id="T-${i}"></p></div>
            </div>

    
        `;

  container.appendChild(bloco);
}

function closessesion() {
  sessionStorage.clear();
}

function gerarTexto(dados, dadosquestao) {
  let texto = "";

  texto += `Matéria: ${dados.materia}\n`;
  texto += `Lista: ${dados.lista}\n`;
  texto += `Tipo: ${dados.tipoLista}\n`;
  texto += `Data: ${dados.data}\n\n`;
  texto += `Nível: ${dados.nivel}\n\n`;

  texto += "QUESTÕES\n";
  texto += "--------------------------------\n";

  dadosquestao.forEach((r) => {
    texto += `Q${r.questao} | Marcada: ${r.marcada} | Correta: ${r.correta ? r.correta : "-"} | ${r.resultado}\n`;
  });

  const acertos = dadosquestao.filter((r) => r.resultado === "V").length;

  texto += `Resultado final: ${acertos} / ${dadosquestao.length}\n`;

  return texto;
}

function baixarTXT(texto, nome) {
  const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = nome;
  a.click();

  URL.revokeObjectURL(url);
}

document
  .getElementById("form-questoes")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const dadosquestao = [];

    for (let T = numinicio, i = 1, j = numfim; T <= j; T++, i++) {
      const marcada = document.querySelector(`input[name="q${T}"]:checked`);
      const respostaUsuario = marcada ? marcada.value : "-";
      const correta = dados.gabarito[i - 1];

      dadosquestao.push({
        questao: T,
        marcada: respostaUsuario,
        correta: correta,
        resultado: respostaUsuario === correta ? "V" : "F",
      });
    }

    const nome = `${dados.data} - (${dados.nivel}) ${dados.materia} ${dados.lista}.txt`;
    const textofeito = gerarTexto(dados, dadosquestao);
    baixarTXT(textofeito, nome);
  });

const Passa = document.getElementById("PassaGabarito");
const Volta = document.getElementById("VoltaGabarito");
const Titulo = document.getElementById("NmrDaQuestaoTitulo");
const TamanhoDoGabarito = dados.gabarito.length;
let Numerodaquestão = numinicio;

const PutText = (NumeroQ) => {
  document.getElementById("gabarito-content").textContent =
    `${dados.gabarito[NumeroQ - numinicio]}`;
  Titulo.textContent = ` ${NumeroQ}`;
};

PutText(Numerodaquestão);

Passa.onclick = () => {
  if (Numerodaquestão - numinicio + 1 < TamanhoDoGabarito) {
    Numerodaquestão++;
  } else {
    Numerodaquestão = numinicio;
  }
  PutText(Numerodaquestão);
};

Volta.onclick = () => {
  if (Numerodaquestão > numinicio) {
    Numerodaquestão--;
  } else {
    Numerodaquestão = numinicio + TamanhoDoGabarito - 1;
  }
  PutText(Numerodaquestão);
};

const inputs = document.querySelectorAll('[type="radio"]');

inputs.forEach((input) => {
  input.addEventListener("click", function () {
    idModificado = this.id.split("-");
    NumeroId = Number(idModificado[1]);
    PutText(NumeroId);
    const GabaritoDaMarcada = dados.gabarito[NumeroId - numinicio];
    const selecionada = document.querySelector(
      `input[name="q${NumeroId}"]:checked`
    ).value;
    const box = document.getElementById(`T-${NumeroId}`);
    console.log(box);
    if (GabaritoDaMarcada === selecionada) {
      box.setAttribute("class", "certa");
      box.textContent = `Você acertou, a resposta era ${GabaritoDaMarcada}`;
    } else {
      box.setAttribute("class", "errada");
      box.textContent = `Você errou, a resposta era ${GabaritoDaMarcada} `;
    }
  });
});

const NInputs = document.querySelectorAll('input[type="checkbox"]');
NInputs.forEach((NInput) => {
  NInput.addEventListener("change", function () {
    const ID = this.id.replace("N", "");
    const ReferenciaDaOpcao = document.querySelector(
      `input[type="radio"]#${ID}`
    );

    if (this.checked) {
      ReferenciaDaOpcao.setAttribute("disabled", "");
      ReferenciaDaOpcao.classList.add("disable");
    } else {
      ReferenciaDaOpcao.classList.remove("disable");
      ReferenciaDaOpcao.removeAttribute("disabled");
    }
  });
});
