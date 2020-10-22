var openToggler = document.querySelector(".mobileBar");
var closeToggler = document.querySelector(".menuClose");
var menu = document.querySelector(".menu")
var overlay = document.querySelector(".overlay");
var opacity1 = document.querySelector(".opacity1");
openToggler.addEventListener("click", function() {
    menu.style.transform = "translateX(0)"
    overlay.classList.add("opacity1")
})
closeToggler.addEventListener("click", function() {
    menu.style.transform = "translateX(25rem)"
    overlay.classList.remove("opacity1")
})
overlay.addEventListener("click", function() {
    menu.style.transform = "translateX(25rem)"
    overlay.classList.remove("opacity1")
})