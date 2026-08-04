// SECTION 1: PROGRAMMING QUESTIONS

// 1️⃣ FizzBuzz Problem
// Write a JavaScript program that:

// Iterates integers from 1 to 50.
// Prints "Fizz" for multiples of 3.
// Prints "Buzz" for multiples of 5.
// Prints "FizzBuzz" for multiples of both 3 and 5.
// Otherwise prints the number.

// Answer 1:

// for(let i=1; i<=50; i++){
//     if(i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     } else if(i%3===0){
//         console.log("Fizz");
//     } else if(i%5===0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// 2️⃣ Greatest Common Divisor (GCD)
// Create two variables num1 and num2.
// Assign any two positive integers.
// Use a for loop to compute the GCD.
// Print the result in this format:
// The GCD of num1 and num2 is ...

// Answer 2:

// let num1 = 120;
// let num2 = 160;
// let gcd = 1;

// for(let i=1; i<=Math.min(num1, num2); i++){
//     if(num1%i===0 && num2%i===0){
//         gcd = i;
//     }
// }

// console.log(`GCD of ${num1} and ${num2} is ${gcd}`);


// 3️⃣ Sum of Multiples
// Initialize a variable sum = 0.
// Use a for loop from 1 to 49.
// If a number is a multiple of 3 or 5, add it to sum.
// Print:
// The sum of all multiples of 3 and 5 below 50 is ...

// Answer 3:

// let sum = 0;

// for(i=1; i<=49; i++){
//     if(i%3===0 || i%5===0){
//         sum += i;
//     }
// }

// console.log(`The sum of all multiples of 3 and 5 below 50 is ${sum}`);


// 4️⃣ Pattern Printing (Nested Loops)
// Use nested for loops to print the following patterns:

// Answer 4:

// Pattern 1
// * * * * *
// * * * *
// * * *
// * *
// *

// Answer: 

// for(let i=5; i>=1; i--){

//     let a = '';
//     for(let j=i; j>=1; j--){
//         a += '*'
//     }
//     console.log(a);
// }

// Pattern 2 – Floyd’s Triangle
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15

// Answer: 

// let a = 1;

// for(let i=1; i<=5; i++){
//     let b = '';

//     for(let j=1; j<=i; j++){
//         b += a + ' ';
//         a++;
//     }
//     console.log(b);
// }

// Pattern 3
// 1  2  3  4  5
// 6  7  8  9
// 10 11 12
// 13 14
// 15

// let a = 1;

// for(let i=5; i>=1; i--){
//     let b = '';

//     for(let j=i; j>=1; j--){
//         b += a + ' ';
//         a++;
//     }
//     console.log(b);
// }

// Pattern 4
// 1111*1111
// 111***111
// 11*****11
// 1*******1
// *********

// Answer:

// let stars = 1;
// let row = 5;

// for(let i=row; i>=1; i--){
//     let b = "";

//     for(let j=i; j>1; j--){
//         b += 1+'';
//     }

//     for(let k=1; k<=stars; k++){
//         b += "*"+'';
//     }

//     for(let j=i; j>1; j--){
//         b += 1+'';
//     }
//     stars += 2;
//     console.log(b);
// }

// Pattern 5
//     *
//    ***
//   *****
//  *******
// *********

// Answer:

// let stars = 1;
// let row = 5;

// for(let i=row; i>=1; i--){
//     let b = "";

//     for(let j=i; j>1; j--){
//         b += ' ';
//     }

//     for(let k=1; k<=stars; k++){
//         b += "*"+'';
//     }

//     stars += 2;
//     console.log(b);
// }

// 5️⃣ Advanced Loop Conditions
// Write a program that prints numbers from 1 to 1000. For each number:

// If multiple of 2 $ ightarrow$ print "Foo"
// If multiple of 3 $ ightarrow$ print "Fizz"
// If multiple of 5 $ ightarrow$ print "Buzz"
// If multiple of 7 $ ightarrow$ print "Bar"
// If multiple conditions match $ ightarrow$ print combined words (Example: 6 $ ightarrow$ FooFizz)
// If none match $ ightarrow$ print the number itself

// Answer 5:

// for(let i=1; i<=1000; i++){

//     switch(true){
//         case i%2==0 && i%3==0 && i%5==0 && i%7==0: console.log("FooFizzBuzzBar") 
//         break;

//         case i%2==0 && i%3==0 && i%5==0: console.log("FooFizzBuzz")
//         break;

//         case i%2==0 && i%3==0 && i%7==0: console.log("FooFizzBar")
//         break;

//         case i%2==0 && i%5==0 && i%7==0: console.log("FooBuzzBar") 
//         break;

//         case i%3==0 && i%5==0 && i%7==0: console.log("FizzBuzzBar") 
//         break;

//         case i%2==0 && i%3==0: console.log("FooFizz") 
//         break;

//         case i%2==0 && i%5==0: console.log("FooBuzz") 
//         break;

//         case i%2==0 && i%7==0: console.log("FooBar") 
//         break;

//         case i%3==0 && i%5==0: console.log("FizzBuzz") 
//         break;

//         case i%3==0 && i%7==0: console.log("FizzBar") 
//         break;

//         case i%5==0 && i%7==0: console.log("BuzzBar") 
//         break;

