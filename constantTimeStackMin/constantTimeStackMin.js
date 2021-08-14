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
  this.instance = {};

  this.storage = [];
  this.plates = 0;
  this.minIndex = 0;
  this.minValue;
  this.minIndexArray = [];

// add an item to the top of the stack
  Stack.prototype.push = function(value) {
    if (!this.minValue) {
      this.minValue = value;
      this.minIndexArray.push(this.minIndex);
    } else {
      if (this.minValue > value) {
        this.minValue = value;
        this.minIndex = this.plates;
        this.minIndexArray.push(this.minIndex)
      }
    }

    this.storage.push(value);
    this.plates++;
  };

// remove an item from the top of the stack
  Stack.prototype.pop = function() {
    if (this.plates > 0) {
      this.plates--;

      if (this.plates === this.minIndex && this.plates > 0) {
        this.minIndexArray.pop();
        this.minIndex = this.minIndexArray.length - 1;
        this.minValue = this.storage[this.minIndex];
      } else if (this.plates === 0){
        this.minIndexArray = [];
        this.minIndex = 0;
        this.minValue = null;
      }
      var removedItem = this.storage.pop();
      return removedItem;
    }
  };

// return the number of items in the stack
  Stack.prototype.size = function() {
    return this.storage.length;
  };

// return the minimum value in the stack
  Stack.prototype.min = function() {
   return this.storage[this.minIndex];

  };
};