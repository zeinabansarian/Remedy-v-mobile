const thumbsSlider = new Swiper('.thumbsSlider', {
    // Optional parameters
    loop: true,
  
  speed:1000,
    // Navigation arrows
    navigation: {
      nextEl: '.nextThumb',
      prevEl: '.prevThumb',
    },
    slidesPerView: 3,
    spaceBetween: 20,
  
 
  });




  const imgsSlider = new Swiper('.imgsSlider', {
    speed:1000,
    loop: true,
    thumbs: {
        swiper: thumbsSlider
      }
  });