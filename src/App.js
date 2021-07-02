import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Clearbtn from './components/Clearbtn';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currrentNumber: "",
      operator: "",
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val })
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: " " });
  };

  result = () => {
    this.state.currrentNumber = this.state.input;
    if (this.state.operator == "plus") {
      this.setState({
        input: parseInt(this.state.previousNumber) +
          parseInt(this.state.currrentNumber),
      });
    } else if (this.state.operator == "subtract") {
      this.setState({
        input: parseInt(this.state.previousNumber) -
          parseInt(this.state.currrentNumber),
      });
    } else if (this.state.operator == "multiply") {
      this.setState({
        input: parseInt(this.state.previousNumber) *
          parseInt(this.state.currrentNumber),
      });
    } else if (this.state.operator == "divide") {
      this.setState({
        input: parseInt(this.state.previousNumber) /
          parseInt(this.state.currrentNumber),
      });
    }
  };

  add = () => {
    this.state.previousNumber = this.state.input
    this.setState({ input: "" });
    this.state.operator = "plus";
  };

  sub = () => {
    this.state.previousNumber = this.state.input
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };

  mul = () => {
    this.state.previousNumber = this.state.input
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  div = () => {
    this.state.previousNumber = this.state.input
    this.setState({ input: "" });
    this.state.operator = "divide";
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row" >
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Clearbtn handleClear={this.clearInput}>CLEAR/RESET</Clearbtn>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.sub}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.mul}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.result}>=</Button>
            <Button handleClick={this.div}>/</Button>
          </div >
        </div>
      </div>
    );
  }
}
export default App;