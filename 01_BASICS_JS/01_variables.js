const accountId =123456
let accountEmail = "zeel@google.com"
var accountPassword = "123546"
accountCity = "Valsad"  // When you declare a variable without using var , let , const keywords, the variable is automatically created as a global variable.
let accountState;  // If values are not assigned to a variable or expression, then the output of that variable or expression will be undefined.

// acountId = 2 // not allowed because const is used to declare a constant variable. A constant variable is a variable whose value cannot be changed once it has been assigned. 

accountEmail = "zp@hc.com"
accountPassword = "323535234"
accountCity = "Surat"

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/


console.table([ accountId , accountEmail , accountPassword, accountCity , accountState])