import { modeTheme } from './modeTheme.js';
import {  handleAnimatedNavigation  } from './animated-links.js';
import { returnToIndex, returnToPageLogic } from './navigation-utils.js';

function initializationApp(){
    modeTheme() // função de modos do tema Escuro ou Claro
    
    handleAnimatedNavigation() // função de animação de elementos links


    returnToIndex() // função das subPages para retorna ao index.html 

    returnToPageLogic() // função das subPages para retorna ao page Logica de Programação.
    
}


export { initializationApp }