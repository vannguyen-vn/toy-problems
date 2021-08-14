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
    this._minTracker = [];
    this._nextIndex = 0;


  };

  Stack.prototype.push = function(value) {

    this.storage[this._nextIndex] = value;

    if (this._minTracker.length === 0) {
      this._minTracker.push(value);
    } else {
      var lastTrackerIndex = this._minTracker.length - 1;
      if (value < this._minTracker[lastTrackerIndex]) {
        this._minTracker.push(value);
      }
    }

    this._nextIndex++;
  };

  // remove an item from the top of the stack
  Stack.prototype.pop = function() {
    this._nextIndex--;
    if (this._nextIndex < 0) {this._nextIndex = 0};

    var popped = this.storage[this._nextIndex];

    var lastTrackerIndex = this._minTracker.length - 1;
    if (this._minTracker[lastTrackerIndex] === popped) {
      this._minTracker.pop();
    }

    delete this.storage[this._nextIndex];

    return popped;
  };

  // return the number of items in the stack
  Stack.prototype.size = function() {
    return this._nextIndex;
  };

  // return the minimum value in the stack in constant time --- only way to do this is to already know the index of the item that has the minimum value
  Stack.prototype.min = function() {
    var lastTrackerIndex = this._minTracker.length - 1;
    return this._minTracker[lastTrackerIndex];
  };