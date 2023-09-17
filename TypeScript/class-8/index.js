"use strict";
let userName = "Pakistan";
// let car:string[] = ["color", "Black", "price" ,"200k", "company", "Vigo"]
//  OBJECT
//    Object represent single entity
let car = {
    color: "Black",
    price: "200k",
    company: "Vigo"
    // run: function(){                                              
    //     return a+b;       // When we add function in the key then it is called ACTION;
    // }
};
// console.log(car.price);
// Define Cars object in Array
var cars = [
    {
        company: "Suzuki",
        color: "Red"
    },
    {
        company: "Toyota",
        color: "Gray"
    }
];
var car2 = {
    company: "Toyota",
    year: 2023,
    isUsedCar: false
};
var cars2 = [
    {
        company: "Suzuki",
        color: "Red"
    },
    {
        company: "Toyota",
        color: "Gray"
    }
];
var carArr = [
    { company: "Toyota", year: 2023, color: "Black" },
    { company: "BMW", year: 2020, color: "White" },
    { company: "Honda", year: 2023, color: "Gray" },
    { company: "kai", year: 2016, color: "Violet" },
    { company: "Audi", year: 2022, color: "Red" },
    { company: "Nissan", year: 2019, color: "Gray" },
    { company: "Ford", year: 2019, color: "Orange" },
    { company: "Porsche", year: 2018, color: "Pink" },
    { company: "Fiat", year: 2021, color: "Blue" },
    { company: "Buick", year: 2017, color: "Green" },
];
for (const element of carArr) {
    console.log(element["company"] + element['year']);
}
