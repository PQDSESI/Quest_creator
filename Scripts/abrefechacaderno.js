import { caderno,Exit,Deletar,Editar,Retornar,Prosseguir,notebook } from "./constantes01.js";
import { PlotarCaderno,ExcluirTextos } from "./PlotarCaderno.js";
let Contador = 0
let Notas = JSON.parse(localStorage.getItem("Notas")) || [];
let QdtsdeTextos = Notas.length;
notebook.onclick = () => {
    PlotarCaderno(Contador);
    caderno.style.display = "flex"
}
Exit.onclick = () => {
    caderno.style.display = "none";
    Contador = 0
}

Prosseguir.onclick = () => { 
    Contador < QdtsdeTextos -1 ? Contador++ : Contador = 0 
    PlotarCaderno(Contador);
}

Retornar.onclick = () => {
    Contador === 0 ? Contador = QdtsdeTextos -1 : Contador-- 
    PlotarCaderno(Contador)
}
Deletar.onclick = () => {
    Notas = ExcluirTextos(Contador);
    QdtsdeTextos = Notas.length;

    if (Contador >= QdtsdeTextos) {
      Contador = QdtsdeTextos - 1;
    }

    if (QdtsdeTextos === 0) {
      caderno.style.display = "none";
      return;
    }

    PlotarCaderno(Contador);
}

