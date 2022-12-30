username = document.getElementById("name");
fullnametxt = document.getElementById("fullnameTxt");
var name = '';
isValid = document.getElementById("validUserName")

password = document.getElementById("password")
confirmPassword = document.getElementById("Confirmpassword")
isValidPassword = document.getElementById("isValidPassword")

image = new Image();
isValidIcon = document.getElementById("isValidIcon")

username.addEventListener("focus", focusMode)
username.addEventListener("blur", loseFocus)
confirmPassword.addEventListener("blur", validatePassword)

function focusMode(){
    console.log("On focus mode!")
    username.style.border="solid 2px blue";
}

function validIcon(){
    var image = new Image();
    isValidIcon = document.getElementById("isValidIcon")
    isValidIcon.appendChild(image);
}

function loseFocus(){
    console.log("lose focus mode!")
    username.style.border="";
    name = username.value;

    if(!name || name.length < 3){
        isValid.innerText = "invalid name";
        username.style.border="solid 2px blue";
        username.style.backgroundColor = "gray"
       
        image.src = "ValidNotValidImages/notvalid.png";
        isValidIcon.appendChild(image);
        console.log(isValidIcon)
        /*$(document).ready(function() {
            $("input:text").focus(function() { $(this).select(); } );
        });*/

    }
    else{
        isValid.innerText = "";
        username.style.backgroundColor = "white";
        image.src = "ValidNotValidImages/valid.png";
        isValidIcon.appendChild(image);
        console.log(isValidIcon)
    }
}

function validatePassword(){
    valid = password.value == confirmPassword.value;
    if (!valid){
        isValidPassword.innerText = "password and repeat password should be the same";
    }
    else{
        isValidPassword.innerText = ""
    }
}

function rememberUser(){
    username = document.getElementById("name")
    localStorage.setItem("username", username.value);
}