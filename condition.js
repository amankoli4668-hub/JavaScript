// Question 1
// Write a JavaScript program to find the maximum between three distinct numbers.

// Answer 1: 

let num1 = 5;
let num2 = 6;
let num3 = 3;

if(num1>num2 && num1>num3){
    console.log(`${num1} is Greatest.`);
} else if (num2>num1 && num2>num3){
    console.log(`${num2} is Greatest.`);
} else {
    console.log(`${num3} is Greatest.`);
}

// Question 2
// Write a JavaScript program to check whether a year is a leap year or not.

// Answer 2:

let year = 2024;

let check = year%4===0 ? `${year} is a Leap Year` : `${year} is not a Leap Year` ;

console.log(check);

// Question 3
// Write a JavaScript program to check whether a number is even or odd.

// Answer 3: 

let num = 5;

if(num%2===0){
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// Question 4
// Write a JavaScript program to check whether a character is an alphabet, digit, or a special character.

// Answer 4:

let char = "%";

if((char>="A" && char<="Z") || (char>="a" && char<="z")){
    console.log("It is an alphabet.");
} else if (char>=0 && char<=9){
    console.log("It is a Digit.");
} else {
    console.log("It is a Special Character.");
}

// Question 5
// Write a JavaScript program to check whether three given angles form a valid triangle.

//Answer 5:

let angle1 = 150;
let angle2 = 15;
let angle3 = 15;

if (angle1 + angle2 + angle3 === 180){
    console.log("Valid Triangle.")
} else {
    console.log("Invalid Triangle.")
}