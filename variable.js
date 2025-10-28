const roll = 55
let email = "amanjot@gmail.com"
var password = "12345"
city = "Chandigarh"
let accountState;

// roll = 2 //not allowed

email = "aman@gmail.com"
password = "2254"
city = "delhi"

/* 
prefer not to user var
bcz of issue in block scope and functional scope
*/


console.log(email);
console.table([roll, email, password, city, accountState])