/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  console.log(example.push(4))
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
    this.index = 0;

  // add an item to the top of the stack
    this.push = function(value) {
      this.index++;
      this.storage[this.index] = value;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      const item = this.storage[this.index];
      delete this.storage[this.index];
      this.index--;
      return item;
    };

  // return the number of items in the stack
    this.size = function() {
      return this.index <= 0 ? 0 : this.index;
    };

  // return the minimum value in the stack
    this.min = function() {
      let minimum = Infinity;
      if (this.storage[this.index] < minimum) minimum = this.storage[this.index];
      return minimum;
    };

  };


var example = new Stack()
example.push(4)
example.push(3)
console.log(example.min() === 3)
example.push(3)
example.push(2)
example.push(2)
console.log(example.size());
console.log(example.min() === 2)
example.pop()
example.pop()
example.pop()
console.log(example.min() === 2)
console.log(example.size());