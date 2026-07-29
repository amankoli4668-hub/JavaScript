// SECTION 1: COMPARISON & TYPE COERCION


// Question 1
// Predict the output and explain the reasoning:

// console.log("9" > "100");      
// console.log(9 > "100");        
// console.log("5" == 5 && "5" === 5);
// console.log(null == 0);        
// console.log(undefined == null);

// Answer 1: 

// console.log("9" > "100"); (It will print true. Both are strings so it will compair one by one. so it compair 9 and 1 first, 9 is greater than 1 so it will print true.)

// console.log(9 > "100"); (It will print false. because one is a number and another is string. so compair operator will try to convert string into number, so on compairing 9 and 100, 100 is greater than 9, so it will print false.)

// console.log("5" == 5 && "5" === 5); (It will print false, because "And operator" is ture if and only both is true. so here "5" == 5, is true because == will only compair value not type and "5" === 5 is false because it compair value also type. so it is false and "And operator" will print false.)

// console.log(null == 0); (it will print false, because null is only loosly equal to undefined only. so it will print false.)

// console.log(undefined == null); (it will print true, because null is only loosly equal to undefined only. so it will print true.)


// Question 2: Assignment & Comparison Logic
// What is the main difference between these two statements?

// A) Both perform addition
// B) a =+ b subtracts b
// C) a =+ b assigns positive b to a
// D) Both are invalid

// Answer 2: C 


// Question 3
// What will be the output?

// let a = 5;
// console.log(a == "5");
// A) true
// B) false
// C) Error
// D) undefined

// Answer 3: A


// SECTION 2: LOGICAL OPERATORS


// Question 1
// Predict the output:

// console.log(0 && "hello");
// console.log("world" || 0);
// console.log(null || undefined && "JS");
// console.log(" " && 55 && [] && "done");

// Answer 1: 

// console.log(0 && "hello"); (It print 0. Because && operator print 1st falsy value and here 0 is 1st falsy value, so it print 0.)

// console.log("world" || 0); (It print "world". Because || operator print 1st truely value and here "world" is 1st truely value, so it print "world".)

// console.log(null || undefined && "JS"); (It print undefined. Because 1st || operator will be used and it print 1st truely value or last falsy value. so print undefined and then && operator will used. && operator print 1st falsy value which is undefined so it print undefined.)

// console.log(" " && 55 && [] && "done"); (It print "done". Because && operator print 1st falsy value or last truely value, so here is last truely value is "done", it print "done".)


// Question 2
// What will be printed?

// console.log(true && false);
// A) true
// B) false
// C) undefined
// D) Error

// Answer 2: B


// SECTION 3: ASSIGNMENT, BITWISE OPERATORS & EXPRESSIONS


// Question 1
// Rewrite using shorthand operators:

// let x = 10; 
// x = x + 5;  (x += 5)
// x = x - 3;  (x -= 3)
// x = x * 2;  (x *= 2)


// Question 2
// Predict the final values:

// let p = 7; 
// let q = 12; 
// let r = 5;    

// p = p & r;   
// q = q | r;                                  
// r = r ^ p;                                  

// console.log(p, q, r); => (5, 13, 0)


// Question 3: Expression & Logical Thinking
// Predict the output:

// let a = 4, b = "6", c = 2;
// console.log(a + b * c);
// A) 16
// B) 20
// C) "46"
// D) "162"

// Answer 3: A


// Question 4
// What will be printed?

// let a = 4, b = "6", c = 2;
// console.log((a + b) * c);
// A) 92
// B) 16
// C) "92"
// D) Error

// Answer 4: A


// Question 5
// What is the output?

// let a = 4, b = "6", c = 2;
// console.log(a++ + --c + b);
// A) 12
// B) "56"
// C) 96
// D) Error

// Answer 5: B