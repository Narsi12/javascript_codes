//array

const myArr = [0,23,4,5,6,7,55]
const heros = ["narsimha","spiderman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//arrays Methods

// myArr.push(677)
// myArr.pop(677)

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(23))
// console.log(myArr.indexOf(23))

const newArr = myArr.join()

// console.log(  newArr)
// console.log(myArr);

//slice , splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);
