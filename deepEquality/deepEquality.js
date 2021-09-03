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

  let innerStringify = function(input) {
    //create an inner function that takes an input object

    //if the input is a number
    //return a string plus a number
    if (typeof input === 'number') {
      return '' += input;
    }

    //if the input is a string
      //return the object
      if (typeof input === 'string') {
        return input;
      }

    //if the object is a boolean value
      //return a string plus the value
      if (typeof input === 'boolean') {
        return '' += input;
      }

    //if the object is null
      //return a string plus null
      if (typeof input === 'null') {
        return 'null';
      }

      //if the object is an array
      //create a string
      // for each value
        //Add  to the string: call the function with the value
        //return brackets wrapping the string
        if (typeof input === 'array') {

          var tempArrString = '';

          input.forEach(element => {
            tempString += innerStringify(element)
          })

          return '[' + tempArrString + ']';
        }

    //if the object is an object
      //create a string
      //for each key in the object
        //add to the string: the key name plus a colon plus a call to the function with the value
      //return cury braces wrapping a call to the string
      if (typeof input === 'object') {
        var tempObjString = ""

        for (var key in input) {
          tempObjString += '"' + key + '":'  + innerStringify(input[key])
        }

        return '{' + tempObjString + '}'
      }

    //close the inner function
    }

    //set a variable equal to a call to the first object
    //set a variable equal to a call to the second object
    var stringifiedApple = innerStringify(apple)
    var stringifiedOrange = innerStringify(orange)

    console.log(stringifiedApple)
    console.log(stringifiedOrange)

    //return a comaprison between the two
    return stringifiedApple === stringifiedOrange

};



var test1 = deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
console.log('should be true:', test1)
var test2 = deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
console.log('should be false:', test2)



/*

I two objects
O Boolean value
C No cyclical object structures
E Empty?

//Process - Copy each object into its own string
  //make sure the two strings are strictly equal

//Pseudocode

//create an inner function that takes an input object

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

//close the inner function

//set a variable equal to a call to the first object
//set a variable equal to a call to the second object


//return a comaprison between the two


*/