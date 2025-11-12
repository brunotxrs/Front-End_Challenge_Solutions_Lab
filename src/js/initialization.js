import { modeTheme } from './modeTheme.js';
import {  handleAnimatedNavigation  } from './animated-links.js';
import { returnToIndex } from './navigation-utils.js';

function initializationApp(){
    modeTheme() // função de modos do tema Escuro ou Claro
    
    handleAnimatedNavigation() // função de animação de elementos links


    returnToIndex() // função das subPages para retorna ao index.html 
    
}


export { initializationApp }