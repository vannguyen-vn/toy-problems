var compose = require('./composePipe.js').compose;
var pipe = require('./composePipe.js').pipe;

describe('compsose', () => {
  var greet = function (name) { return 'hi: ' + name; }
  var exclaim = function (statement) { return statement.toUpperCase() + '!'; }
  var welcome = compose(greet, exclaim);
  // welcome('phillip'); // 'hi: PHILLIP!'
  test('It should output a function', () => {
    expect(typeof welcome).toBe('function')
  });
  test('it should pass the value through the functions left to right', () => {
    expect(welcome('phillip')).toEqual('hi: PHILLIP!');
  })
})

describe('pipe', () => {
  var add2 = function (number) { return number + 2; }
  var multiplyBy3 = function (number) { return number * 3; }
  var piped = pipe(add2, multiplyBy3) // 5 21
  // pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
  test('pipe should output a function', () => {
    expect(typeof piped).toBe('function')
  })
  test('it should the value through the functions from left to right', () => {
    expect(piped(5)).toEqual(21)
    expect(pipe(add2, multiplyBy3, multiplyBy3)(5)).toEqual(63)
  })
})