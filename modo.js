// Seleciona o elemento switch (o botão do tema)
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
const toggleText = document.querySelector('.toggle-text'); //  Obtém o  texto  do  label 

// Verifica o modo inicial armazenado no localStorage
const currentTheme = localStorage.getItem('theme');

// Aplica o modo inicial caso ele esteja disponível no localStorage
if (currentTheme) {
  body.classList.add(currentTheme);
  // Define o texto do botão com base no modo 
  toggleText.innerText =  currentTheme ===  "dark-mode"  ?  "Tema Claro" :  "Tema Escuro"; 

  // Define a caixa de seleção com base no modo 
  themeSwitch.checked = currentTheme === 'dark-mode'; 
}

// Adiciona um ouvinte de evento ao switch (clique) 
themeSwitch.addEventListener('change', () => {
  // Se a classe "dark-mode" estiver no `body` (modo escuro ativo)
  if (body.classList.contains('dark-mode')) { 
    // Remove a classe, muda para o modo claro
    body.classList.remove('dark-mode'); 
    localStorage.setItem('theme', 'light-mode'); 
    toggleText.innerText = 'Tema Escuro'; 
  } else {
    //  Se o modo claro estiver ativo, mude para o modo escuro
    body.classList.add('dark-mode'); 
    localStorage.setItem('theme', 'dark-mode');
    toggleText.innerText = 'Tema Claro';
  }
});