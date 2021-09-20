/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {

  if (apple === orange) {
    return true;
  }

  if (typeof apple !== 'object' || typeof orange !== 'object') {
    return false;
  }

  let appleKeys = Object.keys(apple);
  let orangeKeys = Object.keys(orange);

  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }

  for (let i = 0; i < appleKeys.length; i++) {
    if (!apple.hasOwnProperty(orangeKeys[i])) {
      return false;
    } else if (!deepEquals(apple[orangeKeys[i]], orange[orangeKeys[i]])) {
      return false;
    }
  }

  return true;
};
