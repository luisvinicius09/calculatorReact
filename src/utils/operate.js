import Big from 'big.js';

const operate = (nOne, nTwo, operation) => {
  const x = Big(nOne);
  const y = Big(nTwo);
  switch(operation) {
    case '+':
      return x.plus(y).toString();
    case '-':
      return x.minus(y).toString();
    case 'x':
      return x.times(y).toString();
    case '÷':
      if (y == '0') {
        return 'Division by zero - Error'
      }
      return x.div(y).toString();
  }
}

export default operate;