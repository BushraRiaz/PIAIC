"use strict";
function sum(num1, num2) {
    var result = num1 + num2;
    result = result + 7; //Add 7 after calculation of sum
    console.log(result);
}
//Add 2 numbers 12 & 38
// sum(12,38)  
//If we add 7 
// Add 2 numbers 10 & 70
// sum(10,70)   
//If we add 10 then we have to change the value in function, but it change the result of above function to solve this problem we have make a new function
function sum2(num1, num2) {
    var result = num1 + num2;
    return result;
}
// Add 7 in the result when we add 12 & 38
var sumResult = sum2(12, 38);
sumResult = sumResult + 7;
console.log(sumResult);
// Add 10 in the result when we add 10 & 70
var addResult = sum2(10, 70);
addResult = addResult + 10;
console.log(addResult);
// function print(){
//     console.log("1");
// }
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");
// print()
