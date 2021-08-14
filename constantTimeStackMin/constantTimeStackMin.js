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
  var stack = Object.create(Stack.methods);
  stack.storage = [];
  return stack;
};

Stack.methods = {
  push: function(value) {
    this.storage.push(value);
  },
  pop: function() {
    return this.storage.pop();
  },
  size: function() {
    return this.storage.length;
  },
  min: function() {
    return Math.min(...this.storage);
  }
};
