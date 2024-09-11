
//FUNÇÃO DO ODAKE

let conteinerPagina = document.querySelector('.containerProduct');
let paginaDoProd = document.querySelector('.paginaDoProd');
let imagemProd = document.querySelector('.imagemProd');
let infoProd = document.querySelector('.infoProd');
let preco-btn = document.querySelector('.preco-btn');

let cartItem = document.querySelector('#item');


const addDataNaPagina = () => {
    if (produtos.length > 0) {
        produtos.forEach(produto => {
            let novaPaginaProd = document.createElement('div');
            novaPaginaProd.dataset.id = produto.id;
            novaPaginaProd.classList.add('pagProd');
            novaPaginaProd.innerHTML =
                `<div class="imagemProd">
                <img src="${produto.imagem}" alt="">
            </div>

            <div class="infoProd">
                <h1>${produto.nome}</h1>
                <p>${produto.descricao}</p>
            </div>

            <div class="preco-btn">
                <span id="preco">${produto.preco}</span>
                <button class="addCarrinho" data-id="${produto.id}">Adicionar no Carrinho</button>
            </div>`
            paginaDoProd.appendChild(novaPaginaProd);

        });
    }

}
cartItem.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCarrinho')) {
        let id_produto = positionClick.parentElement.dataset.id;
        addNoCarrinho(id_produto);
    }
})
const addNoCarrinho = (produto_id) => {
    let posicaoDoProdutoNoCarrinho = Carrinho.findIndex((value) => value.produto_id == produto_id);
    if (Carrinho.length <= 0) {
        Carrinho = [{
            produto_id: produto_id,
            quantidade: 1
        }];
    } else if (posicaoDoProdutoNoCarrinho < 0) {
        Carrinho.push({
            produto_id: produto_id,
            quantidade: 1
        });
    } else {
        Carrinho[posicaoDoProdutoNoCarrinho].quantidade = Carrinho[posicaoDoProdutoNoCarrinho].quantidade + 1;
    }
    addCarrinhoNoHTML();
    addCarrinhoNaMemoria();