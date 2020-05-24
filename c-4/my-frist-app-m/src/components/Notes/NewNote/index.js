import React, { Component } from 'react'

import './NewNote.css';

export default class NewNote extends Component {
    render() {
        return (
          <div placeholder="Container">
            <h1>Hola papi</h1>
            <div>
              <form onSubmit={this.addNote}>
                <div className="Notes-form-content">
                  <div className="Notes-inputs-content">
                    <input
                      value={this.state.title}
                      onChange={this.handleInput}
                      placeholder={"Titulo de la nota"}
                      name={"title"}
                    />
                    <input
                      value={this.state.content}
                      onChange={this.handleInput}
                      placeholder={"Contenido de la nota"}
                      name={"content"}
                    />
                  </div>
                  <button type="submit">Add</button>
                </div>
              </form>
            </div>
          </div>
        );
    }

}
