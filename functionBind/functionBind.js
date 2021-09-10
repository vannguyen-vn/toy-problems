/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function() {
  var args = Array.prototype.slice.call(arguments);
  var func = args[0];
  var thisArg = args[1];
  var argsArray = args.slice(2);
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var funcArgs = argsArray.concat(args);
    return func.apply(thisArg, funcArgs);
  }
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function() {
  var args = Array.prototype.slice.call(arguments);
  var func = this;
  var thisArg = args[0];
  var argsArray = args.slice(1);
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var funcArgs = argsArray.concat(args);
    return func.apply(thisArg, funcArgs);
  }
};

