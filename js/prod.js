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
    const hiddens = document.querySelectorAll('.products__sub')

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('products__link-active')) {
                tab.classList.remove('products__link-active');
                hiddens[index].classList.add('hidden');
            } else {
                hiddens.forEach((hidden) => {
                    hidden.classList.add('hidden');
                });
                tabs.forEach((tab) => {
                    tab.classList.remove('products__link-active');
                });
                hiddens[index].classList.remove('hidden');
                tab.classList.add('products__link-active');
            }
        })
    })
}

openSpoiler()