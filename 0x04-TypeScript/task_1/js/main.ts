// Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

// Sources: https://www.typescriptlang.org/docs/handbook/interfaces.html

// .ts can be compiles locally into a .js file using the command tsc main.ts. This will create a main.js
// file in the same directory as the main.ts file. tsc is the TypeScript compiler. It takes in TypeScript
// code and spits out JavaScript code. `npm install -g typescript` before using.

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