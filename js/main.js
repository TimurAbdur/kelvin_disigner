const nav = document.querySelector('.nav');
const button = document.querySelector('.nav-button');
const buttonImg = document.querySelector('.nav-button img');

button.addEventListener('click', () => {
    if(nav.classList.toggle('open')) {
        buttonImg.src = "../imgs/icons/NAV CLOSE.svg";
        document.body.style.cssText = "overflow-y: hidden";
    }
    else {
        buttonImg.src = "../imgs/icons/NAV.svg";
        document.body.style.cssText = "overflow-y: auto";
    }
});


AOS.init({
    once: true,
});
