const accountID = 12221
let accountEmail = "narsimha@gmail.com"
var accountPassword = "12345"
accountCity = "Hyderabad"

let accountState;

// accountID = 2 // not allowed

accountEmail = "hcl@gmail.com"
accountPassword = "narsimha"
accountCity = "mumbai"

/*
prefer not to use var
because of issue  in block scope and functional scope

*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
// console.log(accountID);