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
  var events = {};

  //store an object where the key is the event name an the values are an array of stored callbacks
  obj.on = (event, callback) => {
    if (!events[event]) {
      events[event] = [callback];
    } else {
      events[event].push(callback);
    }
  }

  //when that key/event is called, iterate all the callbacks in the array and apply all the cb's to the obj
  //you can also pass in more args
  obj.trigger = (event, ...args) => {
    var args2 = [...args].slice(1);
    // console.log(args);
    if (events[event]) {
      events[event].forEach((cb) => {
        cb.apply(null, args2);
      })
    }
  }

  return obj;
};

var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(){ // On takes an event name and a callback function
   console.log('Another One');
});
obj.age++;
obj.trigger('ageChange', 1, 2, 3, 4, 5); // This should call our callback! Should log 'age changed'.