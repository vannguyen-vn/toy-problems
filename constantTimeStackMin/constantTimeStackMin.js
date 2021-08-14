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
var Stack = function () {
  this.stack = [];
  this.minStack = [];
}

// add an item to the top of the stack
// always push onto stack
// push onto minStack if empty, or the top value of the minStack is greater than the value
Stack.prototype.push = function (value) {
  this.stack.push(value);
  if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= value) {
    this.minStack.push(value);
  }
};

// remove an item from the top of the stack
// check if the top elements of the two stacks are equal, pop off if so
// pop off top element on stack
Stack.prototype.pop = function () {
  if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
    this.minStack.pop();
  }
  this.stack.pop();
};

// return the number of items in the stack
// return length of the stack
Stack.prototype.size = function () {
  return this.stack.length;
};

// return the minimum value in the stack
// minStack keeps track of min value
// return the last element of the array
Stack.prototype.min = function () {
  return this.minStack[this.minStack.length - 1];
};


