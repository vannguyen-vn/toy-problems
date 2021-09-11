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

var compose = function() {
  //moves right to left across arguements
  //calls next function on the result of the previous
  //returns a function
  //recursor:
  // iterate across arguments
  //   call arguments[i] on recursor(arguments[i+1])

  var functions = [];
  for (var i = 0; i < arguments.length; i++) {
    functions.push(arguments[i]);
  }

  var callRightToLeft = function(array) {
    if (array.length === 1) {
      return array[0];
    } else {
      return array[0](callRightToLeft(array.slice(1)));
    }
  }

  return callRightToLeft(arguments);

  //if arguments.length is 1
  //  return arguments[0]
  //if arguments.length is 2
  //  return arguments[0](arguments[1]);
  //if arguments.length is 3
  //  arguments[0](arguments[1](arguments[2]))
  //if arguments.length is 4
  //  arguments[0](arguments[1](arguments[2](arguments[3])))

};

var pipe = function() {
  //moves left to right across arguments
  //calls next function on the result of the previous

  var functions = [];
  for (var i = arguments.length - 1; i >= 0; i--) {
    functions.push(arguments[i]);
  }

  var callRightToLeft = function(array) {
    if (array.length === 1) {
      return array[0];
    } else {
      return array[0](callRightToLeft(array.slice(1)));
    }
  }

  return callRightToLeft(arguments);

};
