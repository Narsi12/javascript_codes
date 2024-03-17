const name = "narsimha"
const repoCount = 50

console.log(name+repoCount+"value")

console.log(`hello my name is ${name} and my repo id is ${repoCount}`);

const gameName = new String('narsimha')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));
const sample = gameName.substring(0,4)
console.log((sample));

const sample1 = gameName.slice(-6,4)
console.log(sample1);

const newname = "    narsimhach           "
console.log(newname);
console.log(newname.trim());

const url = "hhtps;//google.com%20sjdj"
console.log(url.replace('%20','-'))
console.log(url.includes('google'))