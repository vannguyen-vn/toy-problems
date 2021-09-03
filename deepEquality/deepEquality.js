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
  //i - two objs
  //o - boolean
  // get keys of each obj
  const apKey = Object.keys(apple);
  const orKey = Object.keys(orange);
  //if they both equal eachother reutn true;
  if (apKey === orKey) {
    return true
  };
  // if bang apple and orangr or apple and bang organge return false
  if (!apple && orange || apple && !orange) {
    return false;
  }
  // if keys of orange dont match keys of apple return false
  if (apKey.length !== orKey.length) {
    return false
  };
  // iterate over apple keys
  for (let i = 0; i < apKey.length; i++) {
    // if orange doesnt have properties of current apple key return false
    if (!orange.hasOwnPreperty(apKeys[i])) {
      return false
    };
    // recursion: pass in each obj with index and return false if its not true
    if (!deepEquals(apple[apKeys[i]], orange[apKeys[i]])) {
      return false;
    }
  }
  return true; // if it goes through all of this, return true

};
