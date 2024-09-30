let link =  document.querySelector('a');

console.log(link.getAttribute('href'));

let linkYoutube = "https://www.youtube.com"

link.setAttribute('href', linkYoutube)
console.log(link.getAttribute('href'))

link.setAttribute('class', 'link2')
console.log(link.getAttribute('class'))