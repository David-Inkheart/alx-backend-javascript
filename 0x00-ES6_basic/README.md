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

### [3. Parameter defaults](./3-default-parameter.js)
- Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.
```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

### [4. Rest parameter syntax for functions](./4-rest-parameter.js)
- Modify the following function to return the number of arguments passed to it using the rest parameter syntax
```
export default function returnHowManyArguments() {

}
```

### [5. The wonders of spread syntax](./5-spread-operator.js)
- Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
```
export default function concatArrays(array1, array2, string) {
}
```

### [6. Take advantage of template literals](./6-string-interpolation.js)
```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

### [7. Object property value shorthand syntax](./7-getBudgetObject.js)
- Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.

```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

