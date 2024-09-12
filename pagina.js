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





//  Função para buscar dados do produto e adicionar à página
// fetch('produtos.json')
//   .then(response => response.json()) 
//   .then(data => {
    
//     const products = data.products;
//     const product = products.find((p) => p.id == productId);


//   })

// const addDataNaPagina = (produto) => {
//     let novaPaginaProd = document.createElement('div');
//     novaPaginaProd.dataset.id = produto.id;
//     novaPaginaProd.classList.add('pagProd');
//     novaPaginaProd.innerHTML = `
//         <div class="imagemProd">
//             <img src="${produto.imagem}" alt="">
//         </div>

//         <div class="infoProd">
//             <h1>${produto.nome}</h1>
//             <p>${produto.descricao}</p>
//         </div>

//         <div class="preco-btn">
//             <span id="preco">${produto.preco}</span>
//             <button class="addCarrinho" data-id="${produto.id}">Adicionar no Carrinho</button>
//         </div>
//     `;
//     paginaDoProd.appendChild(novaPaginaProd);
// };


console.log(productId); // Verificar se o ID está correto
console.log(products); // Verificar se os produtos estão sendo carregados
console.log(product); // Verificar se o produto correto está sendo encontrado

// app.js
