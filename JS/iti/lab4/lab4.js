username = document.getElementById("name");
fullnametxt = document.getElementById("fullnameTxt");
var name = '';
isValid = document.getElementById("validUserName")

password = document.getElementById("password")
confirmPassword = document.getElementById("Confirmpassword")
isValidPassword = document.getElementById("isValidPassword")


username.addEventListener("focus", focusMode)
username.addEventListener("blur", loseFocus)
confirmPassword.addEventListener("blur", validatePassword)

function focusMode(){
    console.log("On focus mode!")
    username.style.border="solid 2px blue";
}

function loseFocus(){
    console.log("lose focus mode!")
    username.style.border="";
    name = username.value;
    
    if(!name || name.length < 3){
        isValid.innerText = "invalid name";
        username.addEventListener("focus", function(){
            username.style.border="solid 2px blue";

        })

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
