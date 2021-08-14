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
  this.prevMin;
  this.minVal;

  // add an item to the top of the stack
  this.push = function(value) {
    if (this.count === 0) {
      this.count++;
      this.storage[this.count] = value;
      this.minVal = value;
    } else {
      this.count++;
      this.storage[this.count] = value;
      if (this.minVal >= value) {
        this.prevMin = this.minVal;
        this.minVal = value;
      }
    }
  };

  // remove an item from the top of the stack
  // remove an item from the top of the stack
  this.pop = function() {
    delete this.storage[this.count];
    this.count--;
    if (this.prevMin !== undefined) {
      this.minVal = this.prevMin;
      this.prevMin = this.storage[this.count - 1];
    } else {
      this.minVal = 0;
    }
  };

  // return the number of items in the stack
  this.size = function() {
    return this.count;
  };

  // return the minimum value in the stack
  this.min = function() {
    return this.minVal;
  };

};

