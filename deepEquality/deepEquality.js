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
  //must do === for each descendant of each key etc.
  if (apple === orange) return true;
  if (typeof(apple) !== 'object' || typeof(orange) !== 'object') return false;
  if (apple === null || orange === null) return false;
  if (Object.keys(apple).length !== Object.keys(orange).length) return false;

  // var isdeepEqual = true;

  for (var key in apple) {
    if (!deepEquals(apple[key], orange[key])) {
      return false;
    } else {
      if (!Object.keys(orange).includes(key)) {
        return false;
      }
    } else {
      if ((typeof(orange[key]) === 'function' || typeof(apple[key]) === 'function')) {
        if (orange[key].toString() !== apple[key].toString()) {
          return false;
        }
      }
    }
  }
  return true;

};
