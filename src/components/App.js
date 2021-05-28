import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

const App = () => {
  const [results, setResults] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const calculation = Calculate(results, buttonName);
    setResults(calculation);
  };

  const { total, next, operation } = results;
  let value = total;
  if (operation) {
    value = operation;
    if (next) {
      value = next;
    }
  }

  return (
    <>
      <span>{total}</span>
      <span>{operation}</span>
      <span>{next}</span>
      <Display result={value || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
