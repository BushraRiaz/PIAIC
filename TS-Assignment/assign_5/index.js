"use strict";
//Q#1 Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function calculateSum() {
    let sum = 0;
    for (let i = 0; i <= 20; i++) {
        let evenNum = 2 * i;
        sum += evenNum;
    }
    console.log(sum);
}
// calculateSum();
//Q#2 Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let myArr1 = [1, 2, 3, 4, 5, 6];
let evenArray = [];
for (let i = 0; i < myArr1.length; i++) {
    if (myArr1[i] % 2 == 0) {
        evenArray.push(myArr1[i]);
    }
}
// console.log("Even number Array " , evenArray);
//Q#3Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones.
let myArr2 = [1, 2, 3, 4, 5, 6];
let oddArr = [];
for (let i = 0; i < myArr2.length; i++) {
    if (myArr2[i] % 2 != 0) {
        oddArr.push(myArr2[i]);
    }
}
// console.log("Odd Number Array", oddArr);
// Q#4 Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radius) {
    let area = 3.1416 * radius * radius;
    return area;
}
let totalArea = areaOfCircle(3);
// console.log("Area of Circle", totalArea)
//Q#5 Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let grades = [55, 70, 65, 93, 40, 33];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
        grades.splice(i, 1);
        i--;
    }
}
console.log(grades);
//Q#6 Write a program that uses a function to find the largest element in an array of numbers.
let largeNum = 0;
function toFindlargestNum(arrNum) {
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > largeNum) {
            largeNum = arrNum[i];
        }
    }
    return largeNum;
}
let arrNum = [2, 6, 8, 10, 33];
console.log(toFindlargestNum(arrNum));
