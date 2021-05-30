
const arrow = document.querySelector(`.arrow`);
const menuElement = document.querySelectorAll(`[data-menu]`);

scroll = e => {
    if(e.target.dataset.menu === `1`){
        document.querySelector(`.main_header`).scrollIntoView({ behavior: 'smooth'});
    }
    if(e.target.dataset.menu === `2`){
        document.querySelector(`.welcome_article`).scrollIntoView({ behavior: 'smooth'});
    }
    if(e.target.dataset.menu === `3`){
        document.querySelector(`.cooking_article`).scrollIntoView({ behavior: 'smooth'});
    }
    if(e.target.dataset.menu === `4`){
        document.querySelector(`.our_baking`).scrollIntoView({ behavior: 'smooth'});
    }
    if(e.target.dataset.menu === `5`){
        document.querySelector(`.lemon_cake_article`).scrollIntoView({ behavior: 'smooth'});
    }
    if(e.target.dataset.menu === `6`){
        document.querySelector(`.service`).scrollIntoView({ behavior: 'smooth'});
    }
    if(e.target.dataset.menu === `7`){
        document.querySelector(`.contact_us`).scrollIntoView({ behavior: 'smooth'});
    }

}

menuElement.forEach(el => el.addEventListener(`click`,scroll));


const scrollToUp = e => {
    document.querySelector(`.main_header`).scrollIntoView({ behavior:'smooth'});
}

arrow.addEventListener(`click`, scrollToUp);

