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
  // class Stack {

  //  constructor (value) {
  //   this.storage = []
  //   this.length = 0
  //   this.minimum = null;
  //   };

  // // add an item to the top of the stack
  //  push(value) {

  //   //FIX THIS LOGIC *!!!!!************************
  //    if (this.length === 0 || this.minimum.value > value) {
  //     var newNode = new Node(value)
  //     this.minimum = newNode;
  //    } else if (this.minimum.value < value) {
  //     var newNode = new Node(value, this.minimum);
  //    }

  //    this.storage.push(newNode)
  //    this.length++;
  //  }

  // // remove an item from the top of the stack
  //   pop() {

  //     this.minimum = this.minimum.previousMinimumNode || null;
  //     this.storage.splice(this.storage.length - 1, 1)

  //   };

  // // return the number of items in the stack
  //  size() {
  //    return this.length;
  //   };

  // // return the minimum value in the stack
  //   min() {
  //     return this.minimum.value;
  //   };

  // };




  // class Node {
  //   constructor(value, minimumNode) {
  //     this.value = value;
  //     this.previousMinimumNode = minimumNode || this;
  //   };
  // }

//NEW
  class Stack {

    constructor (value) {
     this.storage = []
     this.length = 0
     this.minimumNode = null;
     };


    push(value) {

      if ( this.minimumNode === null || value < this.minimumNode.value) {
        var newNode = new Node(value)
        this.storage.push(newNode)
      } else {
        var newNode = new Node(value)
        this.storage.push(newNode, this.minimumNode)
      }

    }
    pop() {

    }
    size() {

    }
    min() {

    }
  }

  class Node {
    constructor(value, minimumNode) {
      this.value = value,
      this.previousMin = minimumNode || this; //can it reference itself?
    }
  }





  var example = new Stack()
  example.push(4)
  example.push(3)
  console.log(example)
  console.log(example.min() === 3)



  // example.push(3)
  // example.push(2)
  // example.push(2)
  // console.log(example.min() === 2)

  // console.log(example)
  // example.pop();


  // console.log(example)

  // example.push(1)
  // console.log(example)
  // example.pop(1)
  // console.log(example)