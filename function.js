// SECTION 1 — PRACTICAL (Use Compiler Only)

// Question 1: Rectangle Area
// Write a function that takes length and breadth as parameters and returns the area of a rectangle.

// Answer 1:

// function findArea(length, breadth) {
//     return length*breadth;
// }
// let Area = findArea(5, 4);
// console.log(Area);


// Question 2: Business Profit Check
// Write a function that takes revenue and expenses as parameters and checks whether the business is profitable or not.

// Answer 2:

// function checkProfit(revenue, expenses){
//     if(revenue>expenses){
//         console.log("Profitable");
//     }
//     else{
//         console.log("Not Profitable");
//     }
// }
// checkProfit(50000, 45000);


// Question 3: Character Checker
// Write a function that takes one character and checks whether it is:

// Capital letter
// Small letter
// Not a letter

// Answer 3:

// function CharacterChecker(char){
//     if(char>= "A" && char<= "Z"){
//         console.log("Capital letter");
//     } else if(char>= "a" && char<= "z"){
//         console.log("Small letter");
//     } else {
//         console.log("Not a letter");
//     }
// }
// CharacterChecker("B");


// Question 4: Number or String
// Write a function that takes one value and checks whether it is a number or a string.

// Answer 4:

// function checkNumber(num){
//     console.log(typeof(num));
// }
// checkNumber("t");


// Question 5: Prime Number
// Write a function that accepts a positive number and checks whether it is a prime number.

// Answer 5:

// function primeNumber(num){
//     if(num>=3){
//         let i = 2;
//         while(i<num){
//             if(num%i==0){
//                 console.log(`${num} is not a Prime number.`);
//                 break;
//             }
//             i++;
//         }
//         if(num==i){
//             console.log(`${num} is a Prime number.`);
//         }
//     }
//     else if(num==2){
//         console.log(`${num} is a Prime number.`);
//     }
//     else {
//         console.log(`${num} is not a Prime number.`);
//     }
// }
// primeNumber(103);


// Question 6: Type Finder
// Write a function that takes any value and returns the type of that value.

// Answer 6:

// function Typefinder(num){
//     console.log(typeof(num));
// }
// Typefinder("$");


// Question 7: Triangle Area
// Write a function to calculate the area of a triangle given its base and height.

// Answer 7:

// function CalculateArea(base, height) {
//     let Area = (base*height)/2;
//     console.log(Area);
// }
// CalculateArea(3, 6);


// Question 8: Greater Number
// Write a function that takes two numbers and prints which number is greater.

// Answer 8:

// function GreaterNumber(num1, num2){
//     if(num1>num2){
//         console.log(`${num1} is Greater`);
//     }
//     else if(num2>num1){
//         console.log(`${num2} is Greater`);
//     }
//     else if(num1==num2){
//         console.log("Both are equal");
//     }
// }
// GreaterNumber(10, 99);


// Question 9: Function Name
// Write a function that prints its own function name.

// Answer 9:

// function YahaEkNameHai(){
//     console.log(YahaEkNameHai.name);
// }
// YahaEkNameHai();


// Question 10: Arrow Function
// Write an arrow function greetUser that:

// Takes a name as parameter
// Returns "Hello, <name>!"
// Uses default name "Guest" if no name is passed

// Answer 10:

// let greetUser = (Name) => `Hello, ${Name}`;

// console.log(greetUser("Aman"));


// Question 11: Convert to Arrow Function
// Convert the following function into an arrow function:

// function isEven(num) {
//     return num % 2 === 0;
// }

// Answer 11:

// let  isEven = (num) => num % 2 === 0;


// Question 12: Callback Function
// Write a function performOperation(a, b, operation) that:

// Accepts two numbers and a callback function
// Calls operation(a, b) inside it
// Returns the result
// Create three callback functions: add, subtract, multiply.

// Example:

// performOperation(5, 3, add)      // 8
// performOperation(5, 3, subtract) // 2
// performOperation(5, 3, multiply) // 15

// Answer 12:

// function add(a, b){
//     return a+b;
// }

// function subtract(a, b){
//     return a-b;
// }

// function multiply(a, b){
//     return a*b;
// }

// function performOperation(a, b, operator){
//     return operator(a, b);
// }

// console.log(performOperation(5, 3, add));     
// console.log(performOperation(5, 3, subtract) );     
// console.log(performOperation(5, 3, multiply));     
