const dados = JSON.parse(sessionStorage.getItem("dadosLista"));

if (!dados) {
    alert("Dados da lista não encontrados.");
    window.location.href = "index.html";
}

document.getElementById("infoLista").innerText =
    `${dados.materia} - ${dados.lista} - ${dados.tipoLista} - ${dados.nivel}`;

    const container = document.getElementById("questoes-container");
    const numinicio = dados.inicio;
    const numfim = dados.fim;

    const total = Number(numfim - numinicio +1);

    for (let i =  numinicio, j = numfim ; i <= j; i++) {

        const bloco = document.createElement("div");
        bloco.style.marginBottom = "15px";
    
        bloco.innerHTML = `
            <strong>Questão ${i}</strong><br>
            <div class="opcoes">
            <label>
                <input type="radio"  name="q${i}" value="A"> A
            </label>
    
            <label>
                <input type="radio" name="q${i}" value="B"> B
            </label>
    
            <label>
                <input type="radio" name="q${i}" value="C"> C
            </label>
    
            <label>
                <input type="radio" name="q${i}" value="D"> D
            </label>
    
            <label>
                <input type="radio" name="q${i}" value="E"> E
            </label>
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

    dadosquestao.forEach(r => {
        texto += `Q${r.questao} | Marcada: ${r.marcada} | Correta: ${r.correta ? r.correta : "-"} | ${r.resultado}\n`;
    });

    const acertos = dadosquestao.filter(r => r.resultado === "V").length;

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

document.getElementById("form-questoes").addEventListener("submit", function (e) {
    e.preventDefault();

    const dadosquestao = [];

    for (let T =  numinicio,i = 1 , j = numfim ; T <= j; T++, i++) {

        const marcada = document.querySelector(`input[name="q${T}"]:checked`);
        const respostaUsuario = marcada ? marcada.value : "-";
        const correta = dados.gabarito[i - 1];

        dadosquestao.push({
            questao: T,
            marcada: respostaUsuario,
            correta: correta,
            resultado: respostaUsuario === correta ? "V" : "F"
        });
       
    }

    const nome = `${dados.data} - (${dados.nivel}) ${dados.materia} ${dados.lista}.txt`
    const textofeito = gerarTexto(dados, dadosquestao);
    baixarTXT(textofeito,nome);
});

