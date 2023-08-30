// COMMENTS
//1- Single line comment
/*2-Multiple 
line 
Comment*/



var userName: string= "Bushra";
var userName2: string= `${userName} Riaz`; //Template literal string
var userName3: string= 'Khadija';
// console.log(userName2);
var num:number = 10;
// console.log(typeof num);


// Conditions
/* if (condition true/false) {
    block of ConvolverNode;
 }*/


// 1- ARITHEMTIC OPERATORS
/*var num1: number = 5;
var num2: number = 10;
var sum:number = num1 + num2;
console.log(sum);
var sub:number = num1 - num2;
console.log(sub);
var mul:number = num1 * num2;
console.log(mul);
var exponent:number = 2** 5;
console.log(exponent);
var div:number = num1 / num2;
console.log(div);
var rem:number = num1 / 3;
console.log(rem);*/

// 2-ASSIGNMENT OPERATOR
var num:number = 6;
num += 2;  // num = num + 2;
num -= 2;  // num = num - 2;
num *= 2;  // num = num * 2;
num /= 2;  // num = num / 2;

// 3-COMPARISON OPERATORS
var num1: number = 10;
var num2: number = 20;
//Comparison Operators return BOOLEAN type value.

//less than operator 
var result1: boolean = num2 < num1;
//greater than operator
var result2: boolean = num1 > num2;
//equal to operator
var result3: boolean = num1 == num2;
// value check and datatype
var result4: boolean = num1 === num2;
// not equal to operator
var result5: boolean = num1 != num2;
// greater than and equal to operator
var result6: boolean = num1 >= num2;
// less than and equal to operator
var result7: boolean = num1 <= num2;
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);
// console.log(result7);




// 1-OR OPERATORS
/*Input1 Input2 result
true    true    true
true    false   true
false   true    true
false   false   false*/

// 2-AND OPERATORS
/*Input1 Input2 result
true   true   true
true   false  false
false  true   false
false  false  false*/

// 3-NOT OPERATORS
/*Input1  result
true      false
true      false
false     true
false     true*/