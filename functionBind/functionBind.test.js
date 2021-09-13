// var bind = require('./functionBind.js').bind;
// Function.prototype.bind = require('./functionBind.js').proto;

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
  test('Function.prototype.bind should return a result when calling the bounded function', () => {
    var func = function func(arg1) {
      return arg1;
    };
    var context = null;
    var boundFunc = func.bind(context, 'foobar');
    var result = boundFunc();
    expect(result).toBeDefined();
    expect(result).toEqual('foobar');
  })
  test('Function.prototype.bind should call the "curried" function in the bound context', () => {
    var func = function func() {
      return this;
    };
    var context = {
      foo: 'bar'
    };
    var boundFunc = func.bind(context);
    var result = boundFunc();
    expect(result).toBeDefined();
    expect(result).toEqual(context);
  })
  test('Function.prototype.bind should bind the first argument', () => {
    var func = function func(a) {
      return a;
    };
    var context = null;
    var boundFunc = func.bind(context, 'foo');
    var result = boundFunc();
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toBe('foo');
  })
  test('Function.prototype.bind should allow the bound function to be called multiple times with different arguments', () => {
    var func = function func(a) {
      return a + a;
    };
    var context = null; // we're not worrying about the context in this text
    var boundFunc = func.bind(context);
    var result1 = boundFunc('foo');
    expect(result1).toBeDefined();
    expect(result1).toBe('foofoo');
    var result2 = boundFunc('bar');
    expect(result2).toBeDefined();
    expect(result2).toBe('barbar');
  })
  test('Function.prototype.bind should bind the first and second arguments', () => {
    var func = function func(a, b) {
      return a + b;
    };
    var context = null; // we're not worrying about the context in this text
    var boundFunc = func.bind(context, 'foo', 'bar');
    var result = boundFunc();
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toBe('foobar');
  })
  test('Function.prototype.bind should bind only first and second arguments (as in this example) and allow the bound function to take the third', () => {
    var func = function func(a, b, c) {
      return a + b + c;
    }; // here we only bind to the first 2 arguments, `a` and `b`
    var context = null; // we're not worrying about the context in this text
    var boundFunc = func.bind(context, 'foo', 'bar'); // should call `func` with a='foo', b='bar', c='baz'
    var result = boundFunc('baz');
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toBe('foobarbaz');
  })
  test('Function.prototype.bind should bind only the first and second arguments (as in this example) and allow the bound function to take the third and fourth', () => {
    var func = function func(a, b, c, d) {
      return a + b + c + d;
    };
    var boundFunc = func.bind(null, 'foo', 'bar');
    var result = boundFunc('biz', 'baz');
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    expect(result).toBe('foobarbizbaz');
  })
  test.skip('it should bind the argument as the this value for the functions', () => {
    var returnThis = () => {
      return this.name;
    }
    bind(returnThis, { name: 'daniel' });
    expect(returnThis()).toEqual('daniel');
  })
})
