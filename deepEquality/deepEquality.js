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
  //iterate across the object keys
    //if value is not an object AND value in first array equals the value in the second array
      //remain true
    //if both values are objects
      //repeat recursively

  //OR... could you just stringify both and compare the strings? //Maybe with JSON, but Object.toString doesn't work that way.
  // if (apple.toString === orange.toString) {
  //   return true;
  // }
  // return false;
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  var areEqual = true;

  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }
  for (var i = 0; i < appleKeys.length; i++) {
    var currentApple = appleKeys[i];
    var currentOrange = orangeKeys[i];
    if (currentApple !== currentOrange) {
      return false;
    }
    if (typeof apple[currentApple] !== typeof orange[currentOrange]) {
      return false;
    }
    if (typeof apple[currentApple] !== 'object' && apple[appleKeys[i]] !== orange[orangeKeys[i]]) {
      return false;
    }
    areEqual = deepEquals(apple[currentApple], orange[currentOrange]);

  }

  return areEqual;

};
