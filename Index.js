//global.prompt = require('prompt-sync')();

//console.log("This is my first programe")
//console.log("Well come John your month salary is 500000")
//const num1 = 5;
//const num2 = 3;
// add two numbers
//const sum = num1 + num2;
// display the sum
//console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);


// program that checks if the number is positive, negative or zero
// input from the user
//const number = parseInt(prompt("Enter a number: "));
// check if number is greater than 0
//if (number > 0) {
// console.log("The number is positive");
//}
// check if number is 0
//else if (number == 0) {
// console.log("The number is zero");
//}
// if number is less than 0
//else {
// console.log("The number is negative"); 
//}//
function performOperations(num1, num2) {
    console.log("Addition: " + (num1 + num2));
  
    console.log("Subtraction: " + (num1 - num2));
  
    console.log("Multiplication: " + (num1 * num2));
  
    if (num2 !== 0) {
      console.log("Division: " + (num1 / num2));
    } else {
      console.log("Division by zero is not allowed.");
    }
  }
  
  const num1 = 80;
  const num2 = 90;
  
  performOperations(num1, num2);