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

// score properties in the object in the format of {event: function} related to that event
// e.g. {'trigger': ageChangeFunction};
// store callbacks in an array so that multiple callbacks can be associated with the event

var mixEvents = function (obj) {
  // TODO: Your code here
  // input: an event name and a callback function
  obj.on = (event, callback) => {
    if (!obj[event]) {
      obj[event] = [callback];
    } else {
      obj[event].push(callback);
    }
  };

  // input: an event, could also have multiple arguments after it
  obj.trigger = (event, ...args) => {
    if (obj[event]) {
      obj[event].forEach((callback) => {
        callback(...args);
      });
    }
  };

  return obj;
};
