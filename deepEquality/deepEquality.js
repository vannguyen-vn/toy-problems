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

var deepEquals = function (apple, orange) {

  if (apple === orange) {
    return true;
  }

  if (isPrimitive(apple) && isPrimitive(orange)) {
    return apple === orange;
  }

  if (Object.keys(apple).length !== Object.keys(orange).length) {
    return false;
  }

  for (let key in apple) {
    if (!(key in orange)) {
      return false;
    }

    if (!deepEqual(apple[key], orange[key])) {
      return false;
    }
  }

  return true;
}

var isPrimitive = function (obj) {
  return (obj !== Object(obj));
}

// var deepEquals = function (apple, orange) {

//   var appleKeys = Object.keys(apple);
//   var orangeKeys = Object.keys(orange);

//   if (appleKeys.length !== orangeKeys.length) {
//     return false;
//   }

//   for (var key in appleKeys) {
//     const appleVal = apple[key];
//     const orangeVal = orange[key];
//     const areObjects = isObject(appleVal) && isObject(orangeVal);

//     if (areObjects && !deepEquals(appleVal, orangeVal) || !areObjects && appleVal !== orangeVal) {
//       return false;
//     }
//   }
//   return true;
// };

// var isObject = function (object) {
//   return object !== null && typeof object === 'object';
// }