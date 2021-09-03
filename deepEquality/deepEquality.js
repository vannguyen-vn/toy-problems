/**
  * Write a function that, given two objects, returns whether or not the two are deeply equivalent--meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.
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
  //debugger;
  // return JSON.stringify(apple) === JSON.stringify(orange) ? result = true : result = false; // One line 15/16
  let result = true;

  // Store keys
  let aKeys = Object.keys(apple);
  let oKeys = Object.keys(orange);

  // If keys don't match, set result to false
  if (aKeys.length !== oKeys.length) {
    return false;
  }

  for (var i = 0; i < aKeys.length; i++) {
    let key = aKeys[i];
    if (JSON.stringify(apple[key]) !== JSON.stringify(orange[key])) {
      return false;
    }
  }

  return true;
};

// console.log(deepEquals( { a:1 , b:[1,3] } , { b:[1,3], a:1 } ));