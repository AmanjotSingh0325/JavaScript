const name ="aman";
const repoCount = 4;
console.log(name + repoCount);
console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const myName = new String("Aman");
const myPind = new String('Morinda-87');

console.log(myName[2]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt('3'));
console.log(myName.indexOf('a'));

const newString = myPind.substring(0,4);
console.log(newString);
const new1String = myPind.slice(-2);
console.log(new1String);

const friend = "  ram   ";
console.log(friend);
console.log(friend.trim());

const url = "https://aman.com/am%25";
console.log(url.replace("%", "@"));
console.log(url.includes("am"));
console.log(url.includes("jot"));
console.log(myPind.split('-'));


/*
| Function                    | Description                             | Example                                 |
| --------------------------- | --------------------------------------- | --------------------------------------- |
| `length`                    | Gets string length                      | `"Hello".length → 5`                    |
| `toUpperCase()`             | Makes text uppercase                    | `"hi".toUpperCase() → "HI"`             |
| `toLowerCase()`             | Makes text lowercase                    | `"HI".toLowerCase() → "hi"`             |
| `charAt()`                  | Gets character at index                 | `"Hello".charAt(1) → "e"`               |
| `charCodeAt()`              | Unicode value at index                  | `"A".charCodeAt(0) → 65"`               |
| `slice()`                   | Extracts part of a string               | `"JavaScript".slice(4) → "Script"`      |
| `substring()`               | Similar to slice but no negative values | `"Hello".substring(1,3) → "el"`         |
| `substr()` *(deprecated)*   | Extract portion by length               | `"Hello".substr(1,2) → "el"`            |
| `indexOf()`                 | Finds first position of text            | `"Hello".indexOf("l") → 2"`             |
| `lastIndexOf()`             | Finds last position of text             | `"Hello".lastIndexOf("l") → 3"`         |
| `includes()`                | Checks if contains text                 | `"Hello".includes("ll") → true"`        |
| `startsWith()`              | Checks starting text                    | `"Hello".startsWith("He") → true"`      |
| `endsWith()`                | Checks ending text                      | `"Hello".endsWith("lo") → true"`        |
| `replace()`                 | Replaces first match                    | `"Hello".replace("H","J") → "Jello"`    |
| `replaceAll()`              | Replaces all matches                    | `"a-a-a".replaceAll("-","+") → "a+a+a"` |
| `trim()`                    | Removes spaces (start + end)            | `"  hi ".trim() → "hi"`                 |
| `trimStart()` / `trimEnd()` | Remove spaces from sides                | `"  hi".trimStart()`                    |
| `split()`                   | Converts string → array                 | `"a,b,c".split(",") → ["a","b","c"]`    |
| `concat()`                  | Join strings                            | `"Hello".concat(" World")`              |
| `repeat()`                  | Repeat string                           | `"ha".repeat(3) → "hahaha"`             |
| `padStart()`                | Adds padding to start                   | `"5".padStart(3,"0") → "005"`           |
| `padEnd()`                  | Adds padding to end                     | `"5".padEnd(3,"0") → "500"`             |

*/