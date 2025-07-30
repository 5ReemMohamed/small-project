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

   const scrollBtn = document.getElementById("scrollTopBtn");
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };