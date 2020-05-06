//define varible that we need 
//inputs
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const email = document.getElementById("email");

//helper span for error massage 

let userNameHelp = document.getElementsByClassName("username-help")[0];
let passwordHelp = document.getElementsByClassName("username-help")[1];


// validators function 

const validateUserName = () =>{
    // check if input is empty 
    if(ifIsEmpty(userName)) return;

    //check has only letters
    if(hasOnlyLetters(userName)) return ;
    return true;
}

const validatePassword = () =>{
    //check if the password is empty
    if(ifIsEmpty(password)) return;

    //lenght of password
    if(checkPassLength(password,4,12)) return;
    return true;
    }
const validateConfirmPass = ()=>{
    if(password.value != confirmPass.value){
        invalidHelper(confirmPass,`The ${password.name} and ${confirmPass.name} most be same`)
        return
    }else{
        validHelper(confirmPass)
    }
    return true;
}

// other 
const ifIsEmpty = (field) =>{
    if(IsEmpty(field.value.trim())){
        invalidHelper(field,`The ${field.name} can not be empty!`)
        return true;
    }else{
        validHelper(field)
        return false;
    }
}

const IsEmpty = (value) => {
    if(value == ""){
        return true;
    }
    return false;
}

const invalidHelper = (field,massage) =>{
    let span = field.nextElementSibling
    span.style.display = "inline-block"
    span.innerHTML = massage
}

const validHelper = (field)=>{
    let span = field.nextElementSibling
    span.style.display = "none"
    span.innerHTML = ""
}

const hasOnlyLetters = (field) =>{
    if(/^[a-zA-z]+$/.test(field.value)){
        validHelper(field)
    }else{
        invalidHelper(field,`The ${field.name} most has only letters`)
    }
}

const checkPassLength = (field,min,max)=>{
    if(field.value.length <= max && field.value.length > min){
        validHelper(field)
        return true;
    }else{
        invalidHelper(field,`The ${field.name} most between 4 and 12.`)
        return false;
    }

}