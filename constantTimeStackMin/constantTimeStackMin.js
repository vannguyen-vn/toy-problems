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
  this.storage = [];
  this.minStore = [];
};

// add an item to the top of the stack
Stack.prototype.push = function (value) {
  this.storage.push(value);
  if(this.minStore.length === 0) {
    this.minStore.push(value);
  } else {
    var len = this.minStore.length;
    if (value < this.minStore[len - 1]) {
      this.minStore.push(value);
    }
    else {
      this.minStore.push(this.minStore[len - 1]);
    }
  }
};

// remove an item from the top of the stack
Stack.prototype.pop = function () {
  this.minStore.pop();
  return this.storage.pop();
};

// return the number of items in the stack
Stack.prototype.size = function () {
  return this.storage.length;
};

// return the minimum value in the stack
Stack.prototype.min = function () {
  return this.minStore[this.minStore.length - 1];
};

