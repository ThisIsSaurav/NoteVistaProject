// This script is for hamburger menu 
const menuBtn = document.querySelectorAll(".user-icon")
const hamMenu = document.getElementById("hamMenu")

menuBtn.forEach((element)=>{
    element.addEventListener("click",()=>{
        hamMenu.classList.toggle("display-none")
        hamMenu.style.left = "0px"
        hamMenu.style.animation = "hamAniIn 0.4s ease-in"
        element.classList.toggle("rotate-90")
    })
})
