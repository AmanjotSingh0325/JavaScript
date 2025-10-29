let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());

let setDate = new Date(2002, 2, 25);
let setDate1 = new Date(2002, 2, 25, 5, 3);
console.log(setDate.toDateString());
console.log(setDate1.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(setDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString