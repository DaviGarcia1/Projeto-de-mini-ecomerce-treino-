let elementoCriado = document.createElement('p');
let texto = document.createTextNode("Rebolaaaaaaaaaa")
elementoCriado.appendChild(texto);
let elementoAlvo = document.querySelector('.titulo');
let elementoPai = document.querySelector('.container-pai');
elementoPai.insertBefore(elementoCriado, elementoAlvo);

console.log(elementoPai.childNodes)
