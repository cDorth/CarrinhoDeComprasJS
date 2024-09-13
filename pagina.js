let conteinerPagina = document.querySelector('.containerProduct');
let paginaDoProd = document.querySelector('.paginaDoProd');
let imagemProd = document.querySelector('.imagemProd');
let infoProd = document.querySelector('.infoProd');
let precoBtn = document.querySelector('.preco-btn');

let cartItem = document.querySelector('#product');



// Função para pegar o ID 
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    return params.get("id");
}
const productId = getProductIdFromURL();

const jsonCerto = `json/prod${productId}.json`;
const jsonProdNum = `prod${productId}`;

console.log(jsonCerto)
console.log(jsonProdNum)

fetch(jsonCerto).then((response) => {
    response.json().then((json) => {
      json.produtoSite.map((prod) => {
        let novaPaginaProd = document.createElement('div');
        novaPaginaProd.dataset.id = prod.id;
        novaPaginaProd.classList.add('pagProd');
        novaPaginaProd.innerHTML = `
        
            <div class="imagemProd">
            <img src="${prod.imagem}" alt="">
        </div>

        <div class="infoProd">
            <h1>${prod.nome}</h1>
            <p>${prod.descricao}</p>
        </div>

        <div class="preco-btn">
            <span id="preco">${prod.preco}</span>
            <button class="addCarrinho" data-id="${prod.id}">Adicionar no Carrinho</button>
        </div>
        
    `;
    paginaDoProd.appendChild(novaPaginaProd);
      });
    });
  });




//======================================================

console.log(productId); // Verificar se o ID está correto