/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;} //returns
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'n //==> Shouldn't this be 'HI: PHILLIP!'
 *
 *
 *
 *
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

var compose = function() {
  //if the length of arguments is one, return that function.
  if (array.length === 1) {
    return func;
  }

  var funcArr = array.prototype.apply.slice(arguments)

  var resultFunc;

  while (funcArr.length > 0) {

    function createFunc(argument) {

      var unshiftedFunc = funcArr.unshift()

      let resolvedFunc = unshiftedFunc(argument)

      resultFunc = createFunc(resolvedFunc)
    }

  }

  return resultFunc;

};

var pipe = function() {

};


/*
//Step 1: Implement the function Compose:
 *
* Compose should return a function that is the composition of a list of
* functions of arbitrary length.
*
* Each function is called on the return value of the function that follows.
*
* You can view compose as moving right to left through its arguments.
*
* Compose Example:
*   var greet = function(name){ return 'hi: ' + name;} //returns
*   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
*   var welcome = compose(greet, exclaim);
*   welcome('phillip'); // 'hi: PHILLIP!'n //==> Shouldn't this be 'HI: PHILLIP!'

I: list of functions
O: function that runs all of the same operations as running one function individually and then calling the next function on its result
C: function must return something
E: One function as an argument

Process

create a wrapper function that runs each function in order and passes results inside

PSEUDOCODE

//if the length of arguments is one, return that function.

//create an array of everything after the first function

//create a helper function that takes in an input/result and a function

  //return a call the function on the result





*/
