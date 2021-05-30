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

  const styles = {
    display: 'flex',
    width: '700px',
    flexDirection: 'column',
    margin: 'auto',
    position: 'relative',
    top: '100px',
  };

  return (
    <>
      <div style={styles}>
        <Display result={value || '0'} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
