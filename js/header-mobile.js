let openProMega = document.querySelector(".openProMega")
let innerMegaList = document.querySelector(".innerMegaList")
let innerMegaListIn = document.querySelectorAll(".innerMegaList>ul>li")
let innerMega2 = document.querySelectorAll(".innerMega2")
let megaMenuContainer = document.querySelector(".megaMenuContainer")
let closeMegaMenu = document.querySelector(".closeMegaMenu")
let menuBar = document.querySelector("header .menuBar")
let header = document.querySelector("header")
let openHeader = document.querySelector(".openHeader")

menuBar.addEventListener("click" , function (params) {
    megaMenuContainer.classList.add("openMega")
    header.style.opacity="0"
    openHeader.style.opacity="1"
})
closeMegaMenu.addEventListener("click" , function (params) {
    megaMenuContainer.classList.remove("openMega")
    header.style.opacity="1"
    openHeader.style.opacity="0"
})

openProMega.addEventListener("click" , function (params) {
    innerMegaList.classList.toggle("openinnerMegaList")
    openProMega.classList.toggle("rotateArrow")

})

innerMega2.forEach(element => {
    if (!element.querySelector("ul li")) {
        element.parentElement.querySelector(".innerOpen").remove()
    }
});


let innerOpen = document.querySelectorAll(".innerOpen")
innerOpen.forEach(element => {
    element.addEventListener("click" , function (params) {
        console.log("click");
        element.parentElement.parentElement.parentElement.querySelector(".innerMega2").classList.toggle("openinnerMegaList")
        element.classList.toggle("rotateArrow")
        
    })
    
    
});