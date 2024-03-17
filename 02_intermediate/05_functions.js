function myname (){
    console.log("Narsimha")
}
// myname()


// function addtwonums(a,b){
//     let x =  a+b
//     console.log(x);

// }

function addtwonums(a,b){
    // let x =  a+b
    // return x
    return a+b

}

const res = addtwonums(10,20)
console.log("result: ",res);


function loginUserMessage(username = "sam"){ // default value if no value is provided then if lock is not executed
    if (!username){
        console.log("Please enter the username");
        return 
    }
    return `${username} just loggedin`
}
console.log(loginUserMessage())


function calculateCarPrice(val1,val2, ...num1){
    return num1
}
// console.log(calculateCarPrice(200,300,400));


const user = {
    username:"narsimha",
    price:999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const newarray = [200,400,600,800]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(newarray))





