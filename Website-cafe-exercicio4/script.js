// window.addEventListener("load", () => {
//     // console.log( document.querySelector("header")    )
    
//     let header = document.querySelector("header")
//     let textbox = document.querySelector(".textbox")

//     setInterval(() => {
        
//     }, 1000);

//     header.style.backgroundImage = "url(./assets/nathan-dumlao-KixfBEdyp64-unsplash.jpg)"
//     textbox.children[0].innerHTML = "A"
//     textbox.children[1].innerHTML = "A"

// })

// Area main start

window.addEventListener("load", () => {
    
})

const cardapioButtons = document.querySelectorAll(".listButtons")
console.log( typeof cardapioButtons)

cardapioButtons.forEach(element => {
    element.addEventListener("click", (a) =>{
        if(document.querySelector("#section-2").style.display == "none"){
            document.querySelector("#section-1").style.display = "none"
            document.querySelector("#section-2").style.display = "flex"
        }else{
            document.querySelector("#section-1").style.display = "flex"
            document.querySelector("#section-2").style.display = "none"
        }
    })
});

// Area main end 