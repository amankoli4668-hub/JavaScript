// SECTION 1: ARRAY BASICS
// Question 1: Array Access and Length
// Create an array of 5 of your favorite fruits (as strings).
// Then perform the following operations:

// Answer 1:

// let fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

// a) Access the second fruit using index and print it.

// console.log(fruits[1]);  //output -> Mango

// b) Access the last fruit using index and print it.

// console.log(fruits[4]);  //output ->  Orange

// c) Print the length of the array.

// console.log(fruits.length);  //output ->  5

// d) Modify the third element of the array and print the updated array.

// fruits[2] = "Pineapple";  
// console.log(fruits);  //output ->  [ 'Apple', 'Mango', 'Pineapple', 'Grapes', 'Orange' ]


// Question 2: Understanding Array References
// Given the following array:

// let arr1 = [10, 20, 30, 40];
// Part 1

// let arr1 = [10, 20, 30, 40];

// a) Assign arr1 to another variable arr2.

// let arr2 = arr1;

// b) Modify the second element of arr2 to 99.

// arr2[1] = 99;

// c) Print both arr1 and arr2.

// console.log(arr1);  //output -> [ 10, 99, 30, 40 ]
// console.log(arr2);  //output -> [ 10, 99, 30, 40 ]

// d) Explain what happens and why both arrays behave this way.

// arr2 did not copy arr1, it use reference value of arr1, that why when we do change in arr2 it also change in arr1. To fully copy array we use spread operator (...).

// Part 2
// Create a new array arr3 using the slice() method to make a shallow copy of arr1.

// let arr3 = arr1.slice(0, 4);

// a) Modify the last element of arr3 to 88.

// arr3[1] = 88;
// arr3[2] = 88;
// arr3[3] = 88;

// b) Print arr1, arr2, and arr3.

// console.log(arr1);  //output -> [ 10, 99, 30, 40 ]
// console.log(arr2);  //output -> [ 10, 99, 30, 40 ]
// console.log(arr3);  //output -> [ 10, 88, 88, 88 ]

// c) Explain the behavior of each array

// arr1 is changed because we use arr1 reference value in arr2, so when we change arr2 arr1 also changed. Now arr3 is copied using slice method. Slice method return a new array from previous one, so arr3 is fully copy array, so when we change in arr3 it has no impact on arr1 and arr2.


// SECTION 2: ARRAY METHODS


// Question 1: Basic Array Methods
// Create an array of numbers:

// [12, 15, 20, 25, 30]
// Perform the following operations:

// Answer 1:

// let numbers = [12, 15, 20, 25, 30];

// a) Use the push() method to add a number to the array.

// numbers.push(40);
// console.log(numbers); //output -> [ 12, 15, 20, 25, 30, 40 ]

// b) Use the pop() method to remove the last number from the array.

// numbers.pop();
// console.log(numbers); //output -> [ 12, 15, 20, 25, 30 ]

// c) Use indexOf() to find the position of 20 and print it.

// let num = numbers.indexOf(20);
// console.log(num); //output -> 2


// Question 2: Working with Array Methods
// Given the array:

// let colors = ["red", "blue", "green", "yellow", "purple", "black"];

// a) Extract the middle three colors into a new array.

// let subColour = colors.slice(2, 5);
// console.log(subColour); //output -> [ 'green', 'yellow', 'purple' ]
 
// b) Does this operation change the original array? Explain why or why not.

// Because I used slice method which retrun a new array and does not change old array.


// Question 3: Insert and Remove Elements
// Given the array:

// let items = ["pen", "pencil", "eraser", "scale", "sharpener"];

// a) Remove "eraser" and "scale" from the array.

// items.splice(2, 2);
// console.log(items); //output -> [ 'pen', 'pencil', 'sharpener' ]

// b) Insert "marker" and "ruler" at the same position.

// items.splice(2, 0, "marker", "ruler");
// console.log(items); //output -> [ 'pen', 'pencil', 'marker', 'ruler', 'sharpener' ]


// SECTION 3: ADVANCED ARRAY OPERATIONS


// Question 1: Replace Values in an Array
// Given the array:

// let scores = [12, 25, 37, 48, 59, 63, 77];

// a) Replace only the last three values with 0.

// scores.fill(0, 4);
// console.log(scores); //output -> [ 12, 25, 37, 48, 0,  0,  0 ]

// b) Then overwrite the entire array with "N/A".

// scores.fill("N/A");
// console.log(scores); //output -> [ 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A' ]


// Question 2: Filtering Data from Arrays
// Given the array:

// let numbers = [11, 22, 35, 42, 59, 60, 73, 88];

// a) Create a new array containing only numbers greater than or equal to 50.

// let newArr = numbers.filter((num) => num >= 50);
// console.log(newArr); //output -> [ 59, 60, 73, 88 ]

// b) Write a separate function that checks whether a number is even, and use it to get only the even numbers from the original array.

// function even(n){
//     if(n%2==0){
//         return n;
//     }
// }

// let evenArr = numbers.filter(even);
// console.log(evenArr);

// Question 3: Looping Through Nested Arrays
// Loop through the following nested array using a for loop and print each value:

// let cube = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]];

// cube.forEach((value) => {
//     value.forEach((value) => {
//         value.forEach((value) => console.log(value));
//     });
// });

