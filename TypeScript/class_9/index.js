"use strict";
console.log("Before async Print"); //Parent Process 
function doSomething() {
    console.log("Print Something"); //child process   
}
setTimeout(doSomething, 5000); //(functionName, Time) this is Async code 
// setTimeout(()=>{
//      console.log("Print Something");
// }, 5000);    
console.log("After  async Print"); //Parent Process  
