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
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
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

var compose = function(...functions) {
  //the spread operator converts the functions into an array of functions

  // return function with the arguments supplied at invokation as parameters
  return function (args) {
    // call the reduceRight method on the functions array to apply each function to supplied arguments right to left
    return functions.reduceRight(function(arg, fn) {
      // this will pass along the result of one function call on argument to next function in the array
      return fn(arg);
      // args is passed in as our accumulator
    }, args);
  };
};

var pipe = function(...functions) {
  // Same idea as compose

  return function (args) {
    return functions.reduce(function(arg, fn) {
      return fn(arg);
    }, args);
  }
};

// Pipe has the exact same concept as compose, just that pipe moves from left to right inside of the functions array,
// so the result of array[0] gets passed on the array[1] as an argument and so on.
