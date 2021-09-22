//attempted Sep 20 2021

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
  // TODO: Your code here
  obj.on = function(eventName, callbackFunction) {
    if (!obj.hasOwnProperty(eventName)) {
      obj[eventName] = function(params) {
        callbackFunction.apply(this, params);
      }
    } else {
      const f = obj[eventName];
      obj[eventName] = function(params) {
        f(params);
        callbackFunction.apply(this, params);
      };
    }
  };


  obj.trigger = function(eventName, ...params) {
    if (obj.hasOwnProperty(eventName)) {
      obj[eventName](params);
    }

  };
  return obj;
};
/*

var dinner = mixEvents({});
var result;
dinner.on('order', function (dish, side) {
  result = dish + ' with a side of ' + side;
});
dinner.trigger('order', 'spam', 'spinach');
console.log(`Expected spam with a side of spinach Actual ${result}`);
*/


