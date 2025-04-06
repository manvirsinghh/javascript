// Practice Program: Simulated Online Order Processing Using Promises
// This program simulates an online order processing system using Promises. It will go through the following steps:

// Place an order (returns a Promise).

// Process the payment (only if the order is placed successfully).

// Prepare the food (only if payment is successful).

// Deliver the order (only if food preparation is successful).

// Each step will take some time (simulating real-world delays using setTimeout()).

function placeorder(order){
    return new Promise((resolve,reject)=>{
        console.log("placing the order :",order);
        setTimeout(()=>{
            if(order){
                resolve("order placed successfully");
            }
            else{
                reject("failed to place the order ");
            }
        },2000);
    });
}
function processpayment(payment){
    return new Promise((resolve,reject)=>{
    console.log("processing payment ......");
    setTimeout(() => {
        if(payment){
            resolve("payment processed successfully");
        }
        else{
            reject("paymentt failed");
        }
    }, 1500);
});

}
function preparefood(paymentstatus){
    return new Promise((resolve,reject)=>{
        console.log("preparing the food ...");
        setTimeout(() => {
            if(paymentstatus){
                resolve("food prepared successfully");
            }
            else{
                reject("food preparation failed");
            }
        }, 3000);
    });
}
function deliverfood(foodstatus)
{
    return new Promise((resolve,reject)=>{
        console.log("delivering the food ....");
    setTimeout(() => {
        if(foodstatus){
            resolve("delivered food successfully")
        }
        else{
            reject("delivery failed");
        }
    }, 2000);
});
}

//chaining the promises


placeorder("pizza")

.then(response=>{
    console.log(response);
    return processpayment(response);
})
.then (response=>{
    console.log(response);
    return preparefood(response);
})
.then(response=>{
    console.log(response);
    return deliverfood(response);
})
.then(response=>{
    console.log(response);
    console.log("order completed");
})
.catch(error=>{
    console.log(error);
});


//this is how  the promises work in the javascript


//------------------------- API TOPIC HAS TO BE COVERED IN DETAIL AND ITS PRACTICE

//THEN I WILL START REACT JS LIBRARY