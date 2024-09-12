//INDEX

itens.forEach(item => {
    produto.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');

        window.location.href = `paginaProd.html?id=${productId}`;
    });
});

// paginaProd


function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

const productId = getProductIdFromURL();

const product = products.find((p) => p.id == productId);

if (product) {
  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-description").innerText =
    product.description;
  document.getElementById("product-price").innerText = product.price;
} else {
  document.body.innerHTML = "<h1>Product not found</h1>";
}
