




// JavaScript Test on Array and String Operations


// ### **Section 1: Basic Array Operations**

// 1. Create an array named `colors` with elements "Red", "Green", and "Blue". Print the array.

var colors=['Red','Green','Blue'];
console.log(colors);

// 2. Access and print the first and last elements of the `colors` array.

console.log(colors[0]);
console.log(colors[2]);



// 3. Add "Yellow" to the end of the `colors` array and "Purple" to the beginning. Print the updated array.

colors.push("Yellow");
colors.unshift("Purple");

console.log(colors);



// 4. Remove the last element from the `colors` array and print the array.

colors.pop();
console.log(colors);


// 5. Remove the first element from the `colors` array and print the array.

colors.shift();
console.log(colors);

// 6. Find and print the length of the `colors` array.

var len=colors.length;
console.log(len);

// ### **Section 2: Iteration and Searching**

// 7. Iterate over the `colors` array using a `for` loop and print each element.

var i=0;
while(i<colors.length){
    console.log(colors[i]);
    i++;
}


// 8. Use `forEach()` to print each element of the `colors` array.


colors.forEach(function(color){
   console.log(color);
});

// 9. Find the index of "Green" in the `colors` array and print it.

for (let j = 0; i < colors.length; i++) {
    
    if(colors[j]=='green'){
        console.log(j);
    }
}

// 10. Check if the `colors` array includes "Blue" and print the result.

if(colors.includes('Blue')){
    console.log('The array contains Blue');
}
else{
    console.log('The array does not contain blue color');
}


// **Section 3: Modifying and Combining Arrays**

// 11. Remove the second element from the `colors` array using `splice()` and print the array.

let removed=colors.splice(1,1);
console.log(colors);


// 12. Insert "Cyan" at index 1 using `splice()` and print the updated array.

colors.splice(1,0,'Cyan');
console.log(colors);

// 13. Concatenate the `colors` array with another array `shades = ["Light", "Dark"]` and print the result.

var shades=["Light","Dark"];
 var updated_array=colors.concat(shades);
console.log(updated_array);


// ### **Section 4: Finding and Filtering Elements**

// 14. Given `numbers = [3, 6, 9, 12, 15]`, find the first number that is greater than 10 using `find()`.

var numbers=[3,6,9,12,15];
var first_greatest=numbers.find(num=>num>10);
console.log(first_greatest);

// 15. Use `filter()` to create a new array containing only even numbers from `numbers`.

var newarr=numbers.filter(num=>num%2==0);
console.log(newarr);

// 16. Create a new array where each element of `numbers` is squared using `map()`.

var newarr1=numbers.map(num =>num*num);
console.log(newarr1);

// ### **Section 5: Sorting and Transforming Arrays**

// 17. Sort the `colors` array in alphabetical order and print it.

var newcolors=colors.sort();
console.log(colors);

// 18. Reverse the order of the `colors` array and print it.

console.log(colors.reverse());

// 19. Join all elements of the `colors` array into a string separated by " - " and print it.


console.log(colors.join(" - "));



// Section 1: Basic String Properties
// Declare a string variable sentence with the value "JavaScript is a powerful language!". Print the string.
// Find and print the length of sentence.


var str="Javascript is a powerful language!";
console.log(str);


// Section 2: Extracting and Modifying Strings
// Extract the word "powerful" from sentence using slice(), then print it

console.log(str.slice(16,24));

// Extract "powerful" again using substring(), then print it.

console.log(str.substring(16,24));

// Replace "powerful" with "amazing" in sentence and print the updated string.

console.log(str.replace('powerful','amazing'));

// Convert sentence to uppercase and print the result.

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Section 3: Searching in Strings
// Find the index of "language" in sentence and print it.

console.log(str.indexOf('language'));

// Check if "JavaScript" is included in sentence using includes() and print the result.


console.log(str.includes('JavaScript'));

// Check if sentence starts with "JavaScript" and print the result.

console.log(str.startsWith('JavaScript'));

// Check if sentence ends with "!" and print the result.

console.log(str.endsWith('!'));

// Section 4: Splitting and Joining Strings
// Split sentence into an array of words using split(" ") and print the result.


console.log(str.split(""));

// Join the words back into a sentence using join("-") and print the result.

console.log(str.split("").join(""));

// Section 5: String Padding and Trimming
// Declare a string greeting = " Welcome to JS " and print it.

var greeting="Welcome to JS";
console.log(greeting);


// Remove extra spaces from both ends of greeting using trim() and print it.

console.log(greeting.trim());


// Pad greeting at the start with "**" until the total length is 20 using padStart() and print it.

var space=greeting.padStart('20','**');
console.log(space);

// Pad greeting at the end with "!!" until the total length is 22 using padEnd() and print it.

var space1=greeting.padEnd('22','!!');
console.log(space1);

// Section 6: Character Extraction
// Print the character at index 5 of sentence using charAt().

console.log(greeting.charAt(5));

// Print the Unicode character code at index 5 using charCodeAt().

console.log(greeting.charCodeAt(5));

// Section 7: Advanced String Operations
// Convert the string "hello world" into an array of characters using Array.from() and print the result.

var string="hello world";
console.log(Array.from(string));

// Search for "is" in sentence using search() and print the index if found.

console.log(string.search("is"));

// Replace all occurrences of "a" with "@" in sentence using replaceAll() and print the result.

let fruit="apple is a healthy fruit";
console.log(fruit.replaceAll('a','@'));

// Find the last index of "a" in sentence using lastIndexOf() and print it.

console.log(fruit.lastIndexOf('a'));
