"use strict";

const smoothScroll = () => {
  const links = document.querySelectorAll(".menu-link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const section = document.querySelector(link.getAttribute("href"));

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    });
  });
};

smoothScroll();

const openMenu = () => {
  const burger = document.querySelector(".header__menu");

  burger.addEventListener("click", (event) => {
    const mobile = document.querySelector(".header__mobile");
    mobile.classList.toggle("action");
  });
};

openMenu();

const closeMenu = () => {
  const close = document.querySelector(".menu__close");

  close.addEventListener("click", (event) => {
    const mobile = document.querySelector(".header__mobile");
    mobile.classList.remove("action");
  });
};

closeMenu();

const swiper = new Swiper(".swiper", {
  autoplay: {
    loop: true,
    delay: 3000
  },
  slidesPerView: 2,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".mob-arr__right",
        prevEl: ".mob-arr__left",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    },
    968: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1015: {
      spaceBetween: 50,
      navigation: {
        nextEl: ".swiper-button-right",
        prevEl: ".swiper-button-left",
      },
    },
    1270: {
      spaceBetween: 60,
    },
    1385: {
      spaceBetween: 90,
    },
  },
});
