const commonChars = require("./commonCharacters").commonChars;
desribe("Find the minimum value in a stack using constant tim", function(){
  test("test two same string", function(){
    expect(commonChars('abc', 'abc')).toBe('abc');
  });
})