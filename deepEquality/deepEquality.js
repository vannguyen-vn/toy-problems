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

  var obj1 = Object.keys(apple)
  var obj2 = Object.keys(orange)

  for (var i = 0; i < obj1.length; i++) {
      if (JSON.stringify(apple[obj1[i]]) !== JSON.stringify(orange[obj1[i]])) {
          return false;
      }
  }
  return true;
};