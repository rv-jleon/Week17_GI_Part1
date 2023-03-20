// Classes Properties and Methods
/*
class Human {
    gender = 'male'
    
    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    name = 'Max'
    gender = 'female'

    printMyName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName()
person.printGender()
*/


//spread and rest operator
//spread example
/*
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]

console.log(newNumbers)

const person = {
    name: 'Max'
}

// spread example
const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson)

// rest example
const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3))
*/

// destructuring
/*
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);
*/

// reference and primitive types
/*
const number = 1;
const num2 = number;
console.log(num2);


const person = {
    name: 'Max'
};
const secondPerson = person;

console.log(secondPerson)

person.name = 'Manu'
console.log(secondPerson)

const thirdPerson = {
    ...person
};
console.log(thirdPerson)
*/

// Array methods
/*
const numbers = [1, 2, 3];

const doubleNums = numbers.map((num) => {
    return num * 2;
});

console.log(doubleNums)
*/

// Coding exercise 1 .map() practice
/*
function transformToObjects(numberArray) {
    return numberArray.map((num) => {
        return {val: num}
    })
}

console.log(transformToObjects([1, 2, 3]))
*/