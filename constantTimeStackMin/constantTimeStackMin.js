/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
var Stack = function() {
  var instance = {};

  var storage = [];
  var plates = 0;
  var minIndex = 0;
  var minValue;

  instance.push = function(value) {
    if (!minValue) {
      minValue = value;
    } else {
      if (minValue > value) {
        minValue = value;
        minIndex = plates;
      }
    }
    storage.push(value);
    plates++;
  };

  instance.pop = function() {
    if (plates > 0) {
      plates--;
      var removedItem = storage.pop();
      return removedItem;
    }
  };

  instance.size = function() {
    return storage.length;
  };

  instance.min = function() {
    return storage[minIndex];
  };

  return instance;
};