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
    //object storage
    this.storage = {};
    this.index = 0;
  // add an item to the top of the stack
    this.push = function(value) {
      this.storage[index] = value;
      this.index++;
    };

  // remove an item from the top of the stack
    this.pop = function(value) {
      //check if there is any left
      if (this.index > 0) {
        //remove a stack from the top
        delete this.storage[index];
        this.index--;
        return this.storage[index];
      }
    };

  // return the number of items in the stack
    this.size = function() {
      return this.index;
    };

  // return the minimum value in the stack
    this.min = function() {
      //check how many object values are in the value
        //compare the smallest value to those in the array
      var numKeysArray = Object.values(this.storage);
      var minValue = numberKeysArray[0];
      for (let i = 1; i < numKeysArray.length; i++) {
        let currentKey = numKeysArray[i];
        if (minValue > currentKey) {
          minValue = currentKey;
        }
      }
      return minValue;
    };
  };

