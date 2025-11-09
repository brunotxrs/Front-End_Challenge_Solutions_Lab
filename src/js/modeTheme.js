
function modeTheme() {

        // Seleciona todos os botões de alternância de tema com IDs que começam com "mode-"
    const themeToggle = document.querySelectorAll('[id^="mode-"]');

    const linksDark = document.querySelectorAll('.links-dark');
    const linksLight = document.querySelectorAll('.links-light');

    const aDark = document.querySelectorAll('.a-dark');
    const aLight = document.querySelectorAll('.a-light');

    const linkFooterDark = document.querySelectorAll('.link-footer-dark');
    const linkFooterLight = document.querySelectorAll('.link-footer-light');

    const linkFooter = document.querySelectorAll('.link-footer');
    const linksFooterLight = document.querySelectorAll('.link-footer-light');

    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    // Adiciona um ouvinte de evento de clique a cada botão
    themeToggle.forEach(button  => {

        // Seleciona o elemento de animação do título
        const titleAnimation = document.getElementById('animation');
        const boxSpaceTop = document.getElementById('box-space-top');
        
        // Define as classes de tema para o corpo e a animação com base no estado atual
        const bodyTheme = (document.body.classList.contains('theme-dark')) ? 'theme-light' : 'theme-dark';
        const animationTheme = (titleAnimation.classList.contains('animation-dark')) ? 'animation-light' : 'animation-dark';
        const boxSpaceTopTheme = (boxSpaceTop.classList.contains('outline-dark')) ? 'outline-light' : 'outline-dark';

        const headerTheme = (header.classList.contains('border-bottom-dark')) ? 'border-bottom-light' : 'border-bottom-dark';
        const footerTheme = (footer.classList.contains('border-top-dark')) ? 'border-top-light' : 'border-top-dark';   

        // Adiciona o ouvinte de evento de clique ao botão
    button.addEventListener('click', () => {
            // Verifica se o botão clicado é o de modo escuro
        const isDarkMode = button.id === 'mode-dark';

        // Alterna as classes de tema e atualiza a visibilidade dos ícones com base no modo selecionado
        if (isDarkMode) {
            header.classList.toggle(headerTheme);
            footer.classList.toggle(footerTheme);

            document.body.classList.toggle(bodyTheme);
            titleAnimation.classList.toggle(animationTheme);
            boxSpaceTop.classList.toggle(boxSpaceTopTheme);

            document.getElementById('mode-light').classList.remove('hidden');
            document.getElementById('mode-light').classList.add('movingToLeft');

            document.getElementById('mode-dark').classList.add('hidden');

            linksDark.forEach(link => {
                link.classList.remove('links-dark');
                link.classList.add('links-light');
            });

            linksLight.forEach(link => {
                link.classList.remove('links-light');
                link.classList.add('links-dark');
            });

            aDark.forEach(link => {
                link.classList.remove('a-dark');
                link.classList.add('a-light');
            });

            aLight.forEach(link => {
                link.classList.remove('a-light');
                link.classList.add('a-dark');
            });

            linkFooterDark.forEach(link => {
                link.classList.remove('link-footer-dark');
                link.classList.add('link-footer-light');
            });

            linkFooterLight.forEach(link => {
                link.classList.remove('link-footer-light');
                link.classList.add('link-footer-dark');
            });

            linkFooter.forEach(link => {
                link.classList.remove('link-footer');
                link.classList.add('links-footer-light');
            });

            linksFooterLight.forEach(link => {
                link.classList.remove('links-footer-light');
                link.classList.add('link-footer');
            });

        

        } else {

            header.classList.toggle(headerTheme);
            footer.classList.toggle(footerTheme);

            document.body.classList.toggle(bodyTheme);
            titleAnimation.classList.toggle(animationTheme);
            boxSpaceTop.classList.toggle(boxSpaceTopTheme);

            document.getElementById('mode-dark').classList.remove('hidden');


            document.getElementById('mode-light').classList.add('hidden');

            document.getElementById('mode-dark').classList.add('movingToRight');


            linksDark.forEach(link => {
                link.classList.remove('links-light');
                link.classList.add('links-dark');
            });

            linksLight.forEach(link => {
                link.classList.remove('links-dark');
                link.classList.add('links-light');
            });

            aDark.forEach(link => {
                link.classList.remove('a-light');
                link.classList.add('a-dark');
            });

            aLight.forEach(link => {
                link.classList.remove('a-dark');
                link.classList.add('a-light');
            });


            linkFooterDark.forEach(link => {
                link.classList.remove('link-footer-light');
                link.classList.add('link-footer-dark');
            });

            linkFooterLight.forEach(link => {
                link.classList.remove('link-footer-dark');
                link.classList.add('link-footer-light');
            });


            linkFooter.forEach(link => {
                link.classList.remove('links-footer-light');
                link.classList.add('link-footer');
            });

            linksFooterLight.forEach(link => {
                link.classList.remove('link-footer');
                link.classList.add('links-footer-light');
            });


        
        }

        });
    });


}

export { modeTheme };