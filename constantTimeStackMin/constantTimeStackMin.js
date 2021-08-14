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
    var stack = [];
    var size = 0;
    var min = Number.MAX_VALUE;

  // add an item to the top of the stack
    this.push = function(value) {
      if (value < min) {
        min = value;
      }
      stack.unshift(value);
    };

  // remove an item from the top of the stack
    this.pop = function() {
      return stack.shift();
    };

  // return the number of items in the stack
    this.size = function() {
      return size;
    };

  // return the minimum value in the stack
    this.min = function() {
      return min;
    };
  };

