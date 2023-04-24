// Create a function named `cleanSet` that returns a string of all the set values
// that start with a specific string (startString).

// It accepts two arguments: a set (Set) and a startString (String).

// When a value starts with startString you only append the rest of the string.
// The string contains all the values of the set separated by -

export default function cleanSet(set, startString) {
  if (startString === '' || set.size === 0 || startString === undefined || set === undefined || startString === null || set === null || startString === Infinity || set === Infinity || startString === -Infinity || set === -Infinity || typeof startString !== 'string' || typeof set !== 'object' || set.constructor !== Set || startString.length === 0) {
    return '';
  }
  const stringSet = new Set([...set].filter((item) => item.startsWith(startString)));
  const stringArray = [...stringSet].map((value) => value.slice(startString.length));
  return [...stringArray].join('-');
}
