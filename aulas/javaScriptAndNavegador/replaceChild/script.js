let elementoNovo = document.createElement("p");
let textoNovo = document.createTextNode("Algum texto ai")
elementoNovo.appendChild(textoNovo)
let newA = document.createElement('a')
newA.innerText = "Eu sou demais"
let h2 = document.querySelector('h2');
let elementoPai = h2.parentNode;
elementoPai.replaceChild(elementoNovo, h2)
elementoPai.appendChild(newA);
