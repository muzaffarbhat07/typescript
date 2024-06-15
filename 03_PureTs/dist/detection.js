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
