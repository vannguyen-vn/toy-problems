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
    var auxiliaryStack = [];
    var size = 0;

  // add an item to the top of the stack
    this.push = function(value) {
      stack.unshift(value);
      if (auxiliaryStack.length === 0) {
        auxiliaryStack.unshift(value);
      } else {
        if (auxiliaryStack[0] >= value) {
          auxiliaryStack.unshift(value);
        }
      }
      size += 1;
      return stack;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      if (stack.length === 0) {
        return -1;
      }
      var top = stack[0];
      stack.shift();
      if (top === auxiliaryStack[0]){
        auxiliaryStack.shift();
      }
      size -= 1;
      return top;
    };


  // return the number of items in the stack
    this.size = function() {
      return size;
    };


  // return the minimum value in the stack
    this.min = function() {
      if (auxiliaryStack.length === 0) {
        return -1;
      } else {
        return auxiliaryStack[0];
      }
    };
  };

