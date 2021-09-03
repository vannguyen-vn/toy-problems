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
};


/*

I two objects
O Boolean value
C No cyclical object structures
E Empty?

//Process - Copy each object into its own string
  //make sure the two strings are strictly equal

//Pseudocode

//if the input is a number
  //return a string plus a number

//if the input is a string
  //return the object

//if the object is a boolean value
  //return a string plus the value

//if the object is null
  //return a string plus null

//if the object is an array
  // for each value
    //Add  to the string: call the function with the value

//return brackets wrapping the string

//if the object is an object
  //create a string
  //for each key in the object
    //add to the string: the key name plus a colon plus a call to the function with the value

  //return cury braces wrapping a call to the string


*/