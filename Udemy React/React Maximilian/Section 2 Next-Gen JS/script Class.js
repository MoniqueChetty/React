console.clear;
// Classes, Properties and Methods
class Human{
    gender='male';
    printGender =()=> {
        console.log(this.gender);
    }
}

class Person extends Human{
    name = 'Max';
    gender ='female';
    printMyName=()=> {
        console.log(this.name);   
    }
}
// class Human{
//     constructor(){
//         this.gender='male';
//     }
//     printGender(){
//         console.log(this.gender);
//     }
// }

// class Person extends Human{  
//     constructor(){
//         super();
//         this.name = 'Max';
//     }
//     printMyName(){
//         console.log(this.name);
        
//     }

// }
const person = new Person();
person.printMyName();
person.printGender();





// console.clear;
// console.log("Run");
// var myName ="Monique";
// console.log(myName);

// function MyName(name){
//     console.log(name);
// }
// const name2= name => {
//     console.log(name);
// }
// const name3=(name, age)=> {
//     console.log(name, age);
// }
// MyName('Ride');
// name2('Mood');
// name3('Jack', 20)

// const multiply = number => number * number;
// console.log(`Answer = `+ multiply(4));


// const multiply2 =(number1, number2)=>{
//     return (number1 * number2);
// }
// console.log(`Answer = `+ multiply2(4,5));

// const multiply3 =(number1, number2)=> (number1 * number2);
// console.log(`Answer = `+ multiply3(4,5));

