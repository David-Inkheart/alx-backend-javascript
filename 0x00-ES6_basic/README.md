# This project covers the basics of Morden Javascript (ES6) and how to use software linters 

## Code is tested with [Jest Testing Framework](https://jestjs.io/)

# Tasks

### [0. Const or let?](./0-constants.js)
- Modify

function taskFirst to instantiate variables using const
function taskNext to instantiate variables using let

### [1. Block Scope](./1-block-scoped.js)
- Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

### [2. Arrow functions](./2-arrow.js)
- Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)
```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

