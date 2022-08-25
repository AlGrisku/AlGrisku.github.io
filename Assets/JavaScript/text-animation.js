const text = document.querySelector('.text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Welcome";
    }, 0);

    setTimeout(() => {
        text.textContent = "Bienvenido";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Willkommen";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000)