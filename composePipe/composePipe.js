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

// input: multiple functions
// output: a fn that will run parameter through all input fns
// constraints: N/A
// edge cases: ?
var compose = function (functions) {
  // return a fn that calls all input functions with the result of the previous fn
  return function (input) {
    // loop through all arguments which are functions
    for (var i = 1; i < arguments.length; i++) {
      // for each
      var func = arguments[i]
      // call the fn with the result from the last one
      var compilation = arguments[i](arguments[i - 1])
    }
  }
};

// Compose Example:
var greet = function (name) { return 'hi: ' + name; }
var exclaim = function (statement) { return statement.toUpperCase() + '!'; }
var welcome = compose(greet, exclaim);
console.log(welcome('phillip')); // 'hi: PHILLIP!'

// input: multiple fns
// output: fn
// constraints: N/A
// edge cases: ?
var pipe = function () {
};
