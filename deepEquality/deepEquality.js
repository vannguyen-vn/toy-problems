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
  if (Object.keys(apple).length !== Object.keys(orange).length) {
    return false;
  }
  for (let key in apple) {
    if (typeof apple[key] === 'object') {
      var subres = deepEquals(apple[key], orange[key]);
      if (!subres) {
        return subres;
      }
    } else if (apple[key] !== orange[key]) {
      return false;
    }
  }
  return true;
};

console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
console.log(deepEquals({a:1, b: {c:3}, d:4},{a:1, b: {c:3}, d:5})); // false
console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true

var a = {
  foo: 'bar'
};
var b = {
  foo: 'bar',
  biz: 'baz'
};
console.log(deepEquals(a, b))   // false