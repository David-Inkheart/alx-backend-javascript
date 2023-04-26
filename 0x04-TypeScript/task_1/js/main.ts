// Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

// The documentation that helped me solve each task is listed above each task as a comment called "Sources"

// testing any task cab be done as a .js file and run with node
// example: node main.js
// .ts can be compiled locally into a .js file using the command `tsc main.ts`. This will create a main.js
// file in the same directory as the main.ts file. tsc is the TypeScript compiler. It takes in TypeScript
// code and spits out JavaScript code. run `npm install -g typescript` on the terminal before using tsc.


// TASK 1
// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

// Sources: https://www.typescriptlang.org/docs/handbook/interfaces.html


interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// test as a .js file
// const teacher3: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false
// };

// console.log(teacher3);

// TASK 2
// Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

// source: https://www.typescriptlang.org/docs/handbook/interfaces.html#extending-interfaces

interface Directors extends Teacher {
    numberOfReports: number;
}

// test as a .js file
// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);


// TASK 3
// Write a function named `printTeacher:` It accepts two arguments: `firstName` and `lastName`
// it returns the first letter of the firstName and the full lastName: `printTeacher("John", "Doe")` -> "J. Doe"
// Write an interface for the function named printTeacherFunction.

// source: https://www.typescriptlang.org/docs/handbook/interfaces.html#function-types

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;

printTeacher = (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`

// test as a .js file
// console.log(printTeacher('John', 'Doe'));

