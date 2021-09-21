const mixEvents = require('./eventingLibrary.js')

describe.skip('eventingLibrary', () => {
  var testObj = {name: 'Daniel', age: '25'};
  test('it should return the same obj that was inserted', () => {
    expect(mixEvents(testObj)).toEqual(testObj);
  })
  test('trigger and on should be functions', () => {
    expect(typeof testObj.trigger).toEqual('function');
    expect(typeof testObj.on).toEqual('function');
  })
  test('on should add an event listener and trigger should call that function', () => {
    testObj.on('ageChange', () => {
      console.log('ageChange')
      return 'age changed';
    })
      expect(testObj.trigger('ageChange')).toEqual(['age changed'])
  })
  test('if there are more than one event listener all should trigger', () => {
    testObj.on('ageChange', () => {
      console.log('age changed again')
      return 'even older';
    })
    expect(testObj.trigger('ageChange')).toEqual(['age changed', 'even older'])
  })
  test('if there are more arguments applied to trigger they should be passed on to the hanlders', () => {
    testObj.on('ageChange', (age) => {
      return age;
    })
    expect(testObj.trigger('ageChange', '100')).toEqual(['age changed', 'even older', '100'])
  })
  test('it should not error out if the event listener does not exist', () => {
    expect(() => testObj.trigger('nameChange')).not.toThrow();
  })
})
