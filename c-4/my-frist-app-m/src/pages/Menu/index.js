import React, { Component } from "react";
import { Link } from "react-router-dom";
// Css
import "./Menu.css";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  toggleMenu() {
    const { isMenuActive } = this.state;
    this.setState({
      isMenuActive: !isMenuActive,
    });
  }
  logOut() {
    this.props.logOut();
    this.toggleMenu();
  }
  render() {
    const { isUserLogedIn } = this.props;
    const { isMenuActive } = this.state;
    const menuClass = isMenuActive ? "Menu-active" : "";
    return (
      <div>
        <div className={`Menu ${menuClass}`}>
          <h2>Menu</h2>
          <nav>
            <div>
              <ul>
                <li>
                  <Link to="/" onClick={this.toggleMenu}>
                    Home
                  </Link>
                </li>
                {isUserLogedIn ? (
                  <li>
                    <Link to="/notes" onClick={this.toggleMenu}>
                      Notas
                    </Link>
                  </li>
                ) : null}
                <li>
                  <Link to="/currency-converter" onClick={this.toggleMenu}>
                    Currency converter
                  </Link>
                </li>
                {!isUserLogedIn ? (
                  <li>
                    <Link to="/login" onClick={this.toggleMenu}>
                      Iniciar sesión
                    </Link>
                  </li>
                ) : (
                  <li>
                    <button onClick={this.logOut}>Cerrar sesión</button>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
        <button onClick={this.toggleMenu} className="Menu-button">
          Menu
        </button>
      </div>
    );
  }
}
