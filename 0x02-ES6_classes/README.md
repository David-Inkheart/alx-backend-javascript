## This project covers the basics of ES6 classes including: Definition, Methods, Static Methods, Extension, Metaprogramming and symbols. 

# TASKS

### [0. You used to attend a place like this at some point](./0-classroom.js)

Implement a class named `ClassRoom`:

- Prototype: `export default class ClassRoom`
It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

### [1. Let's make some classrooms](./1-make_classrooms.js)

- Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).

### [2. A Course, Getters, and Setters](./2-hbtn_course.js)

Implement a class named `HolbertonCourse:`

- Constructor attributes:
  - `name` (String)
  - `length` (Number)
  - `students` (array of Strings)
- Make sure to verify the type of attributes during object creation
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter and setter for each attribute.