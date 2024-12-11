const gallerySlider = new Swiper('.gallerySlider', {
    speed:1000,
    loop: true,
  
   
    // Navigation arrows
    navigation: {
      nextEl: '.nextGallery',
      prevEl: '.prevGallery',
    },
  
  });


  let scrollTop = document.querySelectorAll(".scrollTop")
scrollTop.forEach(element => {
 gsap.from(element,{
     scrollTrigger:{
         trigger:element,
         start:"top 90%",
         end:"bottom bottom",
         // markers:true
     },
     y:"20vh",
     opacity:0,
     duration:1.5,
 })
});

// $('.section1').imagesLoaded( function() {
//     gsap.from(".section1 img",{
       
//         scale : 1.6,
//         ease: "expoScale(0.5,7,none)",
//         duration : 3,
//         // opacity:0,
//     })
//     gsap.from(".section1 .scroll1",{
       
//         y : "20vh",
//         duration : 1,
//         delay:1,
//         opacity:0,
//         stagger:0.1,
//     })
//   });

  let scrollAfter = document.querySelectorAll(".scrollAfter")
  scrollAfter.forEach(element => {
    gsap.to(element,{
        scrollTrigger:{
            trigger:element,
            start:"top 90%",
            end:"bottom bottom",
            // markers:true
            onEnter:()=>{
               element.classList.add("activeImgScroll")
                
            }
        },
      
    })
    gsap.from(element.querySelector("img"),{
        scrollTrigger:{
            trigger:element,
            start:"top 90%",
            end:"bottom bottom",
            // markers:true
           
        },
      scale:1.2,
      duration:2,
      delay:0.5,
    })
   });