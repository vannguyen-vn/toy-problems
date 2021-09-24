const Range = require('./rangeClass');

describe('rangeClass', () => {
  it('should exist', () => {
    const range = new Range();
    expect(range).toBeDefined();
  });

  it('should define start, end and step parameters', () => {
    const range = new Range(0, 10, 1);
    expect(range.start).toBe(0);
    expect(range.end).toBe(10);
    expect(range.step).toBe(1);
  });

  it('should have a size property that totals elements in defined range', () => {
    const range = new Range(0, 10, 2);
    expect(range.size()).toBe(6);
  });

  it('should execute a callback when invoking `each`', () => {
    const range = new Range(0, 5);
    let sum = 0;

    range.each((number) => {
      sum += number;
    });

    expect(sum).toBe(15);
  });
});