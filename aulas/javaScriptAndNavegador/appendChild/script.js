let elementoNovo = document.createElement("p");
let textoNovo = document.createTextNode("Novo texto filho da div")
elementoNovo.appendChild(textoNovo);
let tituloParent = document.querySelector('.titulo');
let elementoPai = tituloParent.parentNode;
elementoPai.appendChild(elementoNovo)

