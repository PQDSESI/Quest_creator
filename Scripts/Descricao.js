let updateButton;
let cancelButton;
let favDialog;

document.addEventListener("DOMContentLoaded", () => {
  updateButton = document.querySelectorAll(".DescricaoDaQuestao");
  cancelButton = document.getElementById("cancel");
  favDialog = document.getElementById("Descriçãodaquestao-dialog");
 
    updateButton.forEach((r) => {
      r.addEventListener("click", () => {
        favDialog.showModal();
      });
    });
  
    cancelButton.addEventListener("click", () => {
      favDialog.close();
    });
  
});

