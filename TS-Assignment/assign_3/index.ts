// Q#1 Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
var celsius: number = 20;
var fahrenheit: number = (celsius * 9/5) + 32;
// console.log(fahrenheit);

//  Q#2 Write a program that calculates the percentage.
var givenValue: number = 45;
var totalValue: number = 100;
var percentage: number = (givenValue / totalValue)* 100;
// console.log(percentage);

//  Q#3 Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var day: number = 20;
var week: number = Math.floor (day / 7);
var totalWeek: number = Math.floor (week);
var leftDays: number = Math.floor ( day % 7 );
// console.log( totalWeek + " weeks " + leftDays + " days");

//  Q#4 Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var productPrice:number = 120;
if (productPrice > 100) {
    var discount: number = productPrice * 0.1;
}
else {
    var discount: number = productPrice * 0.05;
}
// console.log(discount);

//  Q#5Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age: number = 12;
// if (age > 0 && age < 13) {
//     console.log("Child");
// }
// else if (age >= 13 && age <= 19) {
//     console.log("Teenager");
// }
// else {
//     console.log("Adult");
// }

//  Q#6 Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var tem:number = 12;
// if (tem < 20) {
//     console.log("Wear warm clothes");
// }
// else {
//     console.log("Wear light clothes");
// }

//  Q#7 Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

var num: number = 15;
// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("Divisible by 3 or 5");
// }
// else {
//     console.log("Not divisible by 3 or 5");
// }

//  Q#8 Write a program that checks if the given year is leap year or not.

var year: number = 2000;
// if (year % 4 == 0 && year % 100!= 0 || year % 400 == 0) {
//     console.log(year + " is a leap year");
// }
// else {
//     console.log(year + " is not a leap year");
// }

//  Q#9 Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var day: number = 1;
// if (day == 1) {
//     console.log("Monday");
// }

// else if (day == 2) {
//     console.log("Tuesday");
// }

// else if (day == 3) {
//     console.log("Wednesday");
// }

// else if (day == 4) {
//     console.log("Thursday");
// }

// else if (day == 5) {
//     console.log("Friday");
// }

// else if (day == 6) {
//     console.log("Saturday");
// }

// else{
//     console.log("Sunday");
// }

//  Q#10 Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.

var bill: number = 200;
if (bill > 100) {
    var tax: number = bill * 0.1;
}
else if (bill > 200 && bill <= 500) {
    var tax: number = bill * 0.15;
}

else {
    var tax: number = bill * 0.25;
}
console.log(tax);
