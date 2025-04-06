let ingredients = {
    coffeeType: ["Espresso", "cappuccino", "latte", "black coffee"],
    milk: ["full cream", "skimmed", "soy", "almond"],
    sweetner: ["sugar", "honey", "stevia"],
    extras:["cinnamon","chocolate syrup","whipped cream"]
};
let orderCoffee=(coffeeIndex,callback)=>{
  setTimeout(()=>{
    console.log(' ${ingredients.coffeetype[coffeeIndex]}  was selected.');
    callback();
  },1000);
};
let prepareCoffee=()=>{
    setTimeout(()=>{
        console.log('grinding the coffee beans...');
        setTimeout(()=>{
            console.log("boiling water...");
            setTimeout(()=>{
                console.log("Adding the milk...");
                setTimeout(()=>{
                    console.log("Adding the sweetner...");
                    setTimeout(()=>{
                        console.log("Adding the extras...");
                        setTimeout(()=>{
                            console.log("Coffee is ready now! Enjoy your drink!");
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
        
    },500);
};

orderCoffee(2,prepareCoffee);