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
  this.storage = [];
  this.count = 0;
  this.minValues = [];
};

// add an item to the top of the stack
Stack.prototype.push = function(value) {
  this.storage.push(value);
  if (this.count === 0 || value < this.minValues[this.count - 1]) {
    this.minValues.push(value);
  } else {
    this.minValues.push(this.minValues[this.count - 1])
  }
  this.count++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  if (this.count > 0) {
    var popVal = this.storage.pop();
    this.minValues.pop();
    this.count--;
    return popVal;
  }
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return this.count;
};

// return the minimum value in the stack
Stack.prototype.min = function() {
  return this.minValues[this.count - 1];
};

/* Test Suite
describe('stack', function () {
  var stack;

  beforeEach(function () {
    stack = new Stack();
  });

  it('returns size 0 for a new stack', function () {
    expect(stack.size()).to.equal(0);
  });

  it('returns size 2 after adding two items', function () {
    stack.push(4);
    stack.push(3);
    expect(stack.size()).to.equal(2);
  });

  it('does not error when removing from an empty stack', function () {
    expect(function () { stack.pop(); }).not.throws();
  });

  it('size of 0 after removing more items than were added', function () {
    stack.push(4);
    stack.pop();
    stack.pop();
    expect(stack.size()).to.equal(0);
  });

  it('removes the most recently added item', function () {
    stack.push(4);
    stack.push(3);
    expect(stack.pop()).to.equal(3);
    expect(stack.size()).to.equal(1);
  });

  it('returns minimum value of all elements', function () {
    stack.push(4);
    stack.push(3);
    expect(stack.min()).to.equal(3);
    stack.push(5);
    stack.push(1);
    expect(stack.min()).to.equal(1);
    expect(stack.pop()).to.equal(1);
    expect(stack.pop()).to.equal(5);
    expect(stack.pop()).to.equal(3);
    expect(stack.min()).to.equal(4);
  });

});
*/