(() => {
  //////////////////////////////////////////// reviews swiper
  if(document.querySelector('[data-reviews-swiper]')) {
    const reviewsSwiper = new Swiper('[data-reviews-swiper]', {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1199: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 1,
        }
      }
    });
  };


  if(document.querySelector('[data-testimonials-swiper]')) {

    let initTestimonialSwiper = false;
    let testimonialsSwiper = null;

    const swiperMode = () => {
      console.log()

      if(document.documentElement.clientWidth < 767) {
        if(!initTestimonialSwiper) {
          testimonialsSwiper = new Swiper('[data-testimonials-swiper]', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });

          initTestimonialSwiper = true;
        }
      } else if(document.documentElement.clientWidth >= 767 && initTestimonialSwiper) {
        testimonialsSwiper.destroy();
        initTestimonialSwiper = false;
      }
    };

    swiperMode();
    
    //On Resize
    window.addEventListener('resize', swiperMode);
  }
})();
