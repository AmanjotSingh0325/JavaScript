//const tinderUser = new Object()  //this is singleton
const tinderUser = {}  //we can have many objects here

tinderUser.id = "1234abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const User = {
    email : "aman@gmail.com",
    roll : 55,
    fullname: {
        userFullname : {
            firstname : "Amanjot",
            lastname : "Singh"
        }
    }
}
console.log(User.fullname.userFullname.firstname)

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = {obj1, obj2};
const obj4 = Object.assign({},obj1, obj2);
console.log(obj3);
console.log(obj4);
const obj5 = {...obj1, ...obj2};
console.log(obj5);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));