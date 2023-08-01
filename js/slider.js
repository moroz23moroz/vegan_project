$(document).ready(function () {
  $(".swiper-wrapper").slick({
    dots: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    infinite: false,
    variableWidth: true,
    nextArrow: ".swiper-button-right",
    prevArrow: ".swiper-button-left",
    responsive: [
      {
        breakpoint: 1176,
        settings: {
          dots: true,
          nextArrow: ".mob-arr__right",
          prevArrow: ".mob-arr__left",
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  });
});
