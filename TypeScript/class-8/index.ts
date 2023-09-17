let userName:string = "Pakistan";
// let car:string[] = ["color", "Black", "price" ,"200k", "company", "Vigo"]

                //  OBJECT
    //    Object represent single entity

let car = {
    color:"Black",      // color, price and company All are keys of Object & we store any type of key like boolean, string, number etc
    price:"200k",       // When we add Datatypes(String,Number,Boolean etc) in keys then it is called PROPERTY
    company:"Vigo"
    // run: function(){                                              
    //     return a+b;       // When we add function in the key then it is called ACTION;
    // }
 
}
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
]
// console.log(cars[0].color);

//                      Here is the way to define the Datatypes of each Object's key
//Custom key is defined by "type" word  like we define variable by var, let etc
type carType = {company:string, year:number, isUsedCar:boolean} //Custom key
var car2:carType = {
    company :"Toyota",
    year: 2023,
    isUsedCar: false
}
 
//   Define DataType of object in Array  
type carType2 = {company:string, color: string} 
var cars2:carType2[] = [
    {
        company: "Suzuki",
        color: "Red"
    },
    {
        company: "Toyota",
        color: "Gray"
    }
]


//Write a program that print all the car comapany and year number from the list , make sure car is an object
type carType3 = {company:string, year: number,color: string} 
var carArr:carType3[]= [
    {company:"Toyota", year:2023, color:"Black"},
    {company:"BMW",year:2020, color: "White"},
    {company: "Honda", year:2023, color:"Gray"},
    {company: "kai", year:2016, color:"Violet"},
    {company: "Audi", year:2022, color:"Red"},
    {company: "Nissan", year:2019, color:"Gray"},
    {company: "Ford", year:2019, color:"Orange"},
    {company: "Porsche", year:2018, color:"Pink"},
    {company: "Fiat", year:2021, color:"Blue"},
    {company: "Buick", year:2017, color:"Green"},
];
for (const element of carArr) {
    console.log(element["company"] + element['year']);
}