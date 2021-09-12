var bind = require('./functionBind.js').bind;
Function.prototype.bind = require('./functionBind.js').proto;

describe.skip('functionBind', () => {
  test('bind should allow the bound function to be called multiple times with different arguments', () => {
    var func = function func(a, b) {
      return a + b;
    };
    var context = null;
    var boundFunc = bind(func, context, 'wow '); // "bind" 'wow ' => the first argument (a)
    var result1 = boundFunc('dawg'); // first call to boundFunc with b='dawg'
    expect(result1).toBeDefined();
    expect(result1).toEqual('wow dawg');
    var result2 = boundFunc('man'); // second call to boundFunc with b='man'
    expect(result2).toBeDefined();
    expect(result2).toEqual('wow man'); // you're probably modifying some shared `args` array in the
    // clojure scope ( or possibly the global scope :( ) everytime `boundFunc`
    // is being called.
    // hint: myArray.push.call(myArray, [1,2,3]) will _append_ to `myArray`
    // hint: but myArray.concat([1,2,3]) will _return_ a new array and _not_
    // hint: modify `myArray`
  })
  test('Function.prototype.bind should return a function', () => {
    var func = function func() { };
    var res = func.bind();
    expect(res).toBeDefined();
    expect(typeof res).toEqual('function');
  })


  test.skip('it should bind the argument as the this value for the functions', () => {
    var returnThis = () => {
      return this.name;
    }
    bind(returnThis, { name: 'daniel' });
    expect(returnThis()).toEqual('daniel');
  })
})
