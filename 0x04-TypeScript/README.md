## This project covers Basic types in Typescript, Interfaces, Classes and functions in Typescript, Generic types, Namespaces and merging decclarations in Typescript, the DOM and TypeScript, using ambient Namespace to import an external library, and basic nominal typing with Typescript.

# TASKS

### [0. Creating an interface for a student](./task_0/js/main.ts)
Write your code in the `main.ts` file:

- Write an interface named Student that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
- Create two students, and create an array named `studentsList` containing the two variables
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location

### [1. Let's build a Teacher interface](./task_1/js/main.ts)

- `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized
- `fullTimeEmployee(boolean)` this attribute should always be defined
- `yearsOfExperience(number)` this attribute is optional
- `location(string)` this attribute should always be defined
- Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

Example: 
```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
```
should print
```
{
    contract: false
    firstName: "John"
    fullTimeEmployee: false
    lastName: "Doe"
}
```

### [2. Extending the Teacher class](./task_1/js/main.ts)

- Write an interface named `Directors` that [extends](https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction) `Teacher`. It requires an attribute named `numberOfReports(number)`

Example:
```
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
```
should print
```
{
    firstName: "John"
    fullTimeEmployee: true
    lastName: "Doe"
    location: "London"
    numberOfReports: 17
}
```

### [3. Printing teachers](./task_1/js/main.ts)
Write a function `printTeacher`:
- It accepts two arguments `firstName` and `lastName`
- It returns the first letter of the firstName and the full lastName
- Example: `printTeacher("John", "Doe") -> J. Doe`
Write an [interface for the function](https://www.typescriptlang.org/docs/handbook/interfaces.html#function-types) named `printTeacherFunction`.


### [4. Writing a class](./task_1/js/main.ts)
Write a [class](https://www.typescriptlang.org/docs/handbook/interfaces.html#class-types) named `StudentClass`:
- The constructor accepts `firstName(string)` and `lastName(string)` arguments
- The class has a method named `workOnHomework` that return the string `Currently working`.
- The class has a method named `displayName`. It returns the `firstName` of the student
- The constructor of the class should be described through an Interface
- The class should be described through an Interface

### [5. Advanced types Part 1](./task_2/js/main.ts)
Create the DirectorInterface interface with the 3 expected methods:

- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workDirectorTasks()` returning a string
Create the TeacherInterface interface with the 3 expected methods:

- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workTeacherTasks()` returning a string
Create a class Director that will implement DirectorInterface

- `workFromHome` should return the string `Working from home`
- `getToWork` should return the string `Getting a coffee break`
- `workDirectorTasks` should return the string `Getting to director tasks`
Create a class Teacher that will implement TeacherInterface

- `workFromHome` should return the string `Cannot work from home`
- `getCoffeeBreak` should return the string `Cannot have a break`
- `workTeacherTasks` should return the string `Getting to work`
Create a function `createEmployee` with the following requirements:

- It can return either a `Director` or a `Teacher` instance
- It accepts 1 arguments:
  - `salary`(either number or string)
- if salary is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`
Expected result:
```
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
```