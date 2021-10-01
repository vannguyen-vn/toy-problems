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
 */


var compose = function() {
  var functions = [].slice.call(arguments)
  return (args) => {
    var result;
    for (var i = functions.length -1; i >= 0; i--) {
      var currentFunc = functions[i];
      if (result === undefined) {
        result = currentFunc(args)
      } else {
        result = currentFunc(result)
      }
    }
    return result;
  }
};

var pipe = function() {
  var functions = [].slice.call(arguments)
  return (args) => {
    var result;
    for (var i = 0; i < functions.length; i++) {
      var currentFunc = functions[i];
      if (result === undefined) {
        result = currentFunc(args)
      } else {
        result = currentFunc(result)
      }
    }
    return result;
  }
};