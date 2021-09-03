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
    // it's just the same object. No need to compare.
    return true;
  }
  if (isPrimitive(apple) && isPrimitive(orange)) {
    // compare primitives
    return apple === orange;
  }

  if (Object.keys(apple).length !== Object.keys(orange).length) {
    return false;
  }

  // compare objects with same number of keys
  for (let key in apple) {
    if (!(key in orange)) {
      return false; //other object doesn't have this prop
    }
    if (!deepEqual(apple[key], orange[key])) {
      return false;
    }
  }

  return true;
};

var isPrimitive = function(obj) {
  return (obj !== Object(obj));
};