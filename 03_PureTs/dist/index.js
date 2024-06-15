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
        this._courseCount = 1;
        this.city = "kashmir";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const muzaffar2 = new User2("m@m.com", "muzaffar", 5465123);
class SubUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("story is created");
    }
}
//Abstract classes
class TakePhoto1 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculations
        return 8;
    }
}
// const photo1 = new TakePhoto1("test", "Test") //np
class Instagram1 extends TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
