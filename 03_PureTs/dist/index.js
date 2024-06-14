"use strict";
console.log("typescript is here");
console.log("typescript is amazing");
//CLASSES
class User {
    constructor(email, name) {
        this.city = "kashmir";
        this.email = email;
        this.name = name;
    }
}
const muzaffar = new User("m@m.com", "muzaffar");
// muzaffar.city = "kashmir" //np
// muzaffar.name
//different syntax
class User2 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "kashmir";
    }
}
const muzaffar2 = new User2("m@m.com", "muzaffar", 5465123);
