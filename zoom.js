const lupaContainer = document.getElementById('lupaContainer');
             const zoomArea = document.getElementById('zoomArea');
             const zoomedImage = document.getElementById('zoomedImage');
     
             lupaContainer.addEventListener('mousemove', function(e) {
                 // Exibe a área de zoom ao passar o mouse
                 zoomArea.style.display = 'block';
     
                 // Pega as dimensões do container
                 const containerRect = lupaContainer.getBoundingClientRect();
     
                 // Calcula a posição do mouse relativa ao container
                 const x = e.clientX - containerRect.left;
                 const y = e.clientY - containerRect.top;
     
                 // Move a área de zoom para acompanhar o mouse
                 zoomArea.style.left = `${x - zoomArea.offsetWidth / 2}px`;
                 zoomArea.style.top = `${y - zoomArea.offsetHeight / 2}px`;
     
                 // Move a imagem dentro da área de zoom para criar o efeito de ampliação
                 zoomedImage.style.left = `${-x * 2 + zoomArea.offsetWidth / 2}px`;
                 zoomedImage.style.top = `${-y * 2 + zoomArea.offsetHeight / 2}px`;
             });
     
             // Esconde a área de zoom quando o mouse sair do container
             lupaContainer.addEventListener('mouseleave', function() {
                 zoomArea.style.display = 'none';
             });