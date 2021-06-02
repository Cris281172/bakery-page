const arrow = document.querySelector(`.arrow`);
const menuElement = document.querySelectorAll(`.main_header`);

const scroll = e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: "smooth"})
}

const detectElementInViewport = el => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

const slides = e => {
    document.querySelectorAll(`[data-animate]`).forEach(element =>{
        if(detectElementInViewport(element)){
            element.style.animationName = element.dataset.animate;
            element.style.opacity = 1;
        }
    })
}

let timeout;

window.addEventListener('scroll', () => {


    clearTimeout(timeout);
    timeout = setTimeout(slides, 100);
    slides()
});

menuElement.forEach(el => el.addEventListener(`click`,scroll));


