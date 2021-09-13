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

var bind = function (func, newThis) {
  var boundArgs = Array.prototype.slice.call(arguments);
  boundArgs = boundArgs.slice(2);
  return function () {
    args = boundArgs.concat(Array.prototype.slice.call(arguments));
    if (newThis) {
      newThis.func = func;
      return newThis.func(...args);
    } else {
      return func(...args);
    }
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

Function.prototype.bind = function (newThis
) {
  var boundArgs = Array.prototype.slice.call(arguments);
  if (newThis) {
    newThis.func = this
  } else {
    var func = this;
  }
  boundArgs = boundArgs.slice(1);
  return function () {
    args = boundArgs.concat(Array.prototype.slice.call(arguments));
    if (newThis) {
      return newThis.func(...args);
    } else {
      return func(...args);
    }
  }
};
// module.exports = {
//   bind: bind,
//   proto: Function.prototype.bind
// }
