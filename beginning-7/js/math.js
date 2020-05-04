/*eslint-env browser*/

//STEP 1
const number = prompt("Enter a positive or negative number");
console.log("Number is: " + Math.abs(number));
// STEP 2
const des = prompt("Enter a number with decimals");
console.log("Number: " + Math.ceil(des));
//STEP 3
const num = prompt("Enter a number with decimals");
console.log("Number is: " + Math.floor(num));
//STEP 4
const num2 = prompt("Enter numbers separately with commas (1, 2, 3...)");
const numDif = num2.split(',');
const numArray = Array.from(numDif);
console.log(numArray);
console.log("On the list of the Numbers largest is: " + Math.max.apply(null,numArray) + " smallest Number is: " + Math.min.apply(null, numArray));

//STEP 5
const num3 = prompt("Enter a Number to find its square root!");
console.log(Math.sqrt(num3));