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

var bind = function (func, ...rest) {
  // TODO: Your code here
  // const argsToApply = [...rest];
  // used with func.apply

  // arrow functions have different arguments from functions written with function
  // if an arrow function is used here, the argsReceivedAtInvocation will result in a lookup
  // and return the ...rest arguments
  // make sure to write function() here
  return function() {
    const argsReceivedAtInvocation = arguments;
    return func.call(...rest, ...argsReceivedAtInvocation);
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

Function.prototype.bind = function () {
  // TODO: Your code here
  const functionBeingBound = this;
  var contextBeingBound = [...arguments][0];
  const argsBeingBound = [...arguments].slice(1);

  return function() {
    const allArgs = [...argsBeingBound, ...arguments];
    return functionBeingBound.apply(contextBeingBound, allArgs);
  }
};
