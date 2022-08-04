let elBtn = document.querySelector(".site-header__btn")
let siteNav = document.querySelector(".site-header__lists")

elBtn.addEventListener("click", ()=> {
    siteNav.classList.toggle("site-header__lists-on")
})
