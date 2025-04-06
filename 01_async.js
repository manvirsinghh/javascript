// THIS IS REFERENCE TO UNDERSTAND THE SYNCHRONOUSS AND ASYNCHRONOUS JAVASCRIPT AS WELL AS CALLBACK FUNCTION IN DETAIL
https://www.freecodecamp.org/news/asynchronous-javascript/

//synchronous js (the code is executed in order)
console.log("Hello");
console.log("my");
console.log("name");
console.log("is");
console.log("manvir singh")


//asynchronous js(code not run according to sync ,but run according to time )

console.log("my");
console.log("name");
setTimeout(()=>{
    console.log("is");
},2000);

setTimeout(()=>{
    console.log("manvir singh");
},1000);

setTimeout(()=>{
    console.log("Hello");
},0);
console.log("Hello");


//callback function

// const one=(call_two)=>{
//     call_two();
//     console.log("step 1");
// }

// const two =()=>{
//     console.log("step 2");
// }

// one(two);
// two();



const callmanvir=(a)=>{
    a();
    console.log("welcome");
}

const manvir2=()=>{
    console.log("hello");
}

callmanvir(manvir2);
manvir2(); //hello


let firstname="manvir";
let lastname="singh";



console.log(firstname);

setTimeout(()=>{
    console.log(lastname);
},2000);
console.log("hello");
setTimeout(()=>{
    console.log(firstname);
},1000);