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
      if (total) {
        return {
          total: (parseFloat(total) * -1).toString(),
        };
      }
      if (next) {
        return {
          next: (parseFloat(next) * -1).toString(),
        };
      }
      return {};
    case '%':
      if (total && !next) {
        if (!operation) {
          return {
            total: Big(total).div(100).toString(),
            next,
            operation,
          };
        }
        return {
          total,
          next: Big(total).div(100).toString(),
          operation,
        };
      }
      if (total && next) {
        if (operation === '+' || operation === '-') {
          const modifier = Big(next).div(100).times(total).toString();
          return {
            total,
            next: modifier,
            operation,
          };
        }
        if (operation === 'x' || operation === '÷') {
          const modifier = Big(next).div(100).toString();
          return {
            total,
            next: modifier,
            operation,
          };
        }
      }
      return {
        total,
        next,
        operation,
      };
    case operation: {
      if (total && next) {
        const result = Operate(total, next, operation);
        return result;
      }
      return {
        total,
        next,
        operation,
      };
    }
    case '=': {
      if (total && next) {
        const result = Operate(total, next, operation);
        return {
          total: result,
          next: null,
          operation: null,
        };
      }
      return {
        total,
        next,
        operation,
      };
    }
    case '.':
      if (total && !next && !operation) {
        if (total.includes('.')) {
          return {
            total,
            next,
            operation,
          };
        }
        return {
          total: `${total}.`,
          next,
          operation,
        };
      }
      if (total && next) {
        if (next.includes('.')) {
          return {
            total,
            next,
            operation,
          };
        }
        return {
          total,
          next: `${next}.`,
          operation,
        };
      }
      if (total && operation) {
        return {
          total,
          next: '0.',
          operation,
        };
      }
      return {
        total: '0.',
        next,
        operation,
      };
    // no default
  }
  return {};
};

export default calculate;