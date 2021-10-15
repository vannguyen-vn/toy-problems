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
// Given
// var compose = (...functions) => (args) => functions.reduceRight((arg, fn) => fn(arg), args);

// var pipe = (...functions) => (args) => functions.reduce((arg, fn) => fn(arg), args);

var compose = function(...funcs) {
  return (...args) => {
    var result = funcs[funcs.length - 1](...args);

    for (var i = funcs.length - 2; i >= 0; i--) {
      result = funcs[i](result);
    }

    return result;
  }
};

var pipe = function(...funcs) {
  return (...args) => {
    var result = funcs[0](...args);

    for (var i = 1; i < funcs.length; i++) {
      result = funcs[i](result);
    }

    return result;
  }
};
