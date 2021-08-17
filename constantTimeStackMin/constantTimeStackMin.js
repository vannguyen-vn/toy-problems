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
  this.items = [];
  this.length = 0;
  this.min = [];
};

// add an item to the top of the stack
Stack.prototype.push = function (value) {
  // push to the storage
  this.items.push(value);
  // if length is 0 or value is less than than this.min
  if (this.length === 0 || value < this.min[this.length - 1]) {
    this.min.push(value);
  } else {
    this.min.push(this.min[this.length - 1])
  }
  this.length++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function () {
  if (this.length > 0) {
    this.min.pop();
    var result = this.items.pop();
    this.length--;
    return result;
  }
};

// return the number of items in the stack
Stack.prototype.size = function () {

  return this.length;

};

// return the minimum value in the stack
Stack.prototype.min = function () {
  return this.min[this.count - 1]
};


module.exports = Stack;