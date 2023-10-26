// animação menu mobile
const ulMobile = document.querySelector("header > nav > ul")
const liMobile = document.querySelectorAll("header > nav > ul > li ")
const barMobile = document.querySelector("#navMobile")
const logo = document.querySelector("#logo")
const navMobile = document.querySelector("#navMobile")
navMobile.addEventListener("click", () => {

    ulMobile.style.flexDirection = "column"
    barMobile.style.display = "none"
    liMobile.forEach((e) => {
        e.style.display = "flex"
    })
    ulMobile.classList.toggle("ulMobile")
})
const linksNav = document.querySelectorAll("header > nav > ul > li > a")
linksNav.forEach(element => {
    element.addEventListener("click", fechaMobile )
});
const exitNavMobile = document.querySelector("#endnavmobile")
exitNavMobile.addEventListener("click", (e) => {
    ulMobile.style.flexDirection = "row"
    barMobile.style.display = "flex"
    liMobile.forEach((e) => {
        e.style.display = "none"
    })
    ulMobile.classList.toggle("ulMobile")

    logo.style.display = "flex"
    navMobile.parentElement.style.display = " flex"
})

function fechaMobile() {
    ulMobile.style.flexDirection = "row"
    barMobile.style.display = "flex"
    liMobile.forEach((e) => {
        e.style.display = "none"
    })
    ulMobile.classList.toggle("ulMobile")

    logo.style.display = "flex"
    navMobile.parentElement.style.display = " flex"
} 
