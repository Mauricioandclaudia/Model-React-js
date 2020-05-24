import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("%c El componente counter se monto.", "color: #ff0000");
    const { step } = this.props;
    this.counterInterval = setInterval(() => {
      const { counter } = this.state;
      this.setState({
        counter: counter + step,
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("%c El estado del componente se actualizo.", "color: #ff0000");
    const { counter } = this.state;
    const { finalCounter, cutCounter } = this.props;
    if (counter % cutCounter === 0) {
      console.log(
        `%c Desde el componentDidUpdate ${counter}`,
        "color: #008000"
      );
    }

    if (counter >= finalCounter) {
      console.log(
        "%c Eliminacion de intervalo desde componentDidUpdate",
        "color: #008000"
      );
      clearInterval(this.counterInterval);
    }
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}



//divisas

// import React, { Component } from "react";
// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.addCounter(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   addCounter() {
//     this.setState({
//       counter: (this.state.counter += 1),
//     });
//     if (this.state.counter % 8 === 0) {
//       console.log(this.state.counter);
//     }
//     if (this.state.counter === 20) {
//       this.componentWillUnmount();
//     }
//   }
//   render() {
//     return null;
//   }
// }