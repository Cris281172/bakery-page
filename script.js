const arrow = document.querySelector(`.arrow`);
const menuElement = document.querySelectorAll(`.main_header`);
const hamburgerMenu = document.querySelector('.hamburger_menu')
const menu = document.querySelector('.menu')
const arrowUp = document.querySelector('.arrow_up')
const scroll = e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: "smooth"})
}

const activeMobileMenu = () => {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
}

const visibleArrowUp = () => {
    if(window.pageYOffset  > 250){
        arrowUp.classList.add('active');
    }
    else{
        arrowUp.classList.remove('active');
    }
}

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
visibleArrowUp()
menuElement.forEach(el => el.addEventListener(`click`,scroll));
hamburgerMenu.addEventListener('click', activeMobileMenu)
document.addEventListener('scroll', visibleArrowUp)
arrowUp.addEventListener('click', scrollToTop)
