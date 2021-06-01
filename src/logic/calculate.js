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
      if (!operation) {
        return {
          total: (Big(total).times(-1)).toString(),
          next,
          operation,
        };
      } else {
        return {
          total,
          next: (Big(next).times(-1)).toString(),
          operation,
        };
      }
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
    case '+':
    case '-':
    case 'x':
    case '÷': {
      if (total) {
        return {
          total,
          next,
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
    case '1': case '2': case '3': case '4':
    case '5': case '6': case '7': case '8':
    case '9': case '0':
      if (total) {
        if (total.includes('.')) {
          return {
            total: `${total}${button}`,
            next,
            operation,
          };
        }
      }
      if (next) {
        if (next.includes('.')) {
          return {
            total,
            next: `${next}${button}`,
            operation,
          };
        }
      }
      if (!operation) {
        return {
          total: `${total || ''}${button}`,
          next,
          operation,
        };
      }
      return {
        total,
        next: `${next || ''}${button}`,
        operation,
      };
    // no default
  }
  return {};
};

export default calculate;
