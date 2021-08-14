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

  this.storage[this.count] = value;
  this.count++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  //var result = storage.count;
  delete this.storage[this.count--];
  //this.count--;
  //return result;
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return this.count;
};

// return the minimum value in the stack
Stack.prototype.min = function() {
  var min = this.storage[0];
  for (var key in this.storage) {
    if (this.storage[key] < min) {
      min = this.storage[key];
    }
  }
  return min;
};




