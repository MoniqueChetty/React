// Destructuring
const numbers = [1,2,3];
[num1, ,num3] = numbers
console.log(num1,num3);

// const firstName ={
//     name : 'Max', 
//     age: 28
// }
// {name} = {name : 'Max', age: 28}
// console.log(name)
// console.log(age)

const number =1 //primitive
const num2 =number; 
console.log(num2) //

//object and arrays are reference types Copies the pointer not the object
const person={
    name:'Max'
};
const secondPerson =person; // copy pointer ref

const thirdPerson ={ //creaate a new object copy properties
    ...person   
};


console.log(secondPerson);
console.log(thirdPerson);
person.name = 'Manu'
console.log("After change")
console.log(secondPerson); //Manu
console.log(thirdPerson); //Max
