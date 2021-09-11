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

var bind = function(func, newThis) {
  var args = Array.prototype.slice.call(arguments);
  args = args.slice(2);
  return function() {
    args = args.concat(Array.prototype.slice.call(arguments));
    if(newThis) {
      newThis.func = func;
      return newThis.func(...args);
    }
    else {
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

Function.prototype.bind = function(newThis
) {
  var args = Array.prototype.slice.call(arguments);
  args = args.slice(1);
  newThis.func = this;
  return function() {
    args = args.concat(Array.prototype.slice.call(arguments));
    args = args.concat();
    if (newThis) {
      return newThis.func(...args);
    } else {
      return this(...args);
    }
  }
};


// var returnThis = function(a, b, c) {
//   console.log(a, b, c, this.name);
// }
// var obj = {name: 'matt', func: returnThis}

// var bound = obj.func.bind({name: 'daniel'}, 'hello', 'my name', 'is' );
// bound();
