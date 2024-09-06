let listaProdutosHTML = document.querySelector('.listaProdutos');
let listaCarrinhoHTML = document.querySelector('.listaCarrinho');
let iconCarrinho = document.querySelector('.iconeCarrinho');
let iconCarrinhoSpan = document.querySelector('.iconeCarrinho span');
let body = document.querySelector('body');
let fecharCarrinho = document.querySelector('.fechar');
let produtos = [];
let Carrinho = [];


iconCarrinho.addEventListener('click', () => {
    body.classList.toggle('mostrarCarrinho');
})
fecharCarrinho.addEventListener('click', () => {
    body.classList.toggle('mostrarCarrinho');
})

    const addDataNoHTML = () => {

        // add novo datas
        if(produtos.length > 0) // if has data
        {
            produtos.forEach(produto => {
                let novoproduto = document.createElement('div');
                novoproduto.dataset.id = produto.id;
                novoproduto.classList.add('item');
                novoproduto.innerHTML = 
                `<img src="${produto.imagem}" alt="">
                <h2>${produto.nome}</h2>
                <div class="preco">$${produto.preco}</div>
                <button class="addCarrinho">adicionar no Carrinho</button>`;
                listaProdutosHTML.appendChild(novoproduto);
            });
        }
    }
    listaProdutosHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCarrinho')){
            let id_produto = positionClick.parentElement.dataset.id;
            addNoCarrinho(id_produto);
        }
    })
const addNoCarrinho = (produto_id) => {
    let posicaoDoProdutoNoCarrinho = Carrinho.findIndex((value) => value.produto_id == produto_id);
    if(Carrinho.length <= 0){
        Carrinho = [{
            produto_id: produto_id,
            quantidade: 1
        }];
    }else if(posicaoDoProdutoNoCarrinho < 0){
        Carrinho.push({
            produto_id: produto_id,
            quantidade: 1
        });
    }else{
        Carrinho[posicaoDoProdutoNoCarrinho].quantidade = Carrinho[posicaoDoProdutoNoCarrinho].quantidade + 1;
    }
    addCarrinhoNoHTML();
    addCarrinhoNaMemoria();
}
const addCarrinhoNaMemoria = () => {
    localArmaz.setItem('Carrinho', JSON.stringify(Carrinho));
}
const addCarrinhoNoHTML = () => {
    listaCarrinhoHTML.innerHTML = '';
    let totalquantidade = 0;
    if(Carrinho.length > 0){
        Carrinho.forEach(item => {
            totalquantidade = totalquantidade +  item.quantidade;
            let novoItem = document.createElement('div');
            novoItem.classList.add('item');
            novoItem.dataset.id = item.produto_id;

            let positionproduto = produtos.findIndex((value) => value.id == item.produto_id);
            let info = produtos[positionproduto];
            listaCarrinhoHTML.appendChild(novoItem);
            novoItem.innerHTML = `
            <div class="imagem">
                    <img src="${info.imagem}">
                </div>
                <div class="nome">
                ${info.nome}
                </div>
                <div class="totalpreco">$${info.preco * item.quantidade}</div>
                <div class="quantidade">
                    <span class="minus"><</span>
                    <span>${item.quantidade}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    iconCarrinhoSpan.innerText = totalquantidade;
}

listaCarrinhoHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let produto_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changequantidadeCarrinho(produto_id, type);
    }
})
const changequantidadeCarrinho = (produto_id, type) => {
    let positionItemInCarrinho = Carrinho.findIndex((value) => value.produto_id == produto_id);
    if(positionItemInCarrinho >= 0){
        let info = Carrinho[positionItemInCarrinho];
        switch (type) {
            case 'plus':
                Carrinho[positionItemInCarrinho].quantidade = Carrinho[positionItemInCarrinho].quantidade + 1;
                break;
        
            default:
                let changequantidade = Carrinho[positionItemInCarrinho].quantidade - 1;
                if (changequantidade > 0) {
                    Carrinho[positionItemInCarrinho].quantidade = changequantidade;
                }else{
                    Carrinho.splice(positionItemInCarrinho, 1);
                }
                break;
        }
    }
    addCarrinhoNoHTML();
    addCarrinhoNaMemoria();
}

const initApp = () => {
    // get data produto
    fetch('produtos.json')
    .then(response => response.json())
    .then(data => {
        produtos = data;
        addDataNoHTML();

        // get data Carrinho from memory
        if(localArmaz.getItem('Carrinho')){
            Carrinho = JSON.parse(localArmaz.getItem('Carrinho'));
            addCarrinhoNoHTML();
        }
    })
}
initApp();