import React, { Component } from 'react';

//css
import './CreditCardForm.css'

export default class CreditCardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            noTarget: "",
            expiration: "",
            cvv
        }
        this.handlerInput = this.handlerInput.bind(this)
        this.senData = this.senData.bind(this)
    }


    handlerInput ({ target: {name, value } }) {
        this.setState({
            [name]: value,
        }, this.senData)
    }


    senData() {
        this.props.handlerCreditInfoCard(this.state);
    }

    render() {
        return (
          <div className="form-container">
            <form>
              <label for="">Nombre</label>
              <input
                value={this.state.name}
                onChange={this.handlerInput}
                placeholder={"Name of owner"}
                name={'name'}
              />

              <label for="">Card number</label>
              <input
                maxLength="18"
                value={this.state.noTarget}
                onChange={this.handlerInput}
                placeholder={"No. Target"}
                name={'N. Target'}
              />

              <label for="">Vence mm/aa</label>
              <input
              maxLength="5"
              value={this.state.expiration}
              onChange={this.handlerInput}
              placeholder={'Fecha de vencimiento'}
              name={'Expedida'}
              />

              <label for="">CCV</label>
            <input
            maxLength="3"
            value={this.state.ccv}
            onChange={this.handlerInput}
            placeholder={'N.'}
            name={'Secret'}
            />
            </form>
          </div>
        );
    }

}