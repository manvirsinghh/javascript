

let ingredients={
    coffeeType:['espresso','cappuccino','latte','black coffee'],
    milk:['full cream','skimmed','soy','almond'],
    sweetner:['sugar','honey','stevia'],
    extras:['cinnamon','chocolate syrup','whipped cream']
};

let is_cafe_open=true;

let orderCoffee=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(is_cafe_open){
            setTimeout(()=>{
                resolve(work());
            },time);
        }
        else{
            reject(console.log("cafe is closed"))
        }
    });
};
orderCoffee(1000,()=>console.log("${ingredients.coffeeType[2]} was selected"))
.then(()=>{
    return orderCoffee(500,()=> console.log("Grinding coffee beans...."));

})
.then(()=>{
    return orderCoffee(1000,()=> console.log("Boiling the water..."));
})
.then(()=>{
    return orderCoffee(1000,()=> console.log("${ingredients.milk[0]} added"));
})
.then(()=>{
    return orderCoffee(1000,()=> console.log("${ingredients.sweetner[1]}"));
})
.then(()=>{
    return orderCoffee(1000,()=> console.log('${ingredients.extras[2]} added'));
})

.then(()=>{
    return orderCoffee(2000,()=>console.log('coffee is ready! enjoy your drink!'));
})
.catch(()=>{
    console.log("customer left due to delay");
})
.finally(()=>{
    console.log("day ended,cafe is closed");
})


//https://chatgpt.com/share/67ee2209-5b74-800b-8521-e1720e6b584b for read more about the promise

