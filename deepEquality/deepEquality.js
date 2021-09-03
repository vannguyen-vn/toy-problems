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

  let isEqual = true;

  let goDeepDish = (pasta, pizza) => {
    for (var noodle in pasta) {
      if (typeof pasta[noodle] === 'object' && typeof pizza[noodle] === 'object') {
        // we must go even deeper
        goDeepDish(pasta[noodle],pizza[noodle]);
        continue;
      }

      if (pasta[noodle] !== pizza[noodle]) {
        return isEqual = false;
      } else {
        continue; // :)
      }

    }
  }
  goDeepDish(apple, orange);
  return isEqual;

};
let option1 = deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}});

let option2 = deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}});

console.log('should be true ', option1);
console.log('should be false ', option2);