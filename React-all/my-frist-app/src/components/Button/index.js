import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterClick: 0,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick()  {
  //   console.log("Me clickeo!!!");
  //   const { counterClick } = this.state;
  //   this.setState({
  //     counterClick: counterClick + 1
  //   })
  // }

  handleClick = () => {
    console.log("Me clickeo!");
    const { counterClick } = this.state
    this.setState({
      counterClick: counterClick + 1,
    });
  }

  handleOver = () => {
    const{ counterOver } = this.state
    this.setState({
      counterOver: counterOver + 1
    })
  }


  render() {
    return (
      <div>
        <p>Llevas {this.state.counterClick} clicks!</p>
        <button onClick={this.handleClick}>Click me!</button>
        <p>Estuv sobre mi {this.state.counterOver} veces</p>
      </div>
    );
  }
}
