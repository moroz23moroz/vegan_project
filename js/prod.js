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

const openProdMenu = () => {
    const img = document.querySelector('.header__menu-img')

    img.addEventListener('click', (event) => {
        const mobile = document.querySelector('.header__mobile')
        mobile.classList.toggle("action")
    })
}

openProdMenu()


const closeMenu = () => {
    const close = document.querySelector('.menu__close')

    close.addEventListener('click', (event) => {
        const mobile = document.querySelector('.header__mobile')
        mobile.classList.remove("action")
    })
}

closeMenu()

const openSpoiler = () => {
    const tabs = document.querySelectorAll('.products__link')

    tabs.forEach((tab) => {
        tab.addEventListener('click', (event) => {
            const hidden = document.querySelector('.products__sub')
            hidden.classList.toggle("hidden")
        })
    })
}

openSpoiler()