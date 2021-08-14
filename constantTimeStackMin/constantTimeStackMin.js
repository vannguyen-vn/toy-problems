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
  this.storage = {};
  this.minSoFar = [];
  this.count = 0;
};

// add an item to the top of the stack
Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  if (this.minSoFar.length === 0 || value <= this.minSoFar[this.minSoFar.length - 1]) {
    this.minSoFar.push(value);
  }
  this.count++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function () {
  var removed = this.storage[this.count - 1];
  if (removed === this.minSoFar[this.minSoFar.length - 1]) {
    this.minSoFar.pop();
  }
  delete this.storage[this.count - 1];
  this.count -= 1;
  return removed;
};

// return the number of items in the stack
Stack.prototype.size = function () {
  return this.count;
};

// return the minimum value in the stack
Stack.prototype.min = function () {
  return this.minSoFar[this.minSoFar.length - 1];
};