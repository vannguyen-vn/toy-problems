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
    this.secMinVal = +Infinity;
    this.minVal = +Infinity;
  };

  // add an item to the top of the stack
  Stack.prototype.push = function(value) {
    var countNum = 1;
    this.storage[countNum] = value;
    countNum++;

    if (value < this.minVal) {
      this.minVal = value;
    } else if (value < this.secMinVal) {
      this.secMinVal = value;
    }

  };

  // remove an item from the top of the stack
  Stack.prototype.pop = function() {
    var len = Object.keys(this.storage).length;
    if (this.storage[len] === this.minVal) {
      this.minVal = this.secMinVal;
    }
    delete this.storage[len];
  };

  // return the number of items in the stack
  Stack.prototype.size = function() {
    return Object.keys(this.storage).length;
  };

  // return the minimum value in the stack
  Stack.prototype.min = function() {
    return this.minVal;
  };

