//sample string for demonstrationn
const str="Hello, Javascript world!";
console.log(str);

//string length

console.log("string length is:",str.length);

//string.slice()

//extracts the section of the string from the start index to the end index (exclusive) and returns it
console.log("\n2.String slice():");
console.log("slice from the index 7 to 18:",str.slice(7,18));


//string substring()
//extracts a substring from the start index to the end index(exclusive).unlike slice ,it does not accept negative indices.
console.log("\n3.string substring():"); 
console.log("substring from index 7 to 18:",str.substring(7,18));


//string substr() (deprecated)
//extracts a substring starting from the start index,with a specified length.This method is deprecated and should be avoided

//string replace():replaces the first occurence of a specified vaue with another value

console.log("\n5.String replace():");
console.log("replace 'world' with 'universe':",str.replace("world","universe"));


//string replaceAll()
//replaces all occurences of a specified value with another value

console.log("\n6. String replaceAll():");
console.log("Replace all 'o' with 'O':", str.replaceAll('o',"O"));

//string toUpperCase()

//converts all characters in the string to uppercase 

console.log("\n7. String toUpperCase():");
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//string concat()
let str1="apple is good for ";
let str2="health";
console.log(str1.concat(str2));

//string trim()

console.log(str1.trim());

//string trimStart()
//removes the whitespace from the beginning of the string

console.log("\n11.String trimStart():");
console.log("Trimmed start:", str.trimStart());

//String trimEnd() method
var string = "Hello World!   ";
console.log(string.trimEnd()); // Output: "Hello World!"

//padStart() method
// Pads the beginning of a string with another string until it reaches the specified length.


let num = "5";
console.log(num.padStart(3, "0")); // Output: "005"

//padEnd() method
// Pads the end of a string with another string until it reaches the specified length.


let number = "5";
console.log(number.padEnd(3, "0")); // Output: "500"


// charAt() method
// Returns the character at a specified index.

var text = "JavaScript";
console.log(text.charAt(2)); // Output: "v"

// charCodeAt() method
// Returns the Unicode of the character at a specified index.

var text = "ABC";
console.log(text.charCodeAt(0)); // Output: 65 (Unicode of 'A')


// split() method 
// Splits a string into an array based on a specified separator.

var strr = "apple,banana,orange";
console.log(strr.split(",")); // Output: ["apple", "banana", "orange"]


// indexOf() method
// Returns the first index of a specified value in a string.

let  hy = "Hello world!";
console.log(hy.indexOf("o")); // Output: 4


// lastIndexOf() method
// Returns the last occurrence index of a specified value.


 let hi= "Hello world!";
console.log(hi.lastIndexOf("o")); // Output: 7


// search() function
// Searches a string for a match against a regular expression and returns the position.

let lang = "JavaScript is awesome!";
console.log(lang.search("is")); // Output: 11

// match() method 
// Returns an array of matches found using a regular expression.

let love = "I love JavaScript and Java";
console.log(love.match(/Java/g)); // Output: ["Java", "Java"]


// matchAll() method
// Returns an iterator of all matches found using a regular expression.

let js = "I love JavaScript and Java";
let matches = js.matchAll(/Java/g);
console.log([...matches]); // Output: [["Java"], ["Java"]]

// includes() method
// Checks if a string contains a specified value.
var hello= "Hello world!";
console.log(str.includes("world")); // Output: true

//  startsWith() method 
// Checks if a string starts with a specified value.

var hello= "Hello world!";
console.log(str.startsWith("Hello")); // Output: true

//  endsWith() method 
// Checks if a string ends with a specified value.


var hello = "Hello world!";
console.log(hello.endsWith("!")); // Output: true


