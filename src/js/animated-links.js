function handleAnimatedNavigation(){
   
    const routeLinks = document.querySelectorAll('#main section ul li a');

    // O TEMPO DE ATRASO (1 segundo) DEVE CORRESPONDER ao transition: 1s do ::before no CSS.
    const REDIRECT_DELAY = 1000; // 1000ms = 1 segundo

    routeLinks.forEach(link => {
        const targetUrl = link.getAttribute('href');
        // Desabilita o link padrão
        link.setAttribute('href', '#'); 

        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede a navegação instantânea

            // Impede cliques múltiplos
            if (link.classList.contains('is-filled')) {
                return;
            }

            // 1. INICIA O EFEITO (Adiciona a classe)
            link.classList.add('is-filled');

            // 2. AGENDA O REDIRECIONAMENTO (Após o preenchimento)
            setTimeout(() => {
                window.location.href = targetUrl;
            }, REDIRECT_DELAY);
        });
    });
}


export { handleAnimatedNavigation }