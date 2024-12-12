// PAGINATION HANDLING

let mainSection = document.querySelectorAll(".mainSection");

let paging = document.querySelector(".paging");

mainSection.forEach((element, i) => {
  let pageSpan = document.createElement("span");
  pageSpan.classList.add("pageSpan");
  paging.appendChild(pageSpan);
});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let pageSpanAll = document.querySelectorAll(".pageSpan");

mainSection.forEach((element, i) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 60%",
      end: "bottom 60%",
      // markers:true,
      onEnter: () => {
        console.log("enter");

        $(".pageSpan").removeClass("activePageSpan");

        pageSpanAll[i].classList.add("activePageSpan");
      },
      onEnterBack: () => {
        console.log("enterback");

        $(".pageSpan").removeClass("activePageSpan");

        pageSpanAll[i].classList.add("activePageSpan");
      },
      onLeaveBack: () => {
        console.log("leavebeck");
        $(".pageSpan").removeClass("activePageSpan");

        pageSpanAll[i].classList.add("activePageSpan");
      },
      onLeave: () => {
        console.log("leave");
      },
    },
  });

  console.log(element.offsetTop);
});
gsap.registerPlugin(ScrollTrigger);

pageSpanAll.forEach((element, i) => {
  element.addEventListener("click", function (params) {
    lenis.scrollTo(`.section${i + 1}`, {
      // offset : -122,
    });
  });
});

// SCROLL TO TOP HANDLING

let defScrollTop = document.querySelector(".defScrollTop");
if (window.pageYOffset > 30) {
    footerScrollTop.style.transform = "scale(1)";
}
window.addEventListener("scroll", function (params) {
  if (this.window.pageYOffset > 100) {
    defScrollTop.style.transform = "scale(1)";
  } else {
    defScrollTop.style.transform = "scale(0)";
  }
});

gsap.to(".whiteSection", {
  scrollTrigger: {
    trigger: ".whiteSection",
    start: "top 80%",
    end: "bottom 80%",
    // markers: true,
    onEnter: () => {
      console.log("enter555");

      defScrollTop.classList.add("!bg-white");
      defScrollTop.querySelector("path").style.fill = "#434343";
    },
    onEnterBack: () => {
      console.log("enterback555");
      defScrollTop.classList.add("!bg-white");
      defScrollTop.querySelector("path").style.fill = "#434343";
    },
    onLeaveBack: () => {
      console.log("leavebak555");

      defScrollTop.classList.remove("!bg-white");
      defScrollTop.querySelector("path").style.fill = "white";
      defScrollTop.classList.remove("!bg-medium_gray");
    },
    onLeave: () => {
      console.log("leac555");

      defScrollTop.classList.remove("!bg-white");
      defScrollTop.classList.add("!bg-medium_gray");
      defScrollTop.querySelector("path").style.fill = "white";
    },
  },
});
defScrollTop.addEventListener("click" , function(params) {
    lenis.scrollTo(0, {
        // offset : -122,
      });
})
