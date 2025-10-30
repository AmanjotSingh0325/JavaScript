//singleton

//object literals

const Sym = Symbol("key1");

const JsUser = {
    name : "Aman", 
    "full name" : "Amanjot Singh",
    [Sym] : "mykey1",
    age : 18,
    location : "Chandigarh",
    email : "aman@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[Sym]);

JsUser.email = "aman1@gmail.com";
//Object.freeze(JsUser);
JsUser.email = "aman2@gmail.com";
console.log(JsUser);

JsUser.greeting = function() {
    console.log("HELLO JS USER...");
}
JsUser.greeting1 = function() {
    console.log(`HELLO JS USER, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting1());

