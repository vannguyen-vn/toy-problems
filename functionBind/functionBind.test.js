var bind = require('./functionBind.js').bind;

test('it should bind the argument as the this value for the functions', () => {
  var returnThis = () => {
    return this.name;
  }
  bind(returnThis, {name: 'daniel'});
  expect(returnThis()).toEqual('daniel');
})
