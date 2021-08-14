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
var Stack = function () {
  this.items = [];
  this.length = 0;
  this.min = 0;
};

// add an item to the top of the stack
Stack.prototype.push = function (value) {
  // if value is > this.min , reassign this.min to value
  if (this.min > value) {
    this.min = value;
  }
  this.items[this.length] = value;
  this.length++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function () {
  if (this.length > 0) {
    this.length--;
    var result = this.items[this.length];
    if (this.min > result) { this.min = result };
    delete this.storage[this.length];
    return result;
  }
};

// return the number of items in the stack
Stack.prototype.size = function () {
  return this.length;

};

// return the minimum value in the stack
Stack.prototype.min = function () {
  return this.min;

};

var example = new Stack()
example.push(4)
example.push(3)
// console.log(example)
// console.log(example.min() === 3) //true
example.push(3)
example.push(2)
example.push(2)
console.log(example.size()); //5
// console.log(example.min() === 2) //true
example.pop()
example.pop()
example.pop()
// console.log(example.min() === 2)//false
console.log(example.size()); //2

// module.exports = Stack;