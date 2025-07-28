const accountId = 144553
let accountEmail = "goldy@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" 

// accountId = 2 //Not allowed

accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="Bengaluru"

console.log(accountId)
console.log(accountPassword)
console.log(typeof(accountCity))

/*
Prefer not tu  use var because of issue scope and functional scope
*/ 

console.table([accountId,accountEmail,accountPassword,accountCity])