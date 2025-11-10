function returnPageIndex() {
    const myBtnToBack = document.getElementById('back-page-index');

    if (myBtnToBack) {

        myBtnToBack.addEventListener('click', () => {

            window.location.href = '/'; 
        });
    }
}

export { returnPageIndex };

