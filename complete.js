//converting json text to jaavscript object
//we can convert json text into javascript object using JSON.parse() method
//basically json objects has data in form of key value pairs where each key is separated by : and value by ,
//--------------------JSON.parse() is used to convert a JSON string into a JavaScript object,----------------

const txt='{"name":"manvir","age":23,"gender":"male"}';
const jsonobj=JSON.parse(txt);
console.log(jsonobj); //it will print the object witth key value pairs

//now if we want to access the particular  value then we will write like this

console.log(jsonobj.name);
console.log(jsonobj.age);
console.log(jsonobj.gender);



//now we can create json array

var arr=[
    {'name':'manjot','age':24,'gender':'male','salary':40000},
    {'name':'mandeep','age':23,'gender':'male','salary':30000},
    {'name':'manjit','age':22,'gender':'male','salary':20000}
]

console.log(arr);


//to access json data we will use dot notation.We use the . notation to access JSON data. Its syntax is: variableName.key

let student={
    'name':'rahul',
    'class':'bcom',
    'roll no':23,
    'hobbies':{
        'hobby1':'reading',
        'hobby2' :'dancing',
        'hobby3':'cooking'
    },
    'age':21,
    'gender':'male',
    'class' : ['JavaScript', 'HTML', 'CSS']
}
console.log(student);
//accessing json object
 console.log(student.name);
 console.log(student.hobbies);
 console.log(student.gender);
 console.log(student.hobbies.hobby1);
 console.log(student.class[1]);

//You can also use square bracket syntax [] to access JSON data. 

console.log(student['name']);
console.log(student['hobbies']);

//Use of JSON
// JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

// JSON is language independent. You can create and use JSON in other programming languages too.


//data types

// 1)NaN:NaN (Not a Number) is a special value that is returned when a mathematical operation cannot produce a meaningful numeric result.

// Performing arithmetic operations (except addition) on numeric values and strings results in NaN. For example,

const content=5-'hello';
console.log(content);

//template literals 

var Name="manvir";
var result=`${Name} is a good boy`;//this is template literal in which we embedd the Name variable
console.log(result);