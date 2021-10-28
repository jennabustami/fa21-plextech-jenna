import './App.css';
import React, { Component } from 'react';
import Button from './Button.js'; 

export default class App extends Component {
  constructor(){
      super();
      this.state= {
            count: 0
        };
}
// Main Solution
incrementCount = () => {
    this.setState({
        count: this.state.count + 1
  });
}
decrementCount = () => {
  this.setState({
      count: this.state.count - 1
    });
}
render () {
  let { count } = this.state;
  return (
    <div>
<h2>Count: { count } </h2>
<Button
title = { "+" }
task = { () => this.incrementCount() }
/>
<Button
title = { "-" }
task = { () => this.decrementCount() }
/>
</div>
  );
}
}