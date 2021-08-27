describe('makeChange()', function() {
  it('should exist', function() {
    should.exist(makeChange);
  });

  it('should be a function', function() {
    makeChange.should.be.a.Function;
  });

  var makeChangeTestFunction = function (input, output) {
    // NOTE: students will see the contents of the `test` function if their 
    // code doesn't pass the test
    return new Function([
      '  return makeChange(' + JSON.stringify(input) + ').should.equal(' + JSON.stringify(output) + ');'
    ].join('\n'));
  };

  var addTest = function (input, output) {
    it('should return ' + output + ' for makeChange(' + input + ')', makeChangeTestFunction(input, output));
  };

  // this adds a test for every possible input/output pair that the students
  // will see formatted and pretty as if all of these tests were hand written
  var pairs = inputOutputPairs(); // eslint-disable-line no-use-before-define
  for (var i = 0; i < pairs.length; i++) {
    addTest(pairs[i][0], pairs[i][1]);
  }
});

function inputOutputPairs() { // eslint-disable-line func-style
  return [
    [1, 1],
    [2, 2],
    [3, 2],
    [5, 4],
    [7, 6],
    [9, 8],
    [12, 15],
    [15, 22],
    [19, 34],
    [25, 68],
    [32, 129],
    [42, 271],
    [54, 565],
    [70, 1311],
    [91, 3229],
    [118, 8443],
    [154, 24305],
    [200, 73682],
    [0, 1]
  ];
}
