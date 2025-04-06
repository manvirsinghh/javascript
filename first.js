//operators

//addition operator

let x = 5;
let y = 10;
console.log(x + y);

//if we add two integer then answer will be integer 
//if we add one integer and string then it will concatenate and return string like as follows

let w = 4;
let t = "-10";
console.log(w + t);

t = 12;
console.log(w + t);
t = "22";
console.log(w + t);

function add(a, b) {
    return a + b; // Returns the sum but doesn't print it
}

let result = add(5, 3); // Stores the returned value
console.log(result); // Prints: 8

function add(a, b) {
    console.log(a + b); // Prints sum to console but does NOT return it
}

let res = add(5, 3); // Calls function but does not store anything
console.log(res); // Prints: undefined


//logical operators

const a = 3;
const b = 6;

console.log("logical AND of given two values is:", a && b);
console.log("logical NOT of given two values is:", !a, !b);

//find difference

function diff(a, b) {
    return a - b;
}
console.log((5, 8));


function divide(a, b) {
    return a / b;
}
var answer = divide(2, 5);
console.log(answer);

function greet() {
    console.log("hi");
}

greet();

function greet(name) {
    console.log("hi everyone:" + "welcome" + " " + name + " to our website");

}
greet('manvir');

//2. Function Expression
// Function Expression is another way to define a function. Here, the function is defined inside a variable, and the function’s value (its returned value) is stored in that variable.
var fruit=function (a,b,c){
   
    return a+" "+b+" "+c;
    
}
let ans=fruit('mango','banana','orange');
console.log(ans);


//2nd way

var fruit=function(a,b,c){
    console.log(a+" "+b+" "+c);
}
fruit('pineapple','cherry','pear');

//traditional way to print product of two numbers


function product(c,d){
    return c*d;
}
let pro=product(10,10);
console.log(pro);

//do same using arrow function

var answer=(c,d)=>{
    return c*d;
}
console.log(answer(10,10));


//  Immediately Invoked Function Expression (IIFE)
((c,d)=>{
    console.log(c*d);
})
(10,10);

//number

//octal numbers
var m= 0562;
console.log(m);


//Important points to note

// Constants preceded by 0x are interpreted as hexadecimal in JavaScript.   
// Javascript numbers are of base 10 by default, but we can use the toString() method to get output in the required base from base 2 to base 36.

const value=0xA;
console.log(value);



// 2. Convert Numbers to Different Bases Using toString(base)
// In JavaScript, numbers are base 10 by default, but we can convert them to another base using .toString(base).
const z=255;
console.log(z.toString(2)); //binary
console.log(z.toString(8));//octal
console.log(z.toString(16));//hexadecimal
console.log(z.toString(36)); //base 36


// 3. Convert Back to Decimal Using parseInt()
// We can convert any base back to decimal using parseInt(value, base)


console.log(parseInt(11111111,2));
console.log(parseInt(377,8));
console.log(parseInt("ff",16));
console.log(parseInt(73,36));

//convert negative number to positive number


//ist way is to mutliplty by -1
let q=-3;
if(q<0){
    q*=-1;
    console.log(q);
}
else{
    q=q;
}

//2nd way is to use Math.abs()
let r=-3;
if(r<0){
    console.log(Math.abs(r));
} 
else{
   console.log(r);
}

//3rd way is to add minus sign 

let s=-3;
let outcome=s<0?-(s):s;
console.log(outcome);
