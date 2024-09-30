let caracteresDigito = /\d \d \d \d/; //Qualquer digito de caractere
let alfaNumericos = /\w \w \w \w \w/ //Um caractere alfanumerico ("teste");
let caracterEmBranco = /\s \s \s \s \s/  //Qualquer caractere com espaço em branco;
let caracterNaoDigito = /\D \D \D \D/;  //Caracteres que não sejam digitos;
let naoAlfaNumericos = /\W \W \W \W \W/; //Caracteres que não sejam alfanúmericos;
let caracterNaoEmBranco = /\S \S \S \S \S/ //Caracteres que não sejam espaços em brancos;
let coringa = /\. \. \. \. \./ //Qualquer caractere, menos nova linha;

console.log(caracteresDigito.test("921"))
