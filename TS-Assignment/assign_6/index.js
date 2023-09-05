"use strict";
// Q#1 Write a program that uses filter to remove all negative numbers from an array of numbers
let arr = [-2, 4, -7, -3, 8, 2];
function toRemoveNegNum() {
    return arr.filter(num => {
        if (num > 0)
            return num;
    });
}
// console.log(toRemoveNegNum());
// Q#2 Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let numArr = [1, 2, 3, 4, 5];
function toMultiplyNum() {
    return numArr.map(num => {
        return num * 2;
    });
}
// console.log(toMultiplyNum());
// Q#3 Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let fruit = ["apple", "banana", "cherry", "date", "grape"];
function myFruit() {
    return fruit.filter(ele => {
        if (ele.length > 5)
            return ele;
    });
}
// console.log(myFruit());
// Q#4 Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function myNumSquare() {
    const evenSquare = myNum.filter((num) => {
        if (num % 2 == 0)
            return num;
    });
    return evenSquare.map((num) => {
        return num * num;
    });
}
// console.log(myNumSquare());
// Q#5 Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let arr2 = [0, 10, 20, 30, 40];
function toFahrenheit() {
    return arr2.map(value => {
        return (value * 9 / 5) + 32;
    });
}
// console.log("Temperature in Fahrenheit ", toFahrenheit());
// Q#6 Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let arr3 = [3, 6, 9, 12, 15, 18];
function oddNum() {
    const oddNumValue = arr3.filter((num) => {
        if (num % 2 != 0)
            return num;
    });
    return oddNumValue.map((num) => {
        return num + num;
    });
}
// console.log(oddNum());
//Q#7 Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let nameArr = ["Alice", "Bob", "Charlie", "David", "Emily"];
function myFun() {
    nameArr.forEach(element => {
        console.log(element + "!");
    });
}
console.log(myFun());
