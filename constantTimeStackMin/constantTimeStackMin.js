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
    this.mins = [];

  // add an item to the top of the stack
    this.push = function(value) {
      this.storage.push(value);
      var length = this.mins.length;

      if(length === 0) {
        this.mins.push(value);
      } else {
        for(var i = 0; i < length; i++) { // [3, 7, 2] [7, 3, ] [2]
          if (value > this.mins[i]) {
            this.mins.splice(i, 0, value);
          } else if (!this.mins[i + 1]) {
            this.mins.push(value);
          }

        }
      }
    };

  // remove an item from the top of the stack
    this.pop = function() {
      var temp = this.storage.pop();
      for(var i = 0; i < this.mins.length; i++) {
        if(temp === this.mins[i]) {
          this.mins[i].splice(i, 1);
        }
      }
    };

  // return the number of items in the stack
    this.size = function() {
      return this.storage.length;
    };

  // return the minimum value in the stack
    this.min = function() {
      return this.mins.pop();
    };

  };