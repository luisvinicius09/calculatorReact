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
    case operation: 
    case '=': 
    case '.':

  }

};

export default calculate;
