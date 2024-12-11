const swiper = new Swiper(".swiper", {
    // ページネーションが必要なら追加
    pagination: {
        el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
            return '<span class="' + className + '">'+'<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">'+
                          '<circle class="path" cx="8" cy="8" r="6" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"'+
                          'stroke-opacity="1" stroke-width="4px"></circle>'+
                  '<circle cx="8" cy="8" r="6" class="circlesss" fill="#FFF"></circle>'+
                          '</svg></span>';
          },
  
      },
    effect: "coverflow",
    // grabCursor: false,
    centeredSlides: true,
    slidesPerView: "2",
    spaceBetween: 0,
	autoplay: {
        delay: 4000,
        waitForTransition: true,
        disableOnInteraction: false,
      },
  loop:true,
    coverflowEffect: {
      rotate: 0,
      stretch: 64,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
  
  });