/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

// input: obj
// output: object now extended with 2 new properties?
// an on function (that takes 2 parameters- eventName, callback)
// a function that triggers the on function
// constraints: N/A
// edge cases:
var mixEvents = function (obj) {
  // add on property (value is the function)
  obj.on = function(event, callback) {
    console.log('event')
  }
  // add trigger property
  obj.trigger = function(desiredEvent) {
    obj.on(desiredEvent);
  }

  return obj;
};

// Example usage:
var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function () { // On takes an event name and a callback function
  console.log('Age changed');
});
obj.age++;
console.log(obj.trigger('ageChange')); // This should call our callback! Should log 'age changed'.