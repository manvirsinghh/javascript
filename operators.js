//Arithmetic operators

var a=10;
var b=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); //exponentiation operator
console.log(Math.pow(a,b));


//Assignment operators

let z=10;

z+=5;
console.log(z);
z-=3;
console.log(z);
z*=2;
console.log(z);
z/=4;
console.log(z);
z%=5;
console.log(z);

//Comparsion operator

var a=5;
var b=7;

console.log(a==b);
console.log(a ===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

//logical operators


let s=0;
let t=0;

console.log(s &&t);
console.log(s||t);
console.log(!s);

//bitwise operators

var a=5;
var b=3;

console.log(a &b);
console.log(a |b);
console.log(a ^b);
console.log(~a);
console.log(a<<1);
console.log(a>>1);

//unary operator

var num=2;
console.log(++num);
console.log(--num);
console.log(num++);
console.log(num);
console.log(num--);
console.log(++num);
console.log(+num);
console.log(-num);

//ternary operator

let age=20;
let eligibility=(age>=18)? "eligible" : "not eligible";
console.log(eligibility);

//type operators

let str="hello";
let number=42;
let obj={};

console.log(typeof str);
console.log(typeof number);
console.log(typeof obj);
console.log(number instanceof Number);
console.log(num instanceof Object);


