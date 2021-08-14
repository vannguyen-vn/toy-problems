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
  constructor() {
    this.storage = [];
    this.smalls = [Number.POSITIVE_INFINITY];
  }

  push(value) {
    if (value <= this.min()) { this.smalls.push(value); }
    this.storage.push(value);
  }

  pop() {
    var value = this.storage.pop();
    if (value === this.min()) { this.smalls.pop(); }
  }

  min() { return this.smalls[this.smalls.length - 1]; }

  size() { return this.storage.length; }
}