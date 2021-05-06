var iconSearch = document.querySelector(".header__icon-search");
var headerSearch = document.querySelector(".header__search");
iconSearch.addEventListener("click", function (event) {
    headerSearch.classList.toggle("show-input-search-mobile");
})
// sidebars-mobile
var iconMenu = document.querySelector(".header__icon-menu");
var sidebars = document.querySelector(".sidebars-mobile");
iconMenu.addEventListener("click", function (event) {
    sidebars.classList.toggle("show-sidebars-mobile");
})





var categoryMenus = document.querySelectorAll(".sidebars__title i");
console.log(categoryMenus)
var categoriesMenus = document.querySelectorAll(".sidebars__categories")
console.log(categoriesMenus)

for (let i = 0; i < categoryMenus.length; i++) {
    let countClick = 0;
    console.log(i)
    categoryMenus[i].addEventListener("click", function () {
        categoriesMenus[i].classList.toggle("show-sidebars-categories");
        countClick++;
        if (countClick % 2 === 1) {
            categoryMenus[i].className = "fas fa-chevron-down";
            console.log(i);
        }
        else {
            categoryMenus[i].className = "fas fa-chevron-right";
            console.log(i);
        }
    })
}
// console.log(i);
function showModal(item, form ) {
    let itemClick = document.querySelector(item)
    let modalOverlay = document.querySelector(".modal__overlay")
    let modalForm = document.querySelector(form)
    let modal = document.querySelector(".modal")
    let html = document.querySelector("html")

    console.log(item)
    itemClick.addEventListener("click", function () {
        modalOverlay.style.display = "block";
        modalForm.style.display = "block"
     
        modal.style.display = "flex"

        html.style.overflowY = "hidden";
    })
    modalOverlay.addEventListener("click", function () {
        console.log("click")
        modalForm.style.display = "none"
        modalOverlay.style.display = "none"
        modal.style.display="none"
        html.style.overflowY = "visible";
    })
}
showModal(".js-register", ".modal__inner-register")
showModal(".js-login", ".modal__inner-login")
function switchModal(current, currentModal, newModal) {
    let currentElement = document.querySelector(current)
    let currentModalElement = document.querySelector(currentModal)
    let newModalElement = document.querySelector(newModal)
    currentElement.addEventListener("click", function () {
        currentModalElement.style.display = "none"
        newModalElement.style.display = "block"
    })
}
switchModal(".switch-login", ".modal__inner-register", ".modal__inner-login")
switchModal(".switch-register", ".modal__inner-login", ".modal__inner-register")
