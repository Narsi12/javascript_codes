// sigleton
// object.create
// objects liternals

const mysym = Symbol("key1")

const jsUser = {
    name : "narsimha",
    [mysym]:"mykey1",
    age: 23,
    loxation: "hyd",
    email: "a@gmail.com",
    isLoggedIn: false,
    lastloginDay:["monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log( jsUser[mysym]);


// jsUser.email = "bb@gamil.com"
// Object.freeze(jsUser)
// jsUser.email = "chnarsimha986@gmail.com"
// console.log(jsUser)


jsUser.greeting = function(){
    console.log(`hello ${this.name}`)
}
console.log(jsUser.greeting());











