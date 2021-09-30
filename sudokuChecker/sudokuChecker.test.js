const { sudokuChecker } = require('./sudokuChecker.js');

const sudoku1 = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
const sudoku2 = "775814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
const sudoku3 = "215873649\n734965812\n698412537\n387241965\n146597283\n471659328\n952386471\n563128794\n829734156";
const sudoku4 = "524698731\n967531824\n381742596\n719325648\n436871952\n258416379\n893154267\n672983415\n145267983";

const result1 = sudokuChecker(sudoku1);
const result2 = sudokuChecker(sudoku2);
const result3 = sudokuChecker(sudoku3);
const result4 = sudokuChecker(sudoku4);

it('solves!', () => {
  expect(result1).toBe('solved');
});

it('does not solve!', () => {
  expect(result2).toBe('invalid');
});

it('test case 1', () => {
  expect(result3).toBe('invalid');
});

it('test case 2', () => {
  expect(result4).toBe('invalid');
});