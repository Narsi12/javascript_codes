const marvel_heros = ["spiderman","yhor","ironman"]
const dc_heros = ["superman","flash","batman","narsimha"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const combineArray = marvel_heros.concat(dc_heros)
// console.log(combineArray);

// const all_new = [...marvel_heros,...dc_heros]
// console.log(all_new)

const another_arry = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const simha = another_arry.flat(Infinity)
console.log(simha)

console.log(Array.isArray("narsimha"))
console.log(Array.from("narsimha"))
console.log(Array.from("narsimha")) // interesting objects array like keys and values

let core1 = 100
let core2 = 200
let core3 = 300
console.log(Array.of(core1,core2,core3));
