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

  this.storage = {};
  this.count = 0;
  this.mini = {};

};



// add an item to the top of the stack
Stack.prototype.push = function (value) {

  this.storage[this.count] = value;
  this.count++;

  this.mini[value] = value;

};

// remove an item from the top of the stack
Stack.prototype.pop = function () {

  this.count--;
  if (this.count < 0) {
    this.count = 0;
  }

  var pop =  this.storage[this.count];
  //delete this.mini[(this.storage[this.count])];
  delete this.storage[this.count]
  return pop;


};

// return the number of items in the stack
Stack.prototype.size = function () {
  return this.count;
};

// return the minimum value in the stack
Stack.prototype.min = function () {
  return Object.keys(this.mini)[0];
};


