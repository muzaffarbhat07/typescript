"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
addTwo(5);
addTwo("5");
function addTwoCorrect(num) {
    // num.toUpperCase()
    return num + 2;
}
addTwoCorrect(5);
// addTwoCorrect("5")
function signUpUser(name, email, isPaid) { }
signUpUser(1, 2, 3);
function signUpUserCorrect(name, email, isPaid) { }
signUpUserCorrect("Muzaffar", "muzaffar@gmail.com", true);
//DEFAULT VALUE
var signInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signInUser("Muzaffar", "muzaffar@gmail.com");
//RETURN TYPE
function getAddVal(num) {
    // return "hello"
    return num + 2;
}
var val = 6 + getAddVal(5);
//RETURN TYPE IN ARROW FUNCTIONS
var getHello = function (s) {
    return "";
};
//'never' means never returning any value. Used when fn thows an exception or terminates the program
var handleError = function (errmsg) {
    throw Error(errmsg);
};
