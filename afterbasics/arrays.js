const myArr = [0,1,2,3,4,5];
const myFriends = ["Anubhav", "Anuj"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);

//array methods.
myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(0);
myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(8));
console.log(myArr.indexOf(4));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice, splice
console.log("A", myArr);
const mynew1 = myArr.slice(1,3);
console.log("B", myArr);

const mynew2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(mynew1);
console.log(mynew2);