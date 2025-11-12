function returnToIndex() {
    const myBtnToBack = document.getElementById('back-page-index');
    const indexHtml = '../../index.html'

    if (myBtnToBack) {

        myBtnToBack.addEventListener('click', () => {

            window.location.href = indexHtml; 
        });
    }
}

export { returnToIndex };