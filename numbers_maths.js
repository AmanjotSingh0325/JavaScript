const score = 300;
console.log(score);
const balance = new Number(180);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const a = 456.765756;
console.log(a.toPrecision(5));

const b = 1000000000;
console.log(b.toLocaleString('en-IN'));

/*
| Function / Method    | Description                  | Example                          |
| -------------------- | ---------------------------- | -------------------------------- |
| `Number()`           | Convert to number            | `Number("10") → 10`              |
| `parseInt()`         | Convert to integer           | `parseInt("10.5") → 10`          |
| `parseFloat()`       | Convert to float             | `parseFloat("10.5") → 10.5`      |
| `isNaN()`            | Check if *Not a Number*      | `isNaN("abc") → true`            |
| `Number.isInteger()` | Check integer                | `Number.isInteger(10.2) → false` |
| `toFixed(n)`         | Round to n decimals (string) | `(10.567).toFixed(2) → "10.57"`  |
| `toString()`         | Convert number to string     | `(25).toString() → "25"`         |
| `Number.isFinite()`  | Check finite number          | `Number.isFinite(10/0) → false`  |
*/

//************Maths***********//

console.log(Math);
console.log(Math.abs(-4));   //-ve to +ve
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,2,8,4,1));
console.log(Math.max(4,2,8,4,1));
console.log(Math.random());  //value always come bewteen 0 and 1.
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*100)+1);

const min= 10;
const max= 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
| Function            | Description              | Example (Result)                      |
| ------------------- | ------------------------ | ------------------------------------- |
| `Math.round(x)`     | Round to nearest integer | `Math.round(4.6) → 5`                 |
| `Math.floor(x)`     | Round down               | `Math.floor(4.9) → 4`                 |
| `Math.ceil(x)`      | Round up                 | `Math.ceil(4.1) → 5`                  |
| `Math.trunc(x)`     | Remove decimals          | `Math.trunc(4.9) → 4`                 |
| `Math.sqrt(x)`      | Square root              | `Math.sqrt(16) → 4`                   |
| `Math.pow(x, y)`    | x^y                      | `Math.pow(2, 3) → 8` *(Use `**` now)* |
| `Math.abs(x)`       | Absolute value           | `Math.abs(-5) → 5`                    |
| `Math.min(a,b,...)` | Smallest number          | `Math.min(3,6,1) → 1`                 |
| `Math.max(a,b,...)` | Largest number           | `Math.max(3,6,1) → 6`                 |
| `Math.random()`     | Random number *(0 to 1)* | `0.123456`                            |


*/

