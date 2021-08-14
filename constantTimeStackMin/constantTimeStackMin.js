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
  class Stack {

   constructor (value) {
    this.storage = {}
    this.length = 0
    this.minimum = null;
    };

  // add an item to the top of the stack
   push(value) {
     this.storage[this.length] = value

     if (this.length === 0) {
      this.minimum = value;
     } else if (this.minimum > value) {
      this.minimum = value;
     }
     this.length++;
    };

  // remove an item from the top of the stack
    pop() {
      delete this.storage[this.size -1]
      this.length --;

      if (this.length === 0) {
        this.minimum = null;
    };

  // return the number of items in the stack
   size() {
     return this.length;
    };

  // return the minimum value in the stack
    min() {
      return this.minimum;
    };

  };


  var example = new Stack()
  example.push(4)
  example.push(3)
  console.log(example.min() === 3)
  example.push(3)
  example.push(2)
  example.push(2)
  console.log(example.min() === 2)

  console.log(example)
  example.pop();


  console.log(example)

  example.push(1)
  console.log(example)
  example.pop(1)
  console.log(example)