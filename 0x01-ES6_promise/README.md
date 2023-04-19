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

### [2. Catch me if you can!](./2-then.js)
Using the function prototype below
```
function handleResponseFromAPI(promise)
```
Append three handlers to the function:

- When the Promise resolves, return an object with the following    attributes
  - status: 200
  - body: success
- When the Promise rejects, return an empty Error object
- For every resolution, log Got a response from the API to the console

### [3. Handle multiple successful promises](./3-all.js)
In this file, import uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.
```
function handleProfileSignup()
```
In the event of an error, `log Signup system offline` to the console

### [4. Simple promise](./4-user-promise.js)
Using the following prototype
```
function signUpUser(firstName, lastName) {
}
```
That returns a resolved promise with this object:
```
{
  firstName: value,
  lastName: value,
}
```

### [5. Reject the promises](./5-photo-reject.js)
Write and export a function named uploadPhoto. It should accept one argument fileName (string).

The function should return a Promise rejecting with an Error and the string $fileName cannot be processed
```
export default function uploadPhoto(filename) {

}
```

### [6. Handle multiple promises](./6-final-user.js)
Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName (string)`, `lastName (string)`, and `fileName (string)`. The function should call the two other functions. When the promises are [all settled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) it should return an array with the following structure:
```
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
  ```

