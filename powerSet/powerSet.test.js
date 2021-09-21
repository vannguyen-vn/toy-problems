const powerSet = require('./powerSet.js');

describe.skip('powerSet' , () => {
  test.skip('powerSet should work for sets of length 3', () => {
        // recall that with sets, order doesn't matter (if order did matter, it
    // wouldn't be called a `set`.) so the set 'abc' is equivalent to 'bca',
    // 'cba', etc. this allows us to do `sortSet('abc') === sortSet('bca')` to
    // easily test set equality. With that in mind, we'll just sort
    // ahead of time each set we get back from `powerSet()`
    var sortSet = function sortSet(set) {
      // takes a set like 'bca' or 'cba' and returns 'abc'
      return set.split('').sort().join('');
    }; // `result` is the power set of `"fun"`
    var result = powerSet('fun'); // sort each set in the power set
    for (var i = 0; i < result.length; i++) {
      result[i] = sortSet(result[i]);
    } // should include all the original characters
    expect(result).toContain('f')
    expect(result).toContain('u')
    expect(result).toContain('n'); // should include all sub sets of length 2
    expect(result).toContain('fu')
    expect(result).toContain('nu')
    expect(result).toContain('fn'); // should include the original set
    expect(result).toContain(sortSet('fun'));
  })
  test('powerSet should contain the original set for larger sets', () => {
    // takes a set like 'bca' or 'cba' and returns 'abc'

    var sortSet = function sortSet(set) {

      return set.split('').sort().join('');

    }; // `result` is the power set of `"jump"`





    var result = powerSet('jump'); // sort each set in the power set



    for (var i = 0; i < result.length; i++) {
      result[i] = sortSet(result[i]);
    } // should include all sub sets of length 1 (aka, all the original characters)
    expect(result).toContain('j');
    expect(result).toContain('u');
    expect(result).toContain('m');
    expect(result).toContain('p'); // should include all sub sets of length 2
    expect(result).toContain(sortSet('ju'));
    expect(result).toContain(sortSet('jm'));
    expect(result).toContain(sortSet('jp'));
    expect(result).toContain(sortSet('um'));
    expect(result).toContain(sortSet('up'));
    expect(result).toContain(sortSet('mp')); // should include all sub sets of length 3
    expect(result).toContain(sortSet('jum'));
    expect(result).toContain(sortSet('jup'));
    expect(result).toContain(sortSet('jmp'));
    expect(result).toContain(sortSet('ump')); // should include the original set
    expect(result).toContain(sortSet('jump'));
  })
  test('powerSet should remove duplicates from the original set', () => {
    var sortSet = function sortSet(set) {
      return set.split('').sort().join('');
    }; // `result` is the power set of `"bbbaaa"`
    var result = powerSet('bbbaaa'); // sort each set in the power set
    for (var i = 0; i < result.length; i++) {
      result[i] = sortSet(result[i]);
    }
    expect(result).not.toContain('aa');
    expect(result).not.toContain('aaa');
    expect(result).not.toContain('bb');
    expect(result).not.toContain('bbb');
    expect(result).toContain('a');
    expect(result).toContain('b');
    expect(result).toContain('ab');
  })
  test('it should find all the power sets for a string', () => {
    var actual = powerSet('jump')
    console.log(actual)
    expect(actual.length).toEqual(["-", "-j", "-ju", "-jm", "-jp", "-jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"].length)
  })
})