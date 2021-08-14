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
    this.top = 0;
    this.minValues = [];

  // add an item to the top of the stack
    this.push = function(value) {
      this.storage[this.top] = value;
      this.top++;
      if (this.minValues.length === 0) {
        this.minValues.push(value);
      } else if (value <= this.minValues[this.minValues.length - 1]) {
        this.minValues.push(value);
      }
    };

  // remove an item from the top of the stack
    this.pop = function() {
      if (this.top === 0) {
        return;
      }
      var popped = this.storage[this.top - 1];
      delete this.storage[this.top - 1];
      this.top--;
      if (popped === this.minValues[this.minValues.length - 1]) {
        this.minValues.pop();
      }
      return popped;
    };

  // return the number of items in the stack
    this.size = function() {
      return this.top;
    };

  // return the minimum value in the stack
    this.min = function() {
      return this.minValues[this.minValues.length - 1];
    };

  };


// // Works for regular cases, but what about when we pop an item that was the min value? How to get last min value without iterating?
// var Stack = function() {

//   this.storage = {};
//   this.top = 0;
//   this.minVal;

// // add an item to the top of the stack
//   this.push = function(value) {
//     this.storage[this.top] = value;
//     this.top++;
//     if (this.minVal === undefined) {
//       this.minVal = value;
//     } else if (value < this.minVal) {
//       this.minVal = value;
//     }
//   };

// // remove an item from the top of the stack
//   this.pop = function() {
//     if (this.top === 0) {
//       return;
//     }
//     var popped = this.storage[this.top - 1];
//     this.top--;
//     return popped;
//   };

// // return the number of items in the stack
//   this.size = function() {
//     return this.top;
//   };

// // return the minimum value in the stack
//   this.min = function() {
//     return this.minVal;
//   };

// };
