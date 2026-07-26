// SECTION 1 — VARIABLES 

// Question 1: Profile Builder
// Task: Declare five variables representing a fictional student:

// Full name
// Age
// Current semester
// Whether the student has a laptop (boolean)
// Average attendance percentage

// Answer 1:

let FullName = "Aman";
let Age = 21;
let CurrentSem = "5th";
let laptop = true;
let AvgAttPercenage = 98;


// Question 2: Fix the Errors
// Task: Identify and correct the mistakes in the following code:

// let city = Delhi;
// let graduationYear = "2027";
// let isHosteller = TRUE;
// let cgpa = 8.5;
// let student = {course: BSc, collegeName: Govt College};

// Also explain: The data type of each corrected variable.

// Answer 2:

let city = "Delhi";  // string
let graduationYear = 2027;  // number
let isHosteller = true;  // boolean
let cgpa = 8.5;  // number
let student = {course: "BSc", collegeName: "Govt College"}; // object


// Question 3: Swap the Values
// let firstName = "Arjun";
// let lastName = "Reddy";

//Answer 3:

let firstName = "Arjun";
let lastName = "Reddy";
let temp;

temp = firstName;
firstName = lastName;
lastName = temp;


// Question 4: Valid or Invalid?
// Task: Mark each variable declaration as Valid or Invalid. If invalid, explain why.

// Answer 4:

// let 123name = "Ravi"; Invalid (Variable names cannot start with a number)

// let $amount = 2000; Valid (Variable names can start with letter, __ and $)

// let var = "keyword"; Invalid (var is keyword of Javascript)

// let is-Eligible = true; Invaild (The sign (-) is used for subtraction in Javascript and can be use in variable names)

// let homeTown = "Chennai"; Valid


// Question 5:
// Which of the following is a valid variable declaration in JavaScript?

// A. let 1name = "Ravi";
// B. let full-name = "Ravi";
// C. let fullName = "Ravi";
// D. let var = "Ravi";

// Answer 5: C 

// Question 6
// What is wrong with the following code?

// let city = Hyderabad;
// A. Variable name is invalid
// B. Value should be inside quotes
// C. let cannot be used
// D. Hyderabad is a keyword

// Answer 6: B 


// Question 7
// Identify the correct boolean declaration:

// A. let isHosteller = TRUE;
// B. let isHosteller = "true";
// C. let isHosteller = true;
// D. let isHosteller = yes;

// Answer 7: C


// Question 8
// Which object declaration is correct?

// A. let student = {course: BSc, college: Govt};
// B. let student = {course: "BSc", college: "Govt"};
// C. let student = ["BSc", "Govt"];
// D. let student = "BSc, Govt";

// Answer 8: B


// Question 9
// What will this code do?

// let firstName = "Arjun";
// let lastName = "Reddy";

// A. Causes an error
// B. Stores numbers
// C. Stores two string values
// D. Swaps values automatically

// Answer 9: C


// Question 10
// Which variable name is INVALID?

// A. $amount
// B. homeTown
// C. is-Eligible
// D. _score

// Answer 10: C


// Question 11
// What type of value does this variable hold?

// let graduationYear = "2027";
// A. Number
// B. Boolean
// C. String
// D. Undefined

// Answer 11: C


// SECTION 2 — TYPE CONVERSION


// Question 1: Predict the Output
// Predict the output and explain why:

// console.log("20" - "5" + 3);
// console.log(4 + "6" - 2);
// console.log("8" * 2 + "2");
// console.log("7" + 2 * 3);

// Answer 1:

// console.log("20" - "5" + 3); (It will print 18. Because - operator works only with numbers, so "20" and "5" will convert into numbers first and become 15 then will add up with 3 and become 18 which is a number.)

// console.log(4 + "6" - 2); (It will print 44. Because first 4 + "6" solve and + is used for concatination also so it become 46 which is a string. Then "46" - 2 solve and - operator only works with numbers so 46 will converted into number and become 44 which is a number.)

// console.log("8" * 2 + "2"); (It will print "162". First "8" * 2 is solve and * operator works only with numbers so "8" will convert into number and become 16. Then 16 + "2" solve and + is also use for concatination so it become "162" which is a string.)

// console.log("7" + 2 * 3); (It will print "76". First * operator will work here and 2 * 3 become 6. Then "7" + 6 will solve and + is also use for concatination so it become "76" which is a string.)


// Question 2: Implicit vs Explicit Conversion

// Answer 2:

// Part A – Create Your Own Examples:

// One example where + causes string concatenation

console.log(10 + "5");

// One example where - or * causes numeric conversion

console.log("20" - "8");

// Part B – Explicit Conversion: Rewrite the above examples using:

// Number()

console.log(Number("20") - Number("8"));

// String()

console.log(String(10) + String(5));

// Boolean()

console.log(Boolean(1)); // Non zero values are truthy.
console.log(Boolean(0)); // Zero values are falsy.


// Question 3: Mix Data Types
// Predict the output and explain why:

// let a = "5";
// let b = 2;
// let c = true;

// console.log(a + b + c);
// console.log(Number(a) + b + c);
// console.log(a - c);
// console.log(a * (b + c));

// Answer 3:

// console.log(a + b + c); (It will print "52true". a + b will solve first, which is "5" + 2. Here 5 is a string and 2 is number so + will concate it and become "52" which is a string. Then "52" + c will solve which is "52" + true and here + will concate them and become "52true" which is a string.)

// console.log(Number(a) + b + c); (It will print 8. First a will convert into number so it become 5. Then a + b solve which is 5 + 2 and become 7. Then 7 + c solve, which is 7 + true and here true will convert into 1 in numerical operations, so it will become 8 which is a number.)

// console.log(a - c); (It will print 4. Here a - c solve which is "5" - true. - operator only works with numbers so it will convert "5" into number 5 and true is conver into 1 in numarical operations.it is 5 - 1. so it will become 4 which is a number.)

// console.log(a * (b + c)); (It will print 15. Here first b + c solve which is 2 + true. true is conver into 1 in numarical operations. so it is 2 + 1 become 3. then it solve a * 3 which is "5" * 3. * operator works only with numbers so "5" will convert into number and become 15 which is a number.)