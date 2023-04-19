## This Project covers the Javascript(ES6) promises, await, async and the idea of a try/throw/catch syntax.

### Code is tested with Jest and `npm run test`

# Tasks

### [0. Keep every promise you make and only make promises you can keep](./0-promise.js)
- Return a Promise using this prototype `function getResponseFromAPI()`

### [1. Don't make a promise...if you know you can't keep it](./1-promise.js)
- Using the prototype below, return a promise. The parameter is a boolean.
```
getFullResponseFromAPI(success)
```
When the argument is:

- true
  - resolve the promise by passing an object with 2 attributes:
    - status: 200
    - body: 'Success'
- false
  - reject the promise with an error object with the message The  fake API is not working currently

  