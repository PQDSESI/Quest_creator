import Quill from "https://cdn.jsdelivr.net/npm/quill@1.3.7/+esm";

const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: true,
  },
  placeholder: "Descreva sua questão",
  theme: "snow",
});

const SubmeterDescricao = document.getElementById("Descriçãodaquestao-form");
export const Textosquil = JSON.parse(sessionStorage.getItem("Textos") || "[]");

export function inserinumerodaquestaonotexto() {
  const Dialog = document.getElementById("Descriçãodaquestao-dialog");
  const Dialogs = document.querySelectorAll(".DescricaoDaQuestao");
  Dialogs.forEach((elemento) => {
    const ID = elemento.id.replace("DE-", "");
    elemento.addEventListener("click", () => {
      quill.insertText(0, `Questão ${ID}\n`, { bold: true });
    });
    Dialog.addEventListener("close", () => {
      quill.setText("");
    });
  });
}

SubmeterDescricao.addEventListener("submit", (e) => {
  e.preventDefault();
  const delta = quill.getContents();
  Textosquil.push(delta);
  sessionStorage.setItem("Textos", JSON.stringify(Textosquil));
  document.getElementById("Descriçãodaquestao-dialog").close();
});
