//even odd first way

let a=7;
if(a%2==0){
    console.log("a is even number");
}
else{
    console.log("a is odd number");
}

//2nd way to check even or odd number
let b=4;
if(b&2!=0){
    console.log("b is odd number");
}
else{
    console.log("b is even number");
}

//check voting eligibility
var age=20;

if(age<0){
    console.log("age cannot be negative");
}
else if(age<18){
    console.log("not eligible for vote");
}
else{
    console.log("eligible for vote");
}

//largest numbers between three numbers

var x=3;
var y=5;
var z=6;

if( x>>y && x>>z){
    console.log("x is largest among all");
}
else if(y>>z && y>>x){
    console.log(" y is largest among all");
}
else{
    console.log("z is largest among all");
}

//grade calculation

let score=85;
if(score>=90){
    console.log("Grade:A");
}
else if(score>=80){
    console.log("Grade:B");
}
else if(score>=70){
    console.log("Grade:C");
}
else if(score>=60){
    console.log("Grade:D");
}
else{
    console.log("Grade:F");
}

//leap year


let year=2024;

if((year%4==0 && year %100!=0) || year%400==0){
    console.log(year +"is a leap year");
}
else{
    console.log(year +"is not a leap year");
}

//simple calculator


let number1=30;
let number2=20;
// let operator="**";
let operator='+';
if(operator == "+"){
    console.log(number1+number2);
}
else if(operator =='-'){
    console.log(number1-number2);
}
else if(operator=='*'){
    console.log(number1 * number2);
}
else if(operator=="/"){
    console.log(number1/number2);
}
else if(operator=='%')
{
    console.log(number1%number2);
}
else if(operator=='**'){
    console.log(number1** number2);
}
else{
    console.log("invalid operator");
}

//check if character us vowel or consonants ist way

let ch='U';
if(ch=='a' || ch=='e'|| ch=='i'|| ch=='o'|| ch=='u'|| ch=='A' || ch=='E'|| ch=='I'|| ch=='O'|| ch=='U'){
    console.log(ch+" is vowel.");
}
else{
    console.log(ch +"is consonants");
}

// check if charcater is vowel or consonants using 2nd way

let character='a';
character=ch.toLowerCase();
if(character=='a'|| character=='e'|| character=='i'|| character=='o'|| character=='u'){
    console.log(character+"is a vowel");
}
else{
    console.log(character +"is a consonant")
}


//password check
let password="secret123";
let userinput='secret123';
if(userinput==password){
    console.log("access granted");
}
else{
    console.log("access denied");
}

//authentication system
let storedusername='admin';
let storedpassword='password123';


let usernameinput='admin';
let passwordinput='password123';

if(usernameinput===storedusername && passwordinput===storedpassword){
    console.log("login successful");
}
else if(usernameinput !== storedusername){
    console.log("invalid username");
}
else if(passwordinput!==storedpassword){
    console.log('invalid password');
}
else{
    console.log('login failed');
}

//discount
let totalamount=150;
let discount=0;
let name='manvir';
let surname='singh';
if(totalamount>200){
    discount=20; //20% discount

}
else if(totalamount>100){
    discount=10;
}
else if(totalamount>50){
    discount=5;
}
else{
    discount=0;
}


//bank ATM simulation

let balance = 500;
let withdrawAmount = 200;

if (withdrawAmount <= balance) {
    balance -= withdrawAmount;
    console.log(`Withdrawal successful. Remaining balance: $${balance}`);
} else {
    console.log('Insufficient funds');
}


//check palindrome


let str='madam';
let reversedstr=str.split(").reverse().join(");
console.log(reversedstr);
if(str===reversedstr){
    console.log('${str} is a palindrome');
}
else{
    console.log('${str} is not a palindrome');
}

