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
  // iterate through apple to check if its keys are in orange
  // if both values at a key are objects, step into it

  // CASES OF INEQUALITY
  // 1. key is in one object but not the other
  // 2. the values don't match
  // 3. the objects are not equal in number of keys

  if (Object.keys(apple).length !== Object.keys(orange).length) {
    return false;
  }

  for (var key in apple) {
    if(!key in orange) { return false; }

    if (typeof apple[key] === 'object' && typeof orange[key] === 'object') {
      return deepEquals(apple[key], orange[key]);
    } else if (apple[key] !== orange[key]) {
    	return false;
    }
  }

  return true;
};
