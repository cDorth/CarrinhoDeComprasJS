let conteinerPagina = document.querySelector('.containerProduct');
let paginaDoProd = document.querySelector('.paginaDoProd');
let imagemProd = document.querySelector('.imagemProd');
let infoProd = document.querySelector('.infoProd');
let precoBtn = document.querySelector('.preco-btn');

let cartItem = document.querySelector('#product');



// Função para pegar o ID 
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}
const productId = getProductIdFromURL();

const jsonCerto = `json/prod${productId}.json`;
const jsonProdNum = `prod${productId}`;



fetch(jsonCerto).then((response) => {
    response.json().then((json) => {
      json.produtoSite.map((prod) => {
        let novaPaginaProd = document.createElement('div');
        novaPaginaProd.dataset.id = prod.id;
        novaPaginaProd.classList.add('pagProd');
        novaPaginaProd.innerHTML = `
        
        <div class="produtoImgInfo">

          <div class="imagemProd">
            <img src="imagem/${prod.id}.png" id="image" alt="...">
          </div>

          <div class="infoProd">
            <h1>${prod.nome}</h1>
            <p>${prod.descricao}</p>
              <div class="precoBtn">
                <span id="preco">R$${prod.preco},00</span>
                <button class="addCarrinho" data-id="${prod.id}">Adicionar no Carrinho</button>
              </div>
            </div>
        
        </div>

        <div class="especificao">
        <h1>Especificações Técnicas</h1>
        <br>
          <ul>
              <li>${prod.li1}</li>
              <li>${prod.li2}</li>
              <li>${prod.li3}</li>
              <li>${prod.li4}</li>
              <li>${prod.li5}</li>
          </ul>
        </div>

    `;
    paginaDoProd.appendChild(novaPaginaProd);
      });
    });
  });




//======================================================

console.log(productId); // Verificar se o ID está correto

