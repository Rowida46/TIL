"use strict";
/*
    ** Types or val
    * multi-types allowed using `|`
    * interface type is allowed
    * Let's create some alianse type like `type ID = number;`
    * as we can see void type is just like `null` or undefined
*/
const foo = null; // no worries
let foo2 = undefined; // no worries
let id = 2;
let names = ["Dana", "Roiwda"]; // list of alians types
let val = 1;
let val2 = null; // custom type
let val3 = "null";
const dana = {
    name: "Dana"
};
const user2 = {
    name: "Roiwda",
    age: 20,
};
const usr3 = {
    name: "Anas",
    age: 20,
};
console.log(user2.age, usr3.name, usr3.name);
