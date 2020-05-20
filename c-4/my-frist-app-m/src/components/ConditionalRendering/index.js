// import React, { Components } from 'react';
//  //import React, { Components } from "react";

// export default class ConditionalRendering extends Component { 

// constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//     };
//  }
// render() {
//     const { firstName, lastName } = this.state;
//     let saludo = null
//     if( firstName !== '' & lastName !== '') {
//         saludo = <p>hola {lastName} {firstName}</p>
//     }

//     return(
//         <div className="container">
//         <h1>Conditional Rendering</h1>
//         {saludo}
//         </div>
//     );
// }


// }

//-----------------------------------------------------------------------


import React, { Component } from "react";

// Css
import "./CurrencyConverter.css";

export default class CurrencyExchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
    this.handleInputAmount = this.handleInputAmount.bind(this);
  }

  handleInputAmount(event) {
    console.log(event.target.value);
    this.setState({
      amount: event.target.value,
    });
  }

  render() {
    const { amount } = this.state;
    let currencyConverted = 0;
    let currencyExchange = "";
    if (amount !== 0) {
      const usdCurrencyValue = 23.67;
      currencyConverted = amount / usdCurrencyValue;
      currencyExchange = `La cantidad ${amount} MXN a USD son ${currencyConverted}`;
    }
    return (
      <div className="form-container">
        <h1>Conversor de divisas MXN / USD</h1>
        <form>
          <input
            value={amount}
            onChange={this.handleInputAmount}
            placeholder={"Cantidad"}
          />
        </form>
        <p>{currencyExchange}</p>
      </div>
    );
  }
}




//------------------------------------------------------------------------------------





import React, { Component } from "react";

// Css
import "./ConditionalRendering.css";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickHappened: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOtherClick = this.handleOtherClick.bind(this);
  }
  handleClick() {
    this.setState({
      clickHappened: true,
    });
  }
  handleOtherClick() {
    this.setState({
      clickHappened: false,
    });
  }
  render() {
    const { clickHappened } = this.state;
    let button;
    let squareRender;
    if (clickHappened) {
      button = <button onClick={this.handleOtherClick}>Click me!</button>;
      squareRender = (
        <div className="square-form">
          <p>Test</p>
        </div>
      );
    } else {
      button = <button onClick={this.handleClick}>Click me!</button>;
      squareRender = null;
    }
    return (
      <div className="form-container">
        <h1>Conditional Rendering</h1>
        {button}
        {squareRender}
      </div>
    );
  }
}
