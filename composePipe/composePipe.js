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


// _.reduce = function(collection, iterator, accumulator) {
//   // TIP: To support both arrays and objects, try re-using each() here
//   var accumulator = accumulator;
//   var inputValues = collection;
//   if ( accumulator === undefined ) {
//     accumulator = collection[0];
//     inputValues = collection.slice(1);
//   }
//   _.each( inputValues, function(value) {
//     accumulator = iterator(accumulator, value);
//   });
//   return accumulator;
// };

var compose = function(...fxns) {
  //takes in an arbitrary list of functions
  //reduces the functions to one extended function chain a(b(c(..args)))
  //until compose is invoked, when then triggers all the functions in order from inside to out
  return fxns.reduce(function(a, b) {
    return function(...args) {
      return a(b(...args));
    }
  })
};
//compose returns a reduced function, which takes in any numbr of parameter arguments
//each reduce loop returns a function,
//the reduced function looks like a(b(c(..args))) where the last function in the arguments list is invoked with the parameter arguments first

var pipe = function(fxn, ...fxns) {
  return (...args) => {
    return fxns.reduce((acc, fxn) => {
      return fxn(acc)}, fxn(...args))
  }
};
//pipe returns a function that accepts any number of 'function arguments'
//when invoked this function invokes reduce using the array of functions defined in the inital pipe function
//the initial accumulator is set to fxn(...args)
//then this accumulator accumulates value on each iteration of the loop within reduce, where the iterator of reduce returns the nextFunction(currAccValue), which returns a value that is now the new 'accumlator'
//this loop repeats until all the functions have run, and we return the final accumulated value
//thus it uses the first function on the value, and each subsequent function takes in the previous value as input


// var pipe = function(fns) {
//   return function(val) {
//     fns.forEach((fn) => val = fn(val));
//     return val;
//   }
// };


// _.reduce = function(collection, iterator, accumulator) {
//   // TIP: To support both arrays and objects, try re-using each() here
//   var accumulator = accumulator;
//   var inputValues = collection;
//   if ( accumulator === undefined ) {
//     accumulator = collection[0];
//     inputValues = collection.slice(1);
//   }
//   _.each( inputValues, function(value) {
//     accumulator = iterator(accumulator, value);
//   });
//   return accumulator;
// };