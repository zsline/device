$(function () {
$('.menu__btn').on('click', function () {
  $('.menu__box').toggleClass('menu__box-active');
});
  $('.head__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    fade: true,
  });
});