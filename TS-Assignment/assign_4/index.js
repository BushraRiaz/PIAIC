"use strict";
// Q#1 Create a function that takes an array , an index, and a value as a parameters. inside the function, use the splice method to insert the value at the specidied index in the array . Return the modified array.
function creteFun(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
const initalArr = [0, 1, 2, 3];
const updatedArr = creteFun(initalArr, 4, 4);
// console.log(updatedArr)
//  Q#2 Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
//    Add items
const cart = ["chocolates", "lays", "juice"];
function myFun(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
const addItem = myFun(cart, cart.length, "coke");
// console.log(addItem);
//   Remove Item
function removeItem(arr, index, value) {
    arr.splice(index, value);
    return arr;
}
const newItemcart = removeItem(cart, 0, 1);
// console.log(newItemcart);
//  Update Item
function updateItem(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
const updateItemcart = updateItem(cart, 1, "slanty");
// console.log(updateItemcart);
//Q#3 Write a program that uses a while loop to print the first 25 integers.
// let integers : number =0;
// while (integers< 25){
//         console.log(integers)
//     integers++;
// }
//Q#4 Write a program that uses a while loop to print the first 10 even numbers.
// let num:number = 2;
// while (num<21){
//     console.log(num)
// num+=2;
// }
//Q#5 Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function myFactorial(num) {
    if (num > 0) {
        let factorail = 1;
        let currentNum = num;
        while (currentNum > 0) {
            factorail *= currentNum;
            currentNum--;
        }
        return factorail;
    }
    else {
        console.log("The given number is negative");
    }
}
// console.log(myFactorial(5));
//Q#6 Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let number = 0;
let myArr = [1, -3, 5, -7, 8];
while (number < myArr.length) {
    if (myArr[number] < 0) {
        myArr.splice(number, 1);
    }
    else {
        number++;
    }
}
// console.log(myArr)
// Q#7 Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function returnSum(arr) {
    let sumOfNum = 0;
    let i = 0;
    while (i < arr.length) {
        sumOfNum += arr[i];
        i++;
    }
    return sumOfNum;
}
let arr1 = [1, 4, 5, 7, 8];
let arraySum = returnSum(arr1);
console.log(arraySum);
