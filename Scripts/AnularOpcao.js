

export default function AnularOpcao() {
const NInputs = document.querySelectorAll('input[type="checkbox"]');

NInputs.forEach((NInput) => {
  NInput.addEventListener("change", function () {
    const ID = this.id.replace("N", "");
    const ReferenciaDaOpcao = document.querySelector(
      `input[type="radio"]#${ID}`,
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
}