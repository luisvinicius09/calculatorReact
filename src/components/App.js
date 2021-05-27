import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const results = Calculate(this.state, buttonName);
    this.setState(results);
  }

  render() {
    const { total, next, operation } = this.state;
    let results = total;
    if (operation) {
      results = operation;
      if (next) {
        results = next;
      }
    }
    return (
      <>
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
        <Display result={results || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
