// console.log("Before async Print");      //Parent Process 
function doSomething (){
        // console.log("Print Something");    //child process   
}
//  setTimeout(doSomething, 5000)   //(functionName, Time) this is Async code 
 setInterval(doSomething, 2000)         //Default run code, it can't stop code untill I stop it
// setTimeout(()=>{
//      console.log("Print Something");
// }, 5000);  

// console.log("After  async Print");      //Parent Process 

                  //OOP
 
 //Polymorphism
 //Abstraction
//Encapsulation
//Static Method
//Class Method
//Constructor
//Property
//Getter and Setter
//Static Property
//Static Getter and Setter
//Method Overloading
//Method Overriding
//Method Overriding


 let car:{} ={
price : 45689,
color: "black"
}
 type carType =  {price:number, color: string}
class Car{
price:number = 0;
color:string = 'not defined';
constructor(price:number, color:string){
    this.price = price;
    this.color = color;
    console.log("Construtor")      //Constructor run automatically
}
}   
const startCar = ()=>{
    console.log("Startcar");
    return 0
}  
let carA:carType = new Car()   //"new" make object and Car() is class
let carB:carType = new Car()  
carA.startCar();  
