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
  addOn(obj)
  addTrigger(obj)
  return obj;
};


var addOn = function(obj){
  //access the inputted object's prototype
    //add a property called on, that takes two arguments, an event and a function.
  obj.prototype.on = function(event, func) {

    // //binds the function to the input object
    // func = func.bind(obj)

    //if the input string is not a property on the object,
    if (!obj.prototype.event) {

      //adds another property to the input object's prototype, whose name is the input string
      //the value is an array with the callback function inside
      obj.prototype.event = [func]

    } else {
      //if the input string is a property on the object
      //adds the function to the array of functions

      obj.prototype.event.push(func)
    }
  }
  //no return value
}

var addTrigger = function(obj) {
  //access the inputted object's  prototype
  //add a property called trigger, that takes one argument, a string.
  obj.prototype.trigger = function(sting) {
    //Should locate the inputted string as a property on the object from which it was called
    obj[string].forEach((func) => {
        //For each func, call the argument with the object it was called from bound to this
        return func.call(obj)
    }

  }
  //no return value
}


//whiteboard link: https://excalidraw.com/#json=6265026587394048,hsvZtFdzIUXMhq-dAVEWgw

/* PSEUDO CODE

var addOn = function(obj){
  //access the inputted object's prototype
    //add a property called on, that takes two arguments, an object and a function.
  obj.prototype.on = function() {

  //binds the function to the input object
    //if the input string is not a property on the object,
      //adds another property to the input object's prototype, whose name is the input string
        //the value is an array with the callback function inside
    //if the input string is a property on the object
      //adds the function to the array of functions
  }
  //no return value
}

var addTrigger = function() {
  //add the inputted object's string prototype

  //add a property called trigger, that takes two arguments, string and a function plus args.
    //Should locate the inputted string as a property on the object from which it was called
    //For each argument, call the argument.

  //no return value
}

*/