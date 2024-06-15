"use strict";
function identitiy1(val) {
    return val;
}
//making it general
function identitiy2(val) {
    return val;
}
// but this can have problems, it can accept string but return number
function identitiy3(val) {
    return val;
}
//now once u pass an arg, both arg type and return type is locked
identitiy3(3);
identitiy3("3");
identitiy3(true);
//short-cut: it can be any letter
function identitiy4(val) {
    return val;
}
//syntax if u r passing own data types
identitiy4({ brand: "aqua", type: 4 });
//arrays in generics
function getSearchProducts(products) {
    //do some operations
    const foundIndex = 3;
    return products[foundIndex];
}
//arrow functions
const getMoreSearchProducts = (products) => {
    //do some operations
    const foundIndex = 4;
    return products[foundIndex];
};
//objects
function anotherFn(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFn(2, "abc");
function anotherFn2(val1, val2) {
    return {
        val1,
        val2
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
