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
/* input: 2 objs
Output: true/fasle

pseudocode
- create key1 is all keys of obj1
- create key2 is all keys of obj2
- if length of key1 !== key2 => false
- go though the key1
 - check the value of each key of both to make sure they have children or not
 - if they have childen and recursion of children is false or they don't have childen && their value is different => false
return true.
 */
var deepEquals = function (apple, orange) {
  var keys1 = Object.keys(apple);
  var keys2 = Object.keys(orange);
  if (keys1.length !== keys2.length) {
    return false;
  }
  if ((typeof apple === 'number' && typeof orange === 'number') && apple !== orange) {
    return false;
  }

  for (var key of keys1) {
    var val1 = apple[key];
    var val2 = orange[key];
    var areObjs = isObject(val1) && isObject(val2);
    if (
      areObjs && !deepEquals(val1, val2) ||
      !areObjs && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
};

function isObject(object) {
  return object != null && typeof object === 'object';
}