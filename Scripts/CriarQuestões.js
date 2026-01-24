import { dados, numinicio, numfim, container } from "./Constantes.js";



function Cabeçalho() {
  document.getElementById("infoLista").innerText =
    `${dados.materia} - ${dados.lista} - ${dados.tipoLista} - ${dados.nivel}`;
}
function criarquestao() {
  for (let i = numinicio, j = numfim; i <= j; i++) {
    const bloco = document.createElement("div");
    bloco.style.marginBottom = "15px";

    bloco.innerHTML = `
           <div class = "opcoes-wrapp">
            
            <div class="opcoesecontainer">
            <strong>Questão ${i}</strong><br>
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
            <div class="avaliadordequestoes" >
              <label for="motivosdeerro"></label>
              <select class = "inputdeerro" id="AVL-${i}" name="erro" required>
              <option>#</option>
              <option value="atencao">💭</option>
                <option value="conteudo">🤔</option>
                <option value="dificuldade">👺</option>
                <option value="anulada">X</option>
              </select>
          </div>
            </div>

    
        `;

    container.appendChild(bloco);
  }
}

export { Cabeçalho, criarquestao };
