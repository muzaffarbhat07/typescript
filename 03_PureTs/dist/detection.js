"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide if");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        //typeof (array of strings or even array) is object
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else {
            console.log(strs);
        }
    }
}
//in operator narrowing
function isAdminAccount(account) {
    // if(account.isAdmin) //np
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//instaneof narrowing: used with types created using 'new' keyword
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function isFish2(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; //ts is still not sure whether pet is Fish or Bird because isFis returns boolean
        console.log("fish food");
    }
    else {
        pet; //ts is still not sure whether pet is Fish or Bird
        console.log("bird food");
    }
    if (isFish2(pet)) {
        pet; //now ts is sure because isFish2 returns Fish
        console.log("fish food");
    }
    else {
        pet;
        console.log("bird food");
    }
}
