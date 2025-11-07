// Seleciona todos os botões de alternância de tema com IDs que começam com "mode-"
const themeToggle = document.querySelectorAll('[id^="mode-"]');

// Adiciona um ouvinte de evento de clique a cada botão
themeToggle.forEach(button  => {

    // Seleciona o elemento de animação do título
    const titleAnimation = document.getElementById('animation');
    const boxSpaceTop = document.getElementById('box-space-top');
    
    // Define as classes de tema para o corpo e a animação com base no estado atual
    const bodyTheme = (document.body.classList.contains('theme-dark')) ? 'theme-light' : 'theme-dark';
    const animationTheme = (titleAnimation.classList.contains('animation-dark')) ? 'animation-light' : 'animation-dark';
    const boxSpaceTopTheme = (boxSpaceTop.classList.contains('outline-dark')) ? 'outline-light' : 'outline-dark';

    // Adiciona o ouvinte de evento de clique ao botão
   button.addEventListener('click', () => {
        // Verifica se o botão clicado é o de modo escuro
       const isDarkMode = button.id === 'mode-dark';

       // Alterna as classes de tema e atualiza a visibilidade dos ícones com base no modo selecionado
       if (isDarkMode) {

           document.body.classList.toggle(bodyTheme);
           titleAnimation.classList.toggle(animationTheme);
           boxSpaceTop.classList.toggle(boxSpaceTopTheme);

           document.getElementById('mode-light').classList.remove('hidden');
           document.getElementById('mode-light').classList.add('movingToLeft');

           document.getElementById('mode-dark').classList.add('hidden');
     

       } else {

           document.body.classList.toggle(bodyTheme);
           titleAnimation.classList.toggle(animationTheme);
           boxSpaceTop.classList.toggle(boxSpaceTopTheme);

           document.getElementById('mode-dark').classList.remove('hidden');


           document.getElementById('mode-light').classList.add('hidden');

           document.getElementById('mode-dark').classList.add('movingToRight');


     
       }

    });
});
