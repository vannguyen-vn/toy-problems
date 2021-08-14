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
    this._index = 0;
    this._storage = {};
    this._mins = [];

  // add an item to the top of the stack
    this.push = function(value) {
      if (!this._mins.length) {
        this._mins.push(value);
      }
      if (value < this._mins[this._mins.length - 1]) {
        this._mins.push(value);
      }
      this._storage[String(this._index)] = value;
      this._index += 1;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      var res = this._storage[String(this._index - 1)];
      delete this._storage[String(this._index - 1)];
      this._index -= 1;
      if (res === this._mins[this._mins.length - 1]) {
        this._mins.pop();
      }
      return res;
    };

  // return the number of items in the stack
    this.size = function() {
      return this._index;
    };

  // return the minimum value in the stack
    this.min = function() {
      return this._mins[this._mins.length - 1];
    };

  };
