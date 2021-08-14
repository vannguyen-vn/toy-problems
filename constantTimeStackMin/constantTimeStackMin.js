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
    this.bottom = null;
    this.top = null;
  // add an item to the top of the stack
    this.push = function(value) {
      // if bottom and top are both equal to null
        // make both of them equal to the object i'm about to push
        // the object will have a key of value and a value of an object made up of...
        // {
        // value: value
        // min: current min
        // neighbor: value below (current top)
        // }
        // we need to set the current min to it's own value or the last nodes min value if the last nodes min value is less than the current node's
      var node = {}
      if (this.bottom === null && this.top === null) {
        node[value] = value;
        node[min] = value;
        node[neighbor] = null;
        this.top = node;
        this.bottom = node;
        this.storage[value] = node;
      } else {
        var minimum;
        node[value] = value;
        if (this.head.min < value) {
          minimum = this.head.min;
          node[min] = minimum;
        } else {
          node[min] = value;
        }
        node[neighbor] = this.head.value;
        this.head = node;
      }
    };

  // remove an item from the top of the stack
    this.pop = function() {
    };

  // return the number of items in the stack
    this.size = function() {
    };

  // return the minimum value in the stack
    this.min = function() {

    };

  };

