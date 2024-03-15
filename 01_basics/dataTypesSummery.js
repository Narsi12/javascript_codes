// Primitive

// 7 types : String,Number,boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 29897327378776n



// reference (non primitive)

// Arrays, Objects, Functions

const heros = ["narsimha","chellaboina","spiderman"]
let myobj = {
    name : "narsimha",
    age : 23,
}

const myfunction = function (){
    console.log("hello wolrd");
}

console.log(typeof myfunction);