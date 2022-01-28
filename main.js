document.querySelector('.fa-align-right').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.header__mobile__blocks');
    mobilemenu.style.top = "0"
    mobilemenu.style.borderRadius = "100px 0 0 50px"
    mobilemenu.style.borderLeft = "5px solid white"
})
document.querySelector('.fa-close').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.header__mobile__blocks');
    mobilemenu.style.top = "-200%"
    mobilemenu.style.borderRadius = "0px"
    mobilemenu.style.borderLeft = "0px solid white"
})