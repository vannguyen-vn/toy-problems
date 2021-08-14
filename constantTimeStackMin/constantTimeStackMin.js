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
    this.counter = 0;
    // variable for minimum value
    this.minVal = [];
  };

  // add an item to the top of the stack
    Stack.prototype.push = function(value) {
      //Check if minVal has a value
      if (this.minVal.length === 0) {
        // Push input value
        this.minVal.push(value);
      } else {
        if (value <= this.minVal[this.minVal.length - 1]) {
          this.minVal.push(value);
        }
      }
      // Set counter at storage equal to value
      this.storage[this.counter] = value;
      // Increase counter
      this.counter++;
    };

  // remove an item from the top of the stack
    Stack.prototype.pop = function() {
      // Check if counter is equal to zero
      if (this.counter === 0) {
        // If so, return 0
        return 0;
        // Else
      } else {
        // Decrement counter
        this.counter--;
        // Declare a popped variable equal to counter at storage
        var poppedVal = this.storage[this.counter];
        // Check if popped value is the minimum
        if (poppedVal === this.minVal[this.minVal.length - 1]) {
          this.minVal.pop()
        }
        // Return Popped value
        return poppedVal;
      }
    };

  // return the number of items in the stack
    Stack.prototype.size = function() {
      return this.counter;
    };

  // return the minimum value in the stack
    Stack.prototype.min = function() {
      return this.minVal[this.minVal.length - 1];
    };

