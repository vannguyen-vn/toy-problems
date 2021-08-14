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

  this.storage = {};
  this.count = 0;
};

// add an item to the top of the stack
Stack.prototype.push = function(value) {
  if (this.count === 0) {
    this.storage[this.count] = [value, value];
  } else if (value < this.storage[this.count - 1][1] ) {
    this.storage[this.count] = [value, value];
  } else {
    this.storage[this.count] = [value, this.storage[this.count -1][1]];
  }
  this.count++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  if (this.count > 0) {
    delete this.storage[this.count];
    this.count--;
  }
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return this.count;
};

// return the minimum value in the stack
Stack.prototype.min = function() {
    return this.storage[this.count - 1][1];
};
