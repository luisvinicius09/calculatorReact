import Big from 'big.js';
import Operate from './operate';

const calculate = ({ total, next, operation }, button) => {
  switch (button) {
    case 'A/C':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '+/-':
      return total ? {
        total: (Big(total).times(-1)).toString(),
      } : {
        next: (Big(next).times(-1)).toString(),
      };
    case '%':
      if (total && !next) {
        if (!operation) {
          return {
            total: Big(total).div(100).toString(),
          };
        }
        return {
          next: Big(total).div(100).toString(),
        };
      }
      if (total && next) {
        if (operation === '+' || operation === '-') {
          const modifier = Big(next).div(100).times(total).toString();
          return {
            next: modifier,
          };
        }
        if (operation === 'x' || operation === '÷') {
          const modifier = Big(next).div(100).toString();
          return {
            next: modifier,
          };
        }
      }
      return {};
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (total) {
        return {
          operation: button,
        };
      }
      if (operation) {
        const result = Operate(total, next, operation);
        return {
          total: result,
          next: null,
          operation: null,
        };
      }
      break;
    case '=':
      return total && next ? {
        total: Operate(total, next, operation),
        next: null,
        operation: null,
      } : {};
    case '.':
      if (total && !next && !operation) {
        return total.includes('.') ? {} : {
          total: `${total}.`,
        };
      }
      if (total && next) {
        return next.includes('.') ? {} : {
          next: `${next}.`,
        };
      }
      return total && operation ? {
        next: '0.',
      } : {
        total: '0.',
      };
    case '1': case '2': case '3': case '4':
    case '5': case '6': case '7': case '8':
    case '9': case '0':
      if (total) {
        if (total.includes('.')) {
          return {
            total: `${total}${button}`,
          };
        }
      }
      if (next) {
        if (next.includes('.')) {
          return {
            next: `${next}${button}`,
          };
        }
      }
      if (!operation) {
        return {
          total: `${total || ''}${button}`,
        };
      }
      return {
        next: `${next || ''}${button}`,
      };
    // no default
  }
  return {};
};

export default calculate;
