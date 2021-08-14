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
    this.minNum = {};

  // add an item to the top of the stack
    this.push = function(value) {
      this.storage.push(value);

      if (this.minNum.min === undefined) {
        this.minNum.min = value;
      }

      if (this.minNum.min >= value) {
        this.minNum.secondMin = this.minNum.min;
        this.minNum.min = value;
      }
    };

  // remove an item from the top of the stack
    this.pop = function() {
      var popped = this.storage.pop();
      if (this.minNum.min === popped) {
        this.minNum.min = this.minNum.secondMin;
      }
    };

  // return the number of items in the stack
    this.size = function() {
      return this.storage.length;
    };

  // return the minimum value in the stack
    this.min = function() {
      return this.minNum.min;
    };

  };

