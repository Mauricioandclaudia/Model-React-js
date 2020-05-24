import React from "react";

import Header from "../../components/Header";

//css
import "./CurrencyConverter.css";

export default class CurrencyConverter extends Comment {

constructor(props) {
  super()
  this.state = {
    currencyMXN: 0,
    currencyUSD: 0,
    currencyEUR: 0,
  }
  this.handlerInput = this.handlerInput.bind(this)
}

handlerInput({ target: { name, value }}) {

let _currencyMXN = 0; 
let _currencyUSD = 0;
let _currencyEUR = 0;

if (name === 'currencyMXN') {
_currencyMXN = value
_currencyUSD = value / 23.24
_currencyEUR = value / 25.49
  } else if (name === 'currencyUSD') {
    _currencyMXN = value * 23.24
    _currencyUSD = value
    _currencyEUR = value * 0.91
  } else {
    _currencyMXN = value * 25.24
    _currencyUSD = value / 1.10
    _currencyEUR = value
  }

  this.setState({
    currencyMXN: _currencyMXN,
    currencyUSD: _currencyUSD,
    currencyEUR: _currencyEUR
  })


}


  render() {
    const { currencyMXN, currencyUSD, currencyEUR } = this.state
    return (
      <div className="Container">
        <div>
          <Header
            title={"Currency converter"}
            description={"Conversor de Divisas MXN-UD-EUR"}
          />
          <div>
            <form>
              <input placeholder={'MXN'} value={currencyMXN} onClick={this.handlerInput} name={'currencyMXN'} />
              <input placeholder={'USD'} value={currencyUSD} onClick={this.handlerInput} name={'currencyUSD'} />
              <input placeholder={'EUR'} value={currencyEUR} onClick={this.handlerInput} name={'currencyEUR'} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
