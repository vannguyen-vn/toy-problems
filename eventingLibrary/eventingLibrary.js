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

var mixEvents = function(obj) {
  // create obj to store handlers
  var handlers = {};

  obj.on = function (event, callback) {
    // if handler for specific event exist already, add it to events array within handlers
    if (handlers[event]) {
      handlers[event].push(callback);
    } else {
      // if not create an array an assign to handlers obj at key [event]
      handlers[event] = [callback];
    }
  }

  obj.trigger = function(event) {
    // pull the arguments that may be added when .trigger is called
    var args = Array.prototype.slice.call(arguments, 1);
    // if a listner/handler exists for this specific event
    if (handlers[event]) {
      // call each function that was stored at that event handler on the args
      handlers[event].forEach(function (callback) {
        callback.apply(null, args);
      })
    }
  };

  return obj;
};

