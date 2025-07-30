  const swiper = new Swiper('.swiper', {
    rtl: true,
    loop: true,
    spaceBetween: 20,

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 2
      },
     
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });