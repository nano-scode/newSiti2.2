const button = document.querySelector('.button');
const nav = document.querySelector('.nav');

button.addEventListener('click', function (event){
    button.classList.toggle('active');
    nav.classList.toggle('open');
});