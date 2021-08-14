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

    var storage = [];
    var count = 0;

  // add an item to the top of the stack
    this.push = function(value) {

      if (count === 0) {
        storage[count] = value;
        count++;
      } else {
        for(var i = 0; i < storage.length; i++) {
          storage[i+1] = storage[i];
        }
        storage[0] = value;
        count++;
      }

    };

  // remove an item from the top of the stack
    this.pop = function() {

      if (count === 1) {

        var item = storage[0];
        storage[0] = undefined;
        return item;

      } else {

        var item = storage[0];
        storage[0] = undefined;

        for (var i = 0; i < storage.length; i++) {
          storage[i] = storage[i+1]
        }

        count--;

        return item;

      }



    };

  // return the number of items in the stack
    this.size = function() {
      return count;
    };

  // return the minimum value in the stack
    this.min = function() {

      var min = Infinity;
      for (var i = 0; i < storage.length; i++) {
        if (min > storage[i]) {
          min = storage[i];
        }
      }
      return min;

    };

  };

