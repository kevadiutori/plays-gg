function loginPlay(){
    document.getElementById("loginoverlay").style.display = "flex"

}

document.getElementById("loginPlays").addEventListener("click", loginPlay)

function signUpPlay(){
    document.getElementById("signupoverlay").style.display = "flex"

}

document.getElementById("sign-up").addEventListener("click", signUpPlay)







function loginPlayClose(){
    document.getElementById("loginoverlay").style.display = "none"

}

document.getElementById("close").addEventListener("click", loginPlayClose)

function signupPlayClose(){
    document.getElementById("signupoverlay").style.display = "none"

}

document.getElementById("close1").addEventListener("click", signupPlayClose)
