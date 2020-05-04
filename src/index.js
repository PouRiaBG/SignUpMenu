//define varible that we need 
//inputs
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const email = document.getElementById("email");

//helper span for error massage 

let userNameHelp = document.getElementsByClassName("username-help")[0];


// validation function 

const validation = () =>{
    // check if input is empty 
    if(ifIsEmpty(userName)) return;

    //check has only letters
    if(hasOnlyLetters(userName)) return ;

}

const ifIsEmpty = (field) =>{
    if(IsEmpty(field.value.trim())){
        invalidHelper(`The ${field.name} can not be empty!`)
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

const invalidHelper = (massage) =>{
    userNameHelp.style.display = "inline-block"
    userNameHelp.innerHTML = massage
}

const validHelper = (field)=>{
    userNameHelp.style.display = "none"
    userNameHelp.innerHTML = ""
}

const hasOnlyLetters = (field) =>{
    if(/^[a-zA-z]+$/.test(field.value)){
        validHelper(field)
    }else{
        invalidHelper(`The ${field.name} most has only letters`)
    }
}