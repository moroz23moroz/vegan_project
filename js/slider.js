$(document).ready(function () {
  $(".swiper-wrapper").slick({
    dots: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    infinite: false,
    variableWidth: true,
    nextArrow: '.swiper-button-right',
    prevArrow: '.swiper-button-left',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          variableWidth: false,
          nextArrow: '.mob-arr__right',
          prevArrow: '.mob-arr__left',
        },
      },
    ],
  });
});
