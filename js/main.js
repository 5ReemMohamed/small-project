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
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = navbarCollapse.contains(event.target);
    const isClickOnToggle = navbarToggler.contains(event.target);
    if (!isClickInsideMenu && !isClickOnToggle && navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });