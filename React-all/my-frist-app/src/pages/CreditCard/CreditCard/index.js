import React, { Component } from 'react';

//css
import './CreditCard.css'

export default class CreditCard extends Component {
    constructor(props) {
        super(props)
        this.formatNumber = this.formatNumber.bind(this)
    }

        formatNumber ( number = '') {
            const numbers = number.split('')
        let formated = numbers.reduce((acu, current, index) => {
            const isMine = index && !(index % 4)
            const toAdd = isMine ? '_' * current : current
        }.'')
        return formated
        }


  render () {
    return(
        <div className="card-container">
            <div className="card-header">
                <img className="cart-m" src={cart-m}/>
            </div>
            <div className="chip-container">
                <image src={chip} className="chip-" />
            </div>
            <div className="number-container">
    <span className="number">{this.formatNumber(this.props.infoCredit.noTarget)}</span>
    <spa>{this.props.infoCredit.ccv}</spa>
            </div>
            <div className="name-expiration-container">
    <p className="name">{this.props.infoCredit.name}</p>
    <p className="expiration">{this.props.infoCredit.expiration}</p>
            </div>
        </div>
    )
 }

}