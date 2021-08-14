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
  stack.minTracker = {};
  return stack;
};

Stack.methods = {
  push: function(value) {
    this.storage.push(value);
    if (Object.keys(this.minTracker).length === 0) {
      this.minTracker.min = value;
    } else {
      if (value < this.minTracker.min) {
        this.minTracker.min = value;
      }
    }
  },
  pop: function() {
    var popped = this.storage.pop();
    var last = this.storage[this.storage.length - 1];
    if (last > popped) {
      this.minTracker.min = last;
    }
    return popped;
  },
  size: function() {
    return this.storage.length;
  },
  min: function() {
    return this.minTracker.min;
  }
};
