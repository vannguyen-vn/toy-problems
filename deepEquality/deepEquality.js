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

 // input: 2 objects
 // output: boolean (true if the 2 objects are deeply equal)
 // constraints: deeply equal means not comparing stringified versions
 // edge cases: two empty objs would be equal?
var deepEquals = function(apple, orange) {
  // compare how many keys there are in both
    // if they have a different number of keys
    if (Object.keys(apple).length !== Object.keys(orange).length){
       // return false
       return false
    }

    // for outer obj
    // loop through keys to compare them
    for (var i = 0; i < Object.keys(apple).length; i++) {
       var currentAppleKey = Object.keys(apple)[i]
       var currentOrangeKey = Object.keys(orange)[i]
       // if they differ
       if (currentAppleKey !== currentOrangeKey) {
         return false
       }
    }

    // loop through values to compare them
    for (var i = 0; i < Object.values(apple).length; i++) {
      var currentAppleValue = Object.values(apple)[i]
      var currentOrangeValue = Object.values(orange)[i]
      if (typeof currentAppleValue === 'object') { // if value is an obj
        // send this inner object back into deeply equals
        var currentObjectsCheck = deepEquals(currentAppleValue, currentOrangeValue)
        if (!currentObjectsCheck) {
          return false
        }
      } else if (currentAppleValue !== currentOrangeValue) { // if they differ
        return false
      }
   }
  return true
};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false