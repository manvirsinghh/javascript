

var str="My name is manvir  is singh name";
console.log(str.replace('name','NAME')); //used to replace the first occurence of word with word that we want to 
console.log(str.replaceAll('name','NAME'));//used to replace all the occurences of given word with new new word 


//Here we have just replace one word with new word it is easily done with replaceAll() method of string but if we want to replace many more word then we will use regular expressions

//We will use replace() method and pass reguar expression to it it will give us result 
 var regex=/king/g;
var fruit="Mango is  of the king of the fruits is mango "
console.log(fruit.replace(regex,'KING'));

var regex=/manvir/i;
var username="ManvIR";
console.log(username.replace(regex,'MANVIR'));

//replace only whole words
var regex=/\bJasraj\b/g;
var employee_name="Jasraj Singh";
console.log(employee_name.replace(regex,'Jaskaran'));

//replace only digits
var regex=/\d/g;
var phone_no=' My phone number is this 99158-03830';
console.log(phone_no.replace(regex,'X'));


//remove extra spaces
var str = "Hello    World   !";
console.log(str.replace(/\s+/g, " "));

//New example
var regex=/[a-z]/g;
var str="Hello,Ram ,How are you? ";
console.log(str.match(regex)); //returns all the matches of the regular expression

//Anchors

//^(caret) matches the start of string  means if it matches if the string starts with that word


var regex=/^Lion/;
var animal="Lion is the king of the forest";
console.log(regex.test('Lion'));
console.log(regex.test('king'));// it will return false as it is not start with given regex


// Dollar ($): Matches the End of a String
// The dollar sign ($) ensures that the pattern must appear at the end of the string.
var regex=/east$/g;
var bird="The sun rise in the east";
console.log(regex.test('east'));

// 3. Combining ^ and $: Match the Exact String
// If you use both ^ and $ together, the regex must match the entire string. ,means no other word is before or after the word

var regex=/^hello$/g;
var greeting="hello";
console.log(regex.test(greeting));

//-------------------------------------------------------------------//
// Escaped Characters in Regular Expressions
// In JavaScript, some characters have special meanings in regex (like ., +, *, ?, (), [], {}, |, \, ^, $). To treat them as normal characters, we use a backslash \ to "escape" them.

//let us we have to find the dot (.) in the string

var regex = /./;
console.log("hello.world".match(regex));  //❌ This doesn't match only the dot because . in regex means "any character".

// ✅ To match just the dot, we escape it using \.
var regex=/\./g;
console.log("welcome all.".match(regex));

// Quantifiers in Regular Expressions
// Quantifiers in regex define how many times a pattern should occur. They help match repetitions of characters, words, or groups.

// 1. Types of Quantifiers
// Quantifier	Meaning	Example
// *	0 or more times	/ab*c/ → Matches "ac", "abc", "abbc", "abbbc"
// +	1 or more times	/ab+c/ → Matches "abc", "abbc", "abbbc" (but not "ac")
// ?	0 or 1 time (optional)	/ab?c/ → Matches "ac", "abc" (but not "abbc")
// {n}	Exactly n times	/a{3}/ → Matches "aaa" but not "aa" or "aaaa"
// {n,}	At least n times	/a{2,}/ → Matches "aa", "aaa", "aaaa"
// {n,m}	Between n and m times	/a{2,4}/ → Matches "aa", "aaa", "aaaa" but not "a" or "aaaaa"


//  Practical Use Cases
// ✅ Validating a Phone Number (10 digits)

var regex = /^\d{10}$/g;
console.log("9876543210".match(regex)); // ✅ Matches -> ["9876543210"]
console.log("98765".match(regex));      // ❌ Doesn't match -> null


// ✅ Validating an Email

var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
console.log("test@example.com".match(regex)); // Matches
console.log("test@example".match(regex));    // Doesn't match


//-----------------------------------------------------------------
//In JavaScript, the three commonly used methods with regular expressions (regex) are:

// .test() → Returns true or false

// .match() → Returns an array of matches or null

// .replace() → Replaces text based on regex
