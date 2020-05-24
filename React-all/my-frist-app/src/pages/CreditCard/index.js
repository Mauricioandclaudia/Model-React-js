import React, { Component } from 'react'

import Header from '../../components/Header'

import CreditCardForm from './Components/CreditCardForm';
import CreditCard from './CreditCard';

//css
import './CreditCard.css'


export default class CreditCardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoCredit: {}
        }
        this.handlerCreditInfoCard = this.handlerCreditInfoCard.bind(this)
    }


    handlerCreditInfoCard ( infoCredit ) {
        this.setState({
            infoCredit
        })
    }



render() {
    return (
      <div className="Container">
        <div>
          <Header title={"Credit Card"} description={"Formulario Card"} />
          <div className="Credit-Card Container">
            <CreditCardForm
              handlerCreditInfoCard={this.handlerCreditInfoCard}
            />
            <CreditCard
            infoCredit={this.infoCredit}
             />
          </div>
        </div>
      </div>
    );

}


}