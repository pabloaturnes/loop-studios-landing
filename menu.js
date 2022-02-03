
const $menu = document.querySelector("header ul");
const $hamburguerButton = document.querySelector(".icon-hamburguer");
const $crossButton = document.querySelector(".icon-cross");
const $logo = document.querySelector(".logo");



$hamburguerButton.addEventListener("click", ()=>{

    $menu.classList.add("menu-active");
    $hamburguerButton.classList.add("icon-hidden")
    $crossButton.classList.add("icon-visible")
    $logo.classList.add("logo-visible")

})

$crossButton.addEventListener("click",()=>{
    $menu.classList.remove("menu-active");
    $hamburguerButton.classList.remove("icon-hidden")
    $crossButton.classList.remove("icon-visible")
    $logo.classList.remove("logo-visible");
})


















