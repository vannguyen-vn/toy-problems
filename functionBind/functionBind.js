

// var bind = function(
// ) {
//   // TODO: Your code here
// };


Function.prototype.alternativeBind = function() {
  // What needs to be bound?
  const bindFunc = this;
  const binditem = [...arguments][0];
  const bindArg = [...arguments].slice(1);

  // return function that includes needed bindings
  return function() {
    // array containing all of the arguments
    const allArgs = [...bindArg, ...arguments];
    return bindFunc.apply(binditem, allArgs);
  }
}

// var alice = {
//   name: 'alice',
//   shout: function(){
//     alert(this.name);
//   }
// }
//  var boundShout = alice.shout.bind(alice);
//  boundShout(); // alerts 'alice'
//  boundShout = alice.shout.bind({name: 'bob'});
//  boundShout(); // alerts 'bob'

//  var func = function(a, b){ return a + b };
//  var boundFunc = func.bind(null, 'foo');
//  var result = boundFunc('bar');
//  console.log(result === 'foobar'); // true