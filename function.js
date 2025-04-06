function myfunction(){
    console.log("this is my first function");
}
myfunction();
myfunction();
myfunction();

function name(name){
    console.log("my name is"+name);
}

name("Manvir Singh");
name("Jasraj Singh");
//parameterized 

function wish(greet){
    console.log(greet+"sir");
}
wish(" good morning ");
wish(" good afternoon ");
wish(" good night ");

//sum

function sum(a,b){
    console.log("sum of " + a + " and " + b +" is " + (a+b));
}
sum(5,8);

function problem(x){
    console.log("hello");
    return x+5;
}
problem(4); //it will be only hello

//for taking output it what ever you are returning from a function you have to call it

function problem(x){
    console.log("hello");
    return x+5;
}
let output=problem(4);
console.log(output); //hello 9


//function statement
var a=function(){
    console.log("hello");
}
a();


var a=()=>{
    console.log("hello");
    console.log("Welcome");
}
a();

var a= ()=>{
    return "hello";
}
console.log(a());

var a=()=>"hello";
console.log(a());

//arrow functions

var add=(a,b)=>{
    return a+b;
}

var result=add(5,8);
console.log(result);


var manvir=()=>{
    console.log("hello");
}
manvir();


var sum=(a,b,c)=>{
    return a+b+c;
}
var result=sum(3,4,5);
console.log(result);


var add=(a,b)=>{
    console.log(a+b);
}
add(7,12);

//higher order function & callback function

function a(){
    console.log("welcome");
}
a(b());

function b(){
    console.log("callback function");
}