"use strict";

//define varible that we need 
//inputs
var userName = document.getElementById("userName");
var password = document.getElementById("password");
var confirmPass = document.getElementById("confirmPass");
var email = document.getElementById("email");

//helper span for error massage 

var userNameHelp = document.getElementsByClassName("username-help")[0];

// validation function 

var validation = function validation() {
    // check if input is empty 
    if (ifIsEmpty(userName)) return;

    if (hasOnlyLetters(userName)) return;
};

var ifIsEmpty = function ifIsEmpty(field) {
    if (IsEmpty(field.value.trim())) {
        invalidHelper("The " + field.name + " can not be empty!");
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

var invalidHelper = function invalidHelper(massage) {
    userNameHelp.style.display = "inline-block";
    userNameHelp.innerHTML = massage;
};

var validHelper = function validHelper(field) {
    userNameHelp.style.display = "none";
    userNameHelp.innerHTML = "";
};

var hasOnlyLetters = function hasOnlyLetters(field) {
    if (/^[a-zA-z]+$/.test(field.value)) {
        validHelper(field);
    } else {
        invalidHelper("The " + field.name + " most has only letters");
    }
};
