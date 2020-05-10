//define varible that we need 
//inputs
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const email = document.getElementById("email");

const form = document.getElementById("main-form");
//Handle the form 
form.addEventListener("submit",function(event){
    event.preventDefault();
})
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
const validateEmail = ()=>{
    if(ifIsEmpty(email)) return ;

    if(containValidAddress(email)) return;
    return true
}
// other 
const ifIsEmpty = (field) =>{
    if(IsEmpty(field.value.trim())){
        invalidHelper(field,`The ${field.name} can not be empty!`)
        return ;
    }else{
        validHelper(field)
        
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
        return true
    }else{
        invalidHelper(field,`The ${field.name} most has only letters`)
        return false
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
const containValidAddress = (field) =>{
    let rex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm
    if(rex.test(field.value)){
        validHelper(field)
        return true
    }else{
        invalidHelper(field ,  `The ${field.name} is not valid`)
        return false
    }
}