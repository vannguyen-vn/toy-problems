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
  this.minimum;
  this.minStack = [];
  this.storage = [];
};

Stack.prototype.push = function(value) {
  this.storage.push(value);
  if (this.minimum === undefined) {
    this.minimum = value;
    this.minStack.push(value)
  } else {
    if (value < this.minimum) {
      this.minimum = value;
      this.minStack.push(value)
    } else {
      this.minStack.push(this.minimum)
    }
  }
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  var popped = this.storage.pop()
  this.minStack.pop()
  this.minimum = this.minStack[this.minStack.length-1]
  return popped;
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return this.storage.length;
};

// return the minimum value in the stack
Stack.prototype.min = function() {
  var lastElement = this.minStack.length - 1;
  return this.minStack[lastElement];
};
