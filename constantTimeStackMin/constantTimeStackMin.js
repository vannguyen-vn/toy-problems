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
  * Last In First Out
  */
  var Stack = function() {
    this.stack = [];
    this.minStack = [];
    this.count = 0;
    this.minElement;

  // add an item to the top of the stack
    this.push = function(value) {
      // if stack is empty
      (if this.stack.length === 0) {
        // add value to stack and assign to minimum value
        this.minStack.push(value);
        this.minElement = value;
      // else
      } else {
        // check if value is less than min value
        if (value < this.minElement) {
          // asign min to value
          this.minElement = value;
          // push value to minStack
          this.minStack.push(value);
        }
      }
      // add to main stack
      this.stack.push(value);
      // increment count
      this.count++;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      // declare var for last element
      // if last element is equal minimum element
        // pop from minStack
        // reassign minElement to last item of minstack
      // pop from main stack
      // decrement count
    };

  // return the number of items in the stack
    this.size = function() {
      return this.count;
    };

  // return the minimum value in the stack
    this.min = function() {
      return this.minElement;
    };

  };

