// SECTION 1: PRACTICAL CODING TASKS


// Task 1: Dynamic Property Access
// In your browser environment, define the following object:

// const user = {
//     username: "srija_dev",
//     email: "srija@example.com",
//     city: "Hyderabad"
// };
// Requirements:

// Prompt the user to enter which detail they want (username, email, or city).
// Display the corresponding value.
// If the entered detail does not exist (e.g., "address"), display: "Detail not available".

// Answer 1:

// const user = {
//     username: "srija_dev",
//     email: "srija@example.com",
//     city: "Hyderabad"
// };

// function getDetail(obj, key){
//     if(obj[key] === undefined){
//         console.log("Detail not available.")
//     }
//     else{
//         console.log(obj[key]);
//     }
// }

// let key = prompt('Enter which detail you want');

// getDetail(user, key);


// Task 2: Object Transformation
// Given:

// const marks = {
//     math: 70,
//     english: 65,
//     science: 80
// };
// Requirements:

// Create a new object called updatedMarks.
// Increase each mark value by 5.
// Expected Output Format:
// The values of updatedMarks are: { math: 75, english: 70, science: 85 }

// Answer 2:

// const marks = {
//     math: 70,
//     english: 65,
//     science: 80
// };

// const updatedMarks = {};

// for(let key in marks){
//     updatedMarks[key] = marks[key]+5;
// }
// console.log(updatedMarks); //output -> { math: 75, english: 70, science: 85 }


// Task 3: Object Property Manipulation
// Given:

// const book = {
//     title: "The Mystery Box",
//     author: "A. Writer",
//     publishedYear: 2010,
//     isAvailable: true
// };
// Requirements:

// Change title to "The secret key".
// Add a new property: genre: "Thriller".
// Remove isAvailable.
// Remove author using bracket notation.

// Answer 3:

// const book = {
//     title: "The Mystery Box",
//     author: "A. Writer",
//     publishedYear: 2010,
//     isAvailable: true
// };

// book.title = "The secret key";
// console.log(book); //output -> { title: 'The secret key', author: 'A. Writer', publishedYear: 2010, isAvailable: true}

// book.genre = "Thriller"; 
// console.log(book); //output -> { title: 'The secret key', author: 'A. Writer', publishedYear: 2010, isAvailable: true, genre: 'Thriller'}

// delete book.isAvailable;
// console.log(book); //output -> { title: 'The secret key', author: 'A. Writer', publishedYear: 2010, genre: 'Thriller'}

// delete book['author'];
// console.log(book); //output -> { title: 'The secret key', publishedYear: 2010, genre: 'Thriller' }


// Task 4: Product Object with Methods
// Create an object product with:

// name
// price
// discount (percentage)
// Add Methods:

// calculateFinalPrice(): Returns price after applying discount.
// updateDiscount(newDiscount): Updates discount using this and logs the updated final price.

// Answer 4:

// const Product = {
//     name: 'Car',
//     price: 1200000,
//     discount: 10,
//     calculateFinalPrice: function(){
//         return this.price - (this.price*this.discount/100);
//     },
//     updateDiscount: function(newDiscount){
//         this.discount = newDiscount;
//         console.log(`updated final price: ${this.calculateFinalPrice()}`);
//     }

// }

// Product.updateDiscount(30); //output -> updated final price: 840000