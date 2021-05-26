import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

export default class App extends Component {
  constructor() {
    super();
    this.total = null;
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPanel value={Calculate} />
      </>
    );
  }
}
