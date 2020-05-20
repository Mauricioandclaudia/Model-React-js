import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.dateInterval = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    // console.log("date", this.state.date);
  }

  componentWillUnmount() {
    clearInterval(this.dateInterval);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
