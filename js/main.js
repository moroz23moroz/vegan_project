"use strict";

const smoothScroll = () => {
    const links = document.querySelectorAll('.menu-link')

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const section = document.querySelector(link.getAttribute('href'))

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        })
    })
}

smoothScroll()

const openMenu = () => {
    const burger = document.querySelector('.header__menu')

    burger.addEventListener('click', (event) => {
        const mobile = document.querySelector('.header__mobile')
        mobile.classList.toggle("action")
    })
}

openMenu()

const closeMenu = () => {
    const close = document.querySelector('.menu__close')

    close.addEventListener('click', (event) => {
        const mobile = document.querySelector('.header__mobile')
        mobile.classList.remove("action")
    })
}

closeMenu()

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-left',
        prevEl: '.swiper-button-right',
    },
});