const data = document.querySelector('#data');
const hoje = new Date().toISOString().split("T")[0];
data.value = hoje;


document
  .getElementById("form-descricao")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const subject = document.querySelector(
      'input[name="subject"]:checked'
    ).value;

    const gabarito = document.getElementById("gabarito").value;

    const gabaritocomarray = gabarito
      .split("-")
      .map((letra) => letra.trim().toUpperCase());

    const dadosLista = {
      materia: subject,
      lista: document.getElementById("detail").value,
      data: document.getElementById("data").value,
      tipoLista: document.getElementById("typels").value,
      nivel: document.getElementById("level").value,
      gabarito: gabaritocomarray,
      inicio: document.getElementById("questaoinicio").value,
      fim: document.getElementById("questaofim").value,
    };

    sessionStorage.setItem("dadosLista", JSON.stringify(dadosLista));

    // vai para a página das questões
    window.location.href = "Quest_creator/Htmls/Lista.html";
  });



