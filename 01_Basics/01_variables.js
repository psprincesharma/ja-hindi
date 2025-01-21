const accountId = 14432
let accountEmail = "ps@123.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId =2  we can't change a constant once declared
accountEmail ="ps@342.com"
accountPassword="2311"
accountCity ="bengaluru"

//don't use var in js instead you can use let
//because of issue in block scope  and functional scope

console.log(accountId)
console.table([accountEmail,accountPassword,accountCity,accountState])