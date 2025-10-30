const singers = ["niravir", "gulab", "sonu"];
const actor = ["diljeet", "gippy", "ammy"];
//singers.push(actor);

//console.log(singers);

const all = singers.concat(actor);
console.log(all);

//use ... to speard arrays
const new1 = [...singers, ...actor];
console.log(new1);

const otherArr = [1,2,3,4,[5,6,7], 8,[9,10,[11,12],13],14];
const otherArr1 = otherArr.flat(Infinity);
console.log(otherArr1);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));
console.log(Array.from({name : "Aman"})); //interesting

let a=1;
let b=2;
let c=3;
console.log(Array.of(a,b,c));

