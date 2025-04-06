var a = 5;
console.log(a);
var a = 7;
console.log(a + "a can be redeclare");
a = 10;
console.log(a + "a can be reassign");
//so variables declare using var keyword can be reassign and redeclare

let b = 5;
console.log(b);
b = 7;
console.log("b can be reassign");
// let b=10; //b cant be redeclare
// console.log("b can be redeclare;");
//so variables declare using let keyword can't be redeclare but can reassign

const c = 10;
console.log(c);
// c = 12;
// console.log(c); //will throw error
// const c = 12;
// console.log(c); //will throw error

//so variable declare using const keyword cant be reassign and redeclare

//1.var 
//scope:-Function-scoped or globally-scoped.If declared outside a function,it is globally scoped;if declared inside the function,it is scoped to that function
//Hoisting:Variables declared with var are hoisted to the top of their scope but initialized with undefined

function exampleVar(){
    if(true){
        var x=10; //function-scoped
    }
    console.log(x); //output :10 (accessible here)
}
exampleVar();

//2.let


//scope:-Block-scoped,It is only accessible within the block{enclosed by{}} where it is defined
//Hoisting:Variables declared with let  are also hoisted but are not initialized leading to temporal dead zone" until the declaration is encountered



function exampleLet(){
    if(true){
        let y=20; //block-scoped
    
    console.log(y); //output :20 (accessible here)
}
// console.log(y); //uncaught referenceerror :y is not defined(not accessible here)
}

exampleLet();

//3. const

//scope: Block-scoped,similar to let. it must be initialized at the time of declaration 
//Hoisting:Like let, it is hoisted but not initialized.

function exampleConst(){
    if(true){
        const z=30; //block-scoped
        console.log(z); //output:30 (accessible here)
    }
    // console.log(z); //uncaught referenceerror :z is not defined(not accessible here)
}
exampleConst();

//variable declarations:Only the declarations are hoisted,not the initializations .this means that if you try to access a variable before its declaration ,it will be undefined
//function declarations:-Entire function declarations are hoisted,allowing you to call a function before it appears in the code

//var,let and const:

//variables declared with var are hoisted and initialized to undefined

//variables declared with let and const are also hoisted but are not initialized ,leading to "temporal dead zone" until they are declared.

//Examples

//1.Hoisting with var

console.log(x); //output:undefined(hoisted)

var x=5;
console.log(x); //output:5

//Here the variable x is declared at the bottom ,but due to hoisting ,it is treated as if it were declared at the top.however,its value is not assigned until the first console.log

//2.Hoisting with function declarations

greet(); //output:"Hello!"
function greet(){
    console.log("Hello!");
    }

    //The function greet can be called before its declaration because the entire function is hoisted

//3. Hoisting with let and const


// console.log(y); //uncaught
// ReferenceError:cannot access 'y' before initialization 
// let y=10;

// console.log(z); //uncaught
// ReferenceError:cannot access 'z' before initialization
// const z=20;

//with let  and const ,you cannot access the variables before their declarations.they are hoisted but remain in a "temporal dead zone"
// until the declaration is encountered



var a; // Declaration: `a` is declared and initialized to `undefined`
console.log(a); // Output: undefined
a = 5; // Assignment: `a` is now assigned the value 5
console.log(a); // Output: 5