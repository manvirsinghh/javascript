let arr = [10, 20, 30, 40, 50];

//print alternate elements starting from first element

for (let i = 0; i < arr.length; i += 2) {
    console.log("Alternate elements are:", arr[i]);
}


// 2)Given an array, arr of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn’t exist.

var array=[1, 2, 3, 4];
var x=3;
var found=false;
for(var i=0;i<array.length;i++){
    if(array[i]==x){
        console.log(i);
        found=true;
        break;
    }
}
if(!found){
    console.log(-1);
}

//reverse an array using two pointers approach


arr=[3,4,5,6,7];
let left=0;
let right=arr.length-1;
while(left<right){
    var temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
    left++;
    right--;
}
console.log(arr);


//reverse an array using new array

const a1=[1, 4, 3, 2, 6, 5];
const a2=[];

for(let i=a1.length-1;i>=0;i--){
    a2[i]=a1[i];
}
console.log(a2);


//Creating an array

//An Array is a list-like object that stores multiple values in  a single  variable


var fruits=["Apple","Banana","Orange"];
console.log(fruits);

//Accessing array elements
//You can access elements of an array  using the index which start from 0

var fruits=['Apple','Banana','Orange'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Adding elements

//push(): Adds an element to the end of the array
//unshift():Adds an element to the beginning of the array

var fruits=['apple','banana'];
fruits.push('strawberrry');
console.log(fruits);
fruits.unshift('pineapple');
console.log(fruits);

//Removing the elements
//pop():-removes the last element of array
//shift():removes the first element of the array


var fruits=['apple','banana','cherry'];
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

//Find the length of the array

var fruits=['apple','mango','orange','pear'];
len=fruits.length;
console.log(len);
 // directly print the length instead store inside the varibale first
 console.log(fruits.length);

 //Looping through the array
 var fruits=['apple','banana','orange','pear'];
 for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
 }
 //second way to iterate over array is using while loop

 var i=0;
 while(i<fruits.length){
    console.log(fruits[i]);
    i++;
 }
 //using forEach()
 var fruits=['apple','orange','mango','pear'];
 fruits.forEach(function(fruit){
    console.log(fruit);
 });

 //Finding the element 

 //indexOf():Returns the index of first occurence of an element.If element is not found it returns -1;

 //includes():checks if an array includes a certain element

 var fruits=['apple','banana','pear','strawberry'];
 console.log(fruits.indexOf('apple'));
 console.log(fruits.includes('strawberry'));
 

 //removing or replacing the elements

 //splice():adds or remove the elements from an array
 var fruits=['apple','banana','pear','orange'];
 fruits.splice(1,1); //removes first element a index 1

 console.log(fruits);

 fruits.splice(1,0,"melon"); //adds grapes at index 1
console.log(fruits);


//concatenating the arrays
//concat(): Merges two or  more arrays into one

var fruits=['apple','orange'];
var vegetables=['brinjal','peas'];
var food=fruits.concat(vegetables);
console.log(food);

//fidning elements by condition
//find():finds the first  element that match the condition
//filter():returns all elements that match the condition

var numbers=[1,2,3,4,5];

var firstEven=numbers.find(num=> num%2==0);
    console.log(firstEven); //output:2
var evennumbers=numbers.filter(num=>num%2==0);
console.log(evennumbers); //output:[2,4]


//transforming an array

//map():creates a new array by applying a function to each element.

var numbers=[1,2,3,4];
var squaredNumbers=numbers.map(num=>num*num);
console.log(squaredNumbers); //output:[1,4,9,16]


//sorting and reversing 

//sort():sorts an array alphabetically or numerically

//reverse():reverse the order of the elements in an array

var fruits=['banana','apple','mango'];
fruits.sort();
console.log(fruits);


fruits.reverse();
console.log(fruits);


//joining the array elements
//join():joins all elements of an array into a string

var fruits=["apple","mango","orange"];
var fruitString=fruits.join(",");
console.log(fruitString);


//destructuring the arrays

//destructuring allows you to unpack values from arrays into variables 

var fruits=['apple','banana','mango','pear','orange'];
var[firstFruit,secondFruit]=fruits;
console.log(firstFruit);
console.log(secondFruit);

//reduce()

//reduce():applies a function to accumulate the array values into single result

var numbers=[1,2,3,4];
var sum=numbers.reduce((total,num)=> total+num,0);
console.log(sum);

//some () and every()

//some():checks if at least one element in the array passes the provided test(returns  true or false)

//every():checks if all elements in the array pass the provided test (returns true or false)

var numbers=[1,2,3,4];
var hasEven=numbers.some(num=>num%2==0);
console.log(hasEven); //output:true

var allpositive=numbers.every(num=>num>0);
console.log(allpositive); //output:true


//flat() and flatMap()

//flat():Flattens a nested array up to the specified depth
//flatMap():Maps each element and then flattens the result into a new array.


var nestedArray=[1,[2,3],[4,[5]]];
var flattenedArray=nestedArray.flat(2);
console.log(flattenedArray); //output:[1,2,3,4,5]


var numbers=[1,2,3];
var doubled=numbers.flatMap(num=>[num*2]);
console.log(doubled); //output:-[2,4,6]


//fill()
//fill():fills all the elements of an array with a static value from a start index to an end index 

var numbers=[1,2,3,4,5];
numbers.fill(0,2,4);
console.log(numbers); //output:[1,2,0,0,5]

//copyWithin()
//copyWithin():Shallow copies part of an array to another location in the same array

var array=[1,2,3,4,5];
array.copyWithin(0,3);
console.log(array); 

//Array.from()

//Array.from():creates a new array from an aray-like or iterable object

var str="hello";
var chars=Array.from(str);
console.log(chars); 


//Array.isArray()

//Array.isArray():checks if a value is an array

console.log(Array.isArray([1,2,3]));
console.log(Array.isArray("hello"));

// Array.of()
//Array.of():creates a new array with the specified elements

var array=Array.of(1,2,3);
console.log(array);



//sort() with custom comparator
//The sort() method can be used with a custom comparatir to sort the elements in various ways

var numbers=[10,5,2,8,3];
numbers.sort((a,b)=>a-b);
console.log(numbers);


numbers.sort((a,b)=>b-a);
console.log(numbers);

//findIndex()

//findIndex():returns the index of the first element in the array that satisfies the provided testing function.if no elements satisfy the testing fucntion ,-1 is returned 

var numbers=[10,5,2,8,3];
var index=numbers.findIndex(num=>num>7);
console.log(index);


//lastIndexOf()

//lastIndexOf():returns the last index at which a given element can be found in thee array,or -1 if it is not present.the array is searched backwards

var numbers=[1,2,3,2,1];
console.log(numbers.lastIndexOf(2));
