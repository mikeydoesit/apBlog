let loader = document.querySelector('.loader');
let main = document.querySelector('main');

function load() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 5000);
}

load();