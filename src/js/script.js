function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

document.querySelector('.menu__burger').addEventListener('click', () => {
    const button = document.querySelector('.menu__burger');
    const menu = document.querySelectorAll('.header-row');
    if (!button.classList.contains('menu__burger_active')) {
        button.classList.add('menu__burger_active');
        menu.forEach(item => {
            item.style.display = 'block';
        });
    }
    else {
        button.classList.remove('menu__burger_active');
        menu.forEach(item => {
            item.style.display = 'none';
        });
    }
})