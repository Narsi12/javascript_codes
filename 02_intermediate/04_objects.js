// const tinderUser = new Object() // singletorn object

const tinderUser = {}

tinderUser.id = "1234hdj"
tinderUser.name = "narsimha"
tinderUser.isLoggedIn = false



// console.log(tinderUser);

const regularUser = {
    email: "sameWgmail.com",
    fullname:{
        userFullName:{
            firstname:"Narsimha",
            lastname:"ch"
        }
    }
}

//console.log(regularUser.fullname.userFullName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2) // documents style
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"k@gmail.com"
    },{
        id:3,
        email:"hfd@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename :"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
const {courseInstructor: instaructor} = course // courseintrsctor : instructor is a aliase name used in log
console.log(instaructor)



