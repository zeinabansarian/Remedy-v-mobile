
let footerScrollTop = document.querySelector(".footerScrollTop")
footerScrollTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
if (window.pageYOffset > 30) {
    footerScrollTop.style.transform = "scale(1)";
}
window.addEventListener("scroll", function (params) {
    if (this.window.pageYOffset > 30) {
      footerScrollTop.style.transform = "scale(1)";
    } else {
      footerScrollTop.style.transform = "scale(0)";
    }
  });