var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-navigation .swiper-button-next",
    prevEl: ".swiper-navigation .swiper-button-prev",
  },
});