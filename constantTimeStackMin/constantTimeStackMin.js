// complete

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

       7 |
       8 |   beforeEach(function() {
  * Stack Class
  */

  // solution 1 -
  // store the pair of [value, stack min before value is pushed in]

var Stack = function() {
  this._storage = [];
  this._size = 0;
}

  // add an item to the top of the stack
Stack.prototype.push = function(value) {
  var currentMin = null;

  if (this._size === 0) {
    currentMin = value;
  } else if (this._size > 0) {
    var currentTail = this._storage[this._size - 1];
    currentMin = Math.min(value, currentTail[1]);
  }

  this._storage.push([value, currentMin]);

  this._size++;

  // no return value;
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  this._size--;
  return this._storage.pop()[0];
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return this._size;
};

// return the minimum value in the stack
Stack.prototype.min = function() {
  return this._storage[this._size - 1][1];
};

//module.exports = {Stack: Stack};