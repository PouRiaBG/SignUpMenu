"use strict";

//define varible that we need 
//inputs
var userName = document.getElementById("userName");
var password = document.getElementById("password");
var confirmPass = document.getElementById("confirmPass");
var email = document.getElementById("email");

//helper span for error massage 

var userNameHelp = document.getElementsByClassName("username-help")[0];
var passwordHelp = document.getElementsByClassName("username-help")[1];

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
        invalidHelper(confirmPass, "The " + password.name + " and " + confirmPass.name + " most be sam");
        return;
    } else {
        validHelper(confirmPass);
    }
    return true;
};

// other 
var ifIsEmpty = function ifIsEmpty(field) {
    if (IsEmpty(field.value.trim())) {
        invalidHelper(field, "The " + field.name + " can not be empty!");
        return true;
    } else {
        validHelper(field);
        return false;
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
    } else {
        invalidHelper(field, "The " + field.name + " most has only letters");
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
