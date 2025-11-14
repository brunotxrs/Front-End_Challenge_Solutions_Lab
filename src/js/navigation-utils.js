function returnToIndex() {
    const myBtnToBack = document.getElementById('back-page-index');
    const indexHtml = '../../index.html'

    const REDIRECT_DELAY = 1000;

    if (myBtnToBack) {

        myBtnToBack.addEventListener('click', function(event){

            event.preventDefault();

            
            if(myBtnToBack.classList.contains('filled-left')){
                return;
            }

            myBtnToBack.classList.add('filled-left');


            setTimeout(() => {

                window.location.href = indexHtml; 

            }, REDIRECT_DELAY);

        });
    }
}

function returnToPageLogic(){

    const myBtnToBack = document.getElementById('back-page-logic');
    const indexHtml = '../../01_Logica_de_Programacao/01_Logica_de_Programacao.html'

    const REDIRECT_DELAY = 1000;

    if (myBtnToBack) {

        myBtnToBack.addEventListener('click', function(event){

            event.preventDefault();

            
            if(myBtnToBack.classList.contains('filled-left')){
                return;
            }

            myBtnToBack.classList.add('filled-left');


            setTimeout(() => {

                window.location.href = indexHtml; 

            }, REDIRECT_DELAY);

        });
    }

}

export { returnToIndex, returnToPageLogic };