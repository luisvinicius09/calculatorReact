import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../utils/calculate';

const App = () => (
  <>
    <Display />
    <ButtonPanel value={Calculate} />
  </>
);

export default App;
