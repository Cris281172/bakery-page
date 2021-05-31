const arrow = document.querySelector(`.arrow`);
const menuElement = document.querySelectorAll(`[data-menu]`);

scroll = e => {
    if(e.target.dataset.menu === `1`){
        document.querySelector(`.main_header`).scrollIntoView({ behavior: "smooth"});
    }
    if(e.target.dataset.menu === `2`){
        document.querySelector(`.welcome_article`).scrollIntoView({behavior: "smooth"});
    }
    if(e.target.dataset.menu === `3`){
        document.querySelector(`.our_baking`).scrollIntoView({behavior: "smooth"});
    }
    if(e.target.dataset.menu === `4`){
        document.querySelector(`.our_blog`).scrollIntoView({behavior: "smooth"});
    }
    if(e.target.dataset.menu === `5`){
        document.querySelector(`.lemon_cake_article`).scrollIntoView({behavior: "smooth"});
    }
    if(e.target.dataset.menu === `6`){
        document.querySelector(`.service`).scrollIntoView({behavior: "smooth"});
    }
    if(e.target.dataset.menu === `7`){
        document.querySelector(`.contact_us`).scrollIntoView({behavior: "smooth"});
    }

}

window.onscroll = () => slides();

console.log(window.height )

const slides = e => {

    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        document.querySelector(`.welcome_article`).style.animationName = `slideUp`;
        document.querySelector(`.welcome_article`).style.opacity = `1`
    }

    if(document.body.scrollTop > 650 || document.documentElement.scrollTop > 650){
        document.querySelector(`.cooking_article`).style.animationName = `slideRight`;
        document.querySelector(`.cooking_article`).style.opacity = `1`
    }

    if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
        document.querySelector(`.our_baking`).style.animationName = `slideOpacity`;
        document.querySelector(`.our_baking`).style.opacity = `1`
    }
    if(document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200){
        document.querySelector(`.lemon_cake_article`).style.animationName = `slideUp`;
        document.querySelector(`.lemon_cake_article`).style.opacity = `1`
    }

    if(document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700){
        document.querySelector(`.service`).style.animationName = `slideRight`;
        document.querySelector(`.service`).style.opacity = `1`
    }

    if(document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100){
        document.querySelector(`.gallery`).style.animationName = `slideOpacity`;
        document.querySelector(`.gallery`).style.opacity = `1`
    }

    if(document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900){
        document.querySelector(`.our_blog`).style.animationName = `slideUp`;
        document.querySelector(`.our_blog`).style.opacity = `1`
    }

    if(document.body.scrollTop > 4600 || document.documentElement.scrollTop > 4600){
        document.querySelector(`.contact_us`).style.animationName = `slideRight`;
        document.querySelector(`.contact_us`).style.opacity = `1`
    }

    if(document.body.scrollTop > 5400 || document.documentElement.scrollTop > 5400){
        document.querySelector(`.contact_us_details`).style.animationName = `slideOpacity`;
        document.querySelector(`.contact_us_details`).style.opacity = `1`
    }

    if(document.body.scrollTop > 6200 || document.documentElement.scrollTop > 6200){
        document.querySelector(`.find_us`).style.animationName = `slideUp`;
        document.querySelector(`.find_us`).style.opacity = `1`
    }

    if(document.body.scrollTop > 6800 || document.documentElement.scrollTop > 6800){
        document.querySelector(`.main_footer`).style.animationName = `slideRight`;
        document.querySelector(`.main_footer`).style.opacity = `1`
    }
}

menuElement.forEach(el => el.addEventListener(`click`,scroll));


