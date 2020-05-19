import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterClick: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Me clickeo!");
    const { counterClick } = this.state;
    this.setState({
      counterClick: counterClick + 1,
    });
  }

  render() {
    return (
      <div>
        <p>Llevas {this.state.counterClick} clicks!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
