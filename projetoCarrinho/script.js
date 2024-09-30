function mostrarCarrinho(){
    let carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.style.display = 'block'
}
function fecharCarrinho() {
    let carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.style.display = 'none'
}
function adicionarItens(botao) {
    let divEscolhida = botao.parentElement;
    let nome = divEscolhida.getElementsByTagName('li')[0].textContent;
    let preco = divEscolhida.getElementsByTagName('li')[1].textContent;
    let ul = document.getElementById('itens-carrinho');
    let li = document.createElement('li');
    li.innerHTML = `${nome} - ${preco} <button type="button" onclick="removerItens(this)"><i class="bi bi-x"></i></button>`
    ul.appendChild(li);
    li.style.color = 'black'
    li.style.textAlign = "left"
}
function removerItens(remover) {
    let divEscolhida = remover.parentElement;
    divEscolhida.remove();
}

function itensCarrinho(){
    //Criação de Variáveis
    let jogos = ['Fifa 25', 'Call Of Dutty', 'Gta 06', 'FarCry 06', 'One Piece Pirate Warriors'];
    let precos = ['380R$', '300R$', '400R$', '100R$', '50R$'];
    let imagens = ['/treino/projetoCarrinho/img/fifa25.png', '/treino/projetoCarrinho/img/cod06.jfif', '/treino/projetoCarrinho/img/gta06.jpg', '/treino/projetoCarrinho/img/farcry06.jpg', '/treino/projetoCarrinho/img/opr4.avif']
    let paiMain = document.getElementById('itens')

    for(let x = 0; x < jogos.length; x++){
        
    //Inserindo elementos nos itens
        //Criação da Div que recebe os itens
        let divItens = document.createElement('div')
        divItens.setAttribute("class", 'itens-div')
        paiMain.appendChild(divItens);
        //Criação da div da imagem que vai ficar em cima do nome:
        let tagImg = document.createElement('img')
        divItens.appendChild(tagImg)
        tagImg.setAttribute('src', `${imagens[x]}`)
        tagImg.setAttribute('alt', jogos[x]);  
        //Criação dos elementos
        let ul = document.createElement('ul');
        let liJogos = document.createElement('li');
        let liPrecos = document.createElement('li'); 
        divItens.appendChild(ul)
        ul.appendChild(liJogos);
        ul.appendChild(liPrecos);
        liJogos.textContent = jogos[x];
        liPrecos.textContent = precos[x];
        //Criação dos buttons
        let button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('id', 'button')
        button.setAttribute('onclick', 'adicionarItens(this)')
        button.textContent = 'Comprar'
        divItens.appendChild(button)
        button.style.textAlign = 'center'
        
    }
}
itensCarrinho()

function notificacaoCompra() {
    let btns = document.querySelectorAll('.itens-div button');
    let mainDiv = document.getElementById('itens');

    btns.forEach(btn => {
        btn.addEventListener('click', ( ) => {
            // Criação da notificação se ela não existir
            let notificacaoDiv = document.createElement('div');
            notificacaoDiv.setAttribute('class', 'notificacao-div');
            notificacaoDiv.textContent = 'Compra realizada com sucesso!';
            mainDiv.appendChild(notificacaoDiv);

            // Adiciona a classe que faz a notificação subir
            setTimeout(() => {
                notificacaoDiv.classList.add('ativo');
            }, 100);

            // Remove a notificação após 3 segundos
            setTimeout(() => {
                notificacaoDiv.classList.remove('ativo');
                setTimeout(() => {
                    notificacaoDiv.remove();
                }, 500); // Aguarda a transição de saída
            }, 3000); // Duração da notificação na tela
        });
    });
}
notificacaoCompra()


