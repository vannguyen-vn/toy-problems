const { sudokuChecker } = require('./sudokuChecker.js');

const sudoku1 = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
const sudoku2 = "775814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
const result1 = sudokuChecker(sudoku1);
const result2 = sudokuChecker(sudoku2);

it('solves!', () => {
  expect(result1).toBe('solved');
});

it('does not solve!', () => {
  expect(result2).toBe('invalid');
});