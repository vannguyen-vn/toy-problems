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
// debugger;
var deepEquals = function(apple, orange) {

  var obj1 = Object.keys(apple)
  var obj2 = Object.keys(orange)

  var object = obj1
  if (obj2.length > obj1.length) {
    object = obj2
  }

  for (var i = 0; i < object.length; i++) {
      if (JSON.stringify(apple[object[i]]) !== JSON.stringify(orange[object[i]])) {
          return false;
      }
  }
  return true;
};