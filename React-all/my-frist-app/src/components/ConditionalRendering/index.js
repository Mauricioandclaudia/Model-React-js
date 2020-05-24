import React,  { Component } from 'react';

//css
import "./Menu.css";

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isMenuActive: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }


toggleMenu() {
    const {isMenuActive} = this.state
    this.setState({
        isMenuActive: !isMenuActive
    })
}

    render() {
        // const { firstMame, lastName } = this.state;
        // let saludo = null
        // if (firstMame !== '' & lastName !== '') {
        //     saludo = <p>Hola {firstMame} {lastName}</p>
        // }
        const { isMenuActive } = this.state
        const menuclass = isMenuActive ? 'activeMEnu' : ''
        return (
          <div className="container">
            <h1> hola conditional Rendering</h1>
            <div className={`Menu ${menuclass}`}>
              <h2>Test</h2>
            </div>
            <button onClick={this.toggleMenu} className="Menu-button">
              Menu
            </button>
          </div>
        );
    }
} 

// al dar click a un botton, renderizar un cuadro de un color (el que sea)
//alda un segundo click, desaparecer este div 

//ready !!!

//  { isMenuActive ? (    ) : null}6&&6 6 6<6Z6X6