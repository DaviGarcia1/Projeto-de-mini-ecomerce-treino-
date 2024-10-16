//Função para adicionar a foto na div
function adicionarFoto() {
    let divFoto = document.querySelector('.usuario-img-Pai');
    let inputFoto = document.querySelector('#usuario-img');
    
    inputFoto.addEventListener('change', function() {
        if (inputFoto.files.length > 0) {
            let file = inputFoto.files[0];
            let imagem = document.createElement('img');
            
            // Criando uma URL temporária para exibir a imagem
            let imageUrl = URL.createObjectURL(file);
            imagem.setAttribute('src', imageUrl);
            imagem.setAttribute('id', 'imagem-preview');
            imagem.style.height = '100%';
            imagem.style.width = '100%';

            // Verifica se já existe uma imagem e a substitui
            let imgExistente = document.querySelector('#imagem-preview');
            if (imgExistente) {
                divFoto.replaceChild(imagem, imgExistente);
            } else {
                divFoto.appendChild(imagem);
            }
        }
    });
}

adicionarFoto();

function voltar(){
    let botaoVoltar = document.querySelectorAll('.usuario-ul-button')[2];
    botaoVoltar.addEventListener('click', function(){
        window.location.href = '/projetoCarrinho/pages/home/home.html'
    })
}
voltar();

