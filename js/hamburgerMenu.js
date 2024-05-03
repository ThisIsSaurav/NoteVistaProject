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

//WOKKING ON THIS!!!!!!!    
// menuBtn.forEach((element)=>{
//     element.addEventListener("click",()=>{
//         if(hamMenu.classList.contains("display-none")){
//             hamMenu.style.animation = "hamAniIn 0.4s ease-in"
//         }
//         else{
//             hamMenu.style.animation = "hamAniOut 0.4s"
//         }
//         hamMenu.classList.toggle("display-none")
//         hamMenu.style.left = "0px"
//         element.classList.toggle("rotate-90")
//     })
// })

