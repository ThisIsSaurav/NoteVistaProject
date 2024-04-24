const eyeBtn = document.querySelectorAll(".eyeBtn")
const loginRegisterPass = document.querySelectorAll(".loginRegisterPass")
const eyepic = document.querySelectorAll(".eye-pic")

eyeBtn[0].addEventListener("click",()=>{
    if (loginRegisterPass[0].type == "password") {
        loginRegisterPass[0].type = "text"
        eyepic[0].src = "img/eye-icon.svg"
        
    }
    else{
        loginRegisterPass[0].type = "password"
        eyepic[0].src = "img/hide-eye-icon.png"
    }
})
eyeBtn[1].addEventListener("click",()=>{
    if (loginRegisterPass[1].type == "password") {
        loginRegisterPass[1].type = "text"
        eyepic[1].src = "img/eye-icon.svg"
    }
    else{
        loginRegisterPass[1].type = "password"
        eyepic[1].src = "img/hide-eye-icon.png"
    }
})