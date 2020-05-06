"use strict";

//define varible that we need 
//inputs
var userName = document.getElementById("userName");
var password = document.getElementById("password");
var confirmPass = document.getElementById("confirmPass");
var email = document.getElementById("email");

// validators function 

var validateUserName = function validateUserName() {
    // check if input is empty 
    if (ifIsEmpty(userName)) return;

    //check has only letters
    if (hasOnlyLetters(userName)) return;
    return true;
};

var validatePassword = function validatePassword() {
    //check if the password is empty
    if (ifIsEmpty(password)) return;

    //lenght of password
    if (checkPassLength(password, 4, 12)) return;
    return true;
};
var validateConfirmPass = function validateConfirmPass() {
    if (password.value != confirmPass.value) {
        invalidHelper(confirmPass, "The " + password.name + " and " + confirmPass.name + " most be same");
        return;
    } else {
        validHelper(confirmPass);
    }
    return true;
};
var validateEmail = function validateEmail() {
    if (ifIsEmpty(email)) return;

    if (containValidAddress(email)) return;
    return true;
};
// other 
var ifIsEmpty = function ifIsEmpty(field) {
    if (IsEmpty(field.value.trim())) {
        invalidHelper(field, "The " + field.name + " can not be empty!");
        return;
    } else {
        validHelper(field);
    }
};

var IsEmpty = function IsEmpty(value) {
    if (value == "") {
        return true;
    }
    return false;
};

var invalidHelper = function invalidHelper(field, massage) {
    var span = field.nextElementSibling;
    span.style.display = "inline-block";
    span.innerHTML = massage;
};

var validHelper = function validHelper(field) {
    var span = field.nextElementSibling;
    span.style.display = "none";
    span.innerHTML = "";
};

var hasOnlyLetters = function hasOnlyLetters(field) {
    if (/^[a-zA-z]+$/.test(field.value)) {
        validHelper(field);
        return true;
    } else {
        invalidHelper(field, "The " + field.name + " most has only letters");
        return false;
    }
};

var checkPassLength = function checkPassLength(field, min, max) {
    if (field.value.length <= max && field.value.length > min) {
        validHelper(field);
        return true;
    } else {
        invalidHelper(field, "The " + field.name + " most between 4 and 12.");
        return false;
    }
};
var containValidAddress = function containValidAddress(field) {
    var rex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    if (rex.test(field.value)) {
        validHelper(field);
        return true;
    } else {
        invalidHelper(field, "The " + field.name + " is not valid");
        return false;
    }
};
