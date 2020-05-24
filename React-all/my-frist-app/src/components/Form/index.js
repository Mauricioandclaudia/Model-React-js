import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firsName: '',
            lasName: '',        }
        this.handleInputName = this.handleInputFirsName.bind(this)
        this.handleInputLastName = this.handleInputLastName.bind(this)
    }

    handleInputFirsName(event) {
        console.log(event.target.value)
        this.setState({
            firsName: event.target.value
        })
    }
            
        handleInputLastName(event) {
            console.log(event.target.value)
            this.setState({ 
                lasName: event.target.value
            })
        }

    render() {
        const { firsName, lastName } = this.state
        return (
          <div className="form-container">
            <form>
                
              <input
                value={firsName}
                onChange={this.handleInputFirsName}
                placeholder={"First Name"}
              />

              <input
                value={lastName}
                onChange={this.handleInputLastName}
                placeholder={"Last Name"}
              />

            </form>
            <p>hola {firsName} {lastName}</p>
          </div>
        );
    }
}