//         case i%2==0: console.log("Foo") 
//         break;

//         case i%3==0: console.log("Fizz") 
//         break;

//         case i%5==0: console.log("Buzz") 
//         break;

//         case i%7==0: console.log("Bar") 
//         break;

//         default: console.log(i);
//     }
// }


// SECTION 2: WRITTEN & CONCEPTUAL TASKS

// Task 1
// Write a JavaScript program to print "Hello World" 10 times.

// Answer 1:

// for(let i=1; i<=10; i++){
//     console.log("Hello World");
// }


// Task 2
// Write a for loop to print:

// 10
// 20
// 30
// 40
// 50

// Answer 2:

// for(let i=1; i<=5; i++){
//     console.log(i*10);
// }


// Task 3
// Predict the output and explain the reasoning:

// for (let i = 0; i < 5; i++) {
//     const name = "Sindhura";
//     console.log(i);
// }

// console.log(i);

// Answer 3:

// Output 0, 1, 2, 3, 4, error. (error occur because let is blocked scope so console log outside the for loop will show reference error.)


// Task 4
// Predict the output and explain what changes from the previous problem:

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

// Answer 3:

// Output 0, 1, 2, 3, 4, 5. (Because it use var instead of let and var is only function scoped, so console log outside the for loop van access it.)


// Task 5
// Write a JavaScript program to print the multiplication table of 5 in this format:

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25

// Answer 5: 

// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }


// Task 6
// Write a JavaScript program to print:

// *****

// Answer 6: 

// let a = '';

// for(let i=1; i<=5; i++){
//     a += "*"+'';
// }

// console.log(a);


// Task 7
// Print the pattern:

// *
// **
// ***
// ****

// Answer 7: 

// let a = '';

// for(let i=1; i<=4; i++){
//     a += "*"+'';
//     console.log(a);
// }


// Task 8
// Print the pattern:

// ****
// ****
// ****
// ****

// Answer 8: 

// let a = "****";

// for(let i=1; i<=4; i++){
//     console.log(a);
// }


// Task 9
// Print the pattern:

// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678

// Answer 9:

// for(let i=1; i<=8; i++){

//     let a = 1;
//     let b = '';

//     for(let j=1; j<=i; j++){
//         b += a+'';
//         a++;
//     }

//     console.log(b);
// }


// Task 10
// Print the pattern:

// 9
// 98
// 987
// 9876
// 98765
// 987654
// 9876543
// 98765432
// 987654321

// Answer 10:

// for(let i=1; i<=9; i++){

//     let a = 9;
//     let b = '';

//     for(let j=1; j<=i; j++){
//         b += a+'';
//         a--;
//     }

//     console.log(b);
// }


// Task 11
// Print the pattern:

// 12345
// 1234
// 123
// 12
// 1

// Answer 11:

// for(let i=1; i<=5; i++){

//     let a = 1;
//     let b = '';

//     for(let j=5; j>=i; j--){
//         b += a+'';
//         a++;
//     }

//     console.log(b);
// }


// Task 12
// Print the pattern:

// 11118
// 11188
// 11888
// 18888
// 88888

// Answer 12:

// let rows = 5;

// for(let i=1; i<=rows; i++){
//     let output = "";
//     let ones = rows - i;

//     for(let j=1; j<=ones; j++){
//         output += 1+'';
//     }
//     let eights = rows - ones;
//     for(let k=eights; k>=1; k--){
//         output += 8+'';
//     }
//     console.log(output);
// }

// Task 13
// Print the pattern:

// 0 * 9 + 8         = 8
// 9 * 9 + 7         = 88
// 98 * 9 + 6       = 888
// 987 * 9 + 5      = 8888
// 9876 * 9 + 4     = 88888
// 98765 * 9 + 3    = 888888
// 987654 * 9 + 2   = 8888888
// 9876543 * 9 + 1  = 88888888
// 98765432 * 9 + 0 = 888888888

// Answer 13:

// let multi = 0;
// let add = 8;
// let lines = 9;

// for(let i=1; i<=9; i++){

//     console.log(`${multi} * 9 + ${add} = ${multi*9+add}`);

//     multi += lines+'';
//     lines--;
//     add--;
// }

// Task 14
// Print the pattern:

// 1 x 8 + 1 = 9
// 12 x 8 + 2 = 98
// 123 x 8 + 3 = 987
// 1234 x 8 + 4 = 9876
// 12345 x 8 + 5 = 98765
// 123456 x 8 + 6 = 987654
// 1234567 x 8 + 7 = 9876543
// 12345678 x 8 + 8 = 98765432
// 123456789 x 8 + 9 = 987654321

// Answer 14:

// let multi = '';
// let add = 1;
// let lines = 9;

// for(let i=1; i<=lines; i++){
//     multi += i+'';
//     console.log(`${multi} * 8 + ${add} = ${multi*8+add}`);
//     add++;
// }

// Task 15
// Print the pattern:

// 1 9 0
// 2 8 2
// 3 7 4
// 4 6 6
// 5 5 8
// 6 4 10

// Answer 15:

// let first = 1;
// let second = 9;
// let third = 0;

// while(third!=12){
//     let output='';
//     output += first+' ';
//     output += second+' ';
//     output += third+' ';
//     first++;
//     second--;
//     third += 2;
//     console.log(output);
// }