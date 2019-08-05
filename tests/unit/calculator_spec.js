var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it is able to add two numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5)
  })

  it('it is able to subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('it is able to multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15)
  })

  it('it is able to divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(3);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 7)
  })

  it('it is able to concatenate multiple clicks', function(){
    calculator.numberClick(3);
    calculator.numberClick(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 34)
  })

  it('it is able to chain operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('it is able to clear running running total', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    calculator.clearClick();
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 0)
  })
});

//
// - `calculator.add()` - add 1 to 4 and get 5
// - `calculator.subtract()` subtract 4 from 7 and get 3
// - `calculator.multiply()` - multiply 3 by 5 and get 15
// - `calculator.divide()` - divide 21 by 7 and get 3
// - `calculator.numberClick()` - concatenate multiple number button clicks
// - `calculator.operatorClick()` - chain multiple operations together
// - `calculator.clearClick()` - clear the running total without affecting
// - the calculation
