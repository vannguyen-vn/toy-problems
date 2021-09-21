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
  obj.events = {};
  obj.on = function(event, func) {
    if (this.events[event]) {
      this.events[event] = [...this.events[event], func];
    } else {
      this.events[event] = [func];
    }
  }
  obj.trigger = function(event) {
    var args = Array.prototype.slice.call(arguments);
    args = args.slice(1);
    var results = [];
    for (var i = 0; i < this.events[event].length; i++) {
      results.push(this.events[event][i](...args));
    }
    return results;
  }
  // TODO: Your code here
  return obj;
};

// module.exports = mixEvents;