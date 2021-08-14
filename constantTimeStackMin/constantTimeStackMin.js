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
    this.position = 0
  };

  // add an item to the top of the stack
  Stack.prototype.push = function(value) {
    this.storage[this.position] = value
    this.position++
  };

// remove an item from the top of the stack
  Stack.prototype.pop = function() {
    if (this.position > 0) {
      this.position--
    }
    var itemToRemove = this.storage[this.position]
    delete this.storage[this.position]
    return itemToRemove
  };

// return the number of items in the stack
  Stack.prototype.size = function() {
    return Object.keys(this.storage).length
  };

// return the minimum value in the stack
  Stack.prototype.min = function() {
    var nums = Object.values(this.storage)
    var min = nums[0]
    for (var i = 0; i < nums.length; i++) {
      if(nums[i] < min) {
        min = nums[i]
      }
    }
    return min
  };

  var example = new Stack()
  example.push(4)
//   console.log(example)
  example.push(3)
//   console.log(example)
  console.log(example.min() === 3)
  example.push(3)
//   console.log(example)
  example.push(2)
//   console.log(example)
  example.push(2)
//   console.log(example)
  console.log(example.min() === 2)
//   console.log(example)
  console.log(example.pop())
