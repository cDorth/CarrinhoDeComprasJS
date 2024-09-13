const temaEscuro = document.getElementById('temaEscuro');
const temaEstilo = document.getElementById('temaEstilo'); 
const tema = document.getElementById('tema'); 
const slide1 = document.getElementById('slide1'); 
const slide2 = document.getElementById('slide2'); 
const slide3 = document.getElementById('slide3'); 

temaEscuro.addEventListener('change', () => {
  if (temaEscuro.checked) { 
    temaEstilo.href = 'dark.css'; 
    tema.textContent = "Tema Escuro";
    slide1.src = 'imagem/slide-1Dark.svg';
    slide2.src = 'imagem/slide-2Dark.svg';
    slide3.src = 'imagem/slide-3Dark.svg';
  } else { 
    temaEstilo.href = 'style.css'; 
    tema.textContent = "Tema Claro";
    slide1.src = 'imagem/slide-1.svg';
    slide2.src = 'imagem/slide-2.svg';
    slide3.src = 'imagem/slide-3.svg';
  }
});