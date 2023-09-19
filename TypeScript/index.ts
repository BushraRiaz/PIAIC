import inquirer, { Answers, QuestionAnswer } from 'inquirer'
// console.log("Before Pdf");
// async function createPdf(){               //async make separate thread
    //logic PDF create     
//     console.log("Pdf file is created");
// }
// createPdf();
// console.log("After Pdf");

// const createWordFile = async ()=> {
// }

// const result = inquirer.prompt([{
//     type: "number",
//     name:"num1",
//     message: "enter Number 1"
// }])
// result.then((ans)=>{

// })
// .catch((err)>{})

// async function userInput (){
//     const result = await inquirer.prompt([{
//         type: "number",
//         name:"num1",
//         message: "enter Number 1"
//     }])
//     console.log("result", result)
// }
// userInput()
// console.log("After Input")



const result = await inquirer.prompt([{
    type: "number",
    name:"num1",
    message: "Enter Number 1"
},
{
    type: "number",
    name:"num2",
    message: "Enter Number 2"
}
])
console.log("Sum is", result.num1)
if (result.num1 == 10){
    var ans = inquirer.prompt([
        {
        type : "number",
        name :"num3",
        message:"Enter number 3"
    }])
}

// async---> 
// await ---> make it synchronous


  //1-Syntax eror 2-Run error 3-logical error
//   var result:number = num1 + num2;
var sum: number = 10* 10;
console.log("Sum is ", sum);

const questions.QuestionAnswer= [{
    type: "number",
    name:"num1",
    message: "Enter Number 1"

},
{
    type: "number",
    name:"num2",
    message: "Enter Number 2"
}
]

const answers : Answers = await inquirer.prompt(questions) 

// We use try and catch in the code where is cance of errors and code is 95% async
try{
    // error, we can nesting in try
}
catch{
    // catch error
}
finally{
    // whixh code we run in both try and catch
}