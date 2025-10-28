// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint.

const id = Symbol('123');
const otherid = Symbol('123');
console.log(id === otherid);

const bigNumber = 12432423454563n
console.log(typeof bigNumber)

// Reference(Non-primitives)
// Array, Objects, Functions

const names = ["Ram", "Sham", "Ajay"];

let myObject = {
    name: "dgcgdg",
    age: 23,
}

const myFunction = function() {
    console.log("hello mam");
}
console.log(typeof myFunction)
console.log(typeof myObject)