const Stack = require("./constantTimeStackMin").Stack;


describe("Find the minimum value in a stack using constant time", function(){

  var stack;

  beforeEach(function() {
    stack = new Stack();
  })

    test("push an element to a stack", function(){
      stack.push(4);
      expect(stack.size()).toBe(1);
    });

    test("pop an element from a stack", function(){
      stack.push(4);
      stack.push(5);
      stack.push(6)
      expect(stack.size()).toBe(3);
      expect(stack.pop()).toBe(6);
      expect(stack.size()).toBe(2);
    });

    test("get minimum after push", function(){
      stack.push(4);
      stack.push(5);
      stack.push(6)
      expect(stack.min()).toBe(4);
    });

    test("get minimum when the last one is the minimum", function(){
      stack.push(4);
      stack.push(5);
      stack.push(2)
      expect(stack.min()).toBe(2);
    });

    test("get minimum after pop", function(){
      stack.push(3);
      stack.push(2);
      stack.push(2)
      expect(stack.min()).toBe(2);
    });

    test("get minimum after pop and the minimum is at the head", function(){
      stack.push(1);
      stack.push(2);
      stack.push(2)
      expect(stack.min()).toBe(1);
    });

    test("get minimum after pop current minimum", function(){
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(1);
      expect(stack.pop()).toBe(1);
      expect(stack.size()).toBe(3);
      expect(stack.min()).toBe(2);
    });
});
