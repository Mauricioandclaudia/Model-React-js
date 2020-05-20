import React, { Component } from "react";
import Note from './components/Note';

//css


export default class Notas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: {}
    };
    
  }
  
  handleChange = (event.target.value, from) =>) {
    console.log(event.target.value)
  }
  
  addNote {
    this.setState({

    })
  }

  render() {
    return (
      <div>

        <div>
          <p>Nota 1</p>
          <p>Nota 2</p>
        </div>

        <div>
          <input onChange={(event) => this.handleChange} placeholder={"Titulo"} />
          <input onChange={(event) => this.handleChange} placeholder={"Content"} />
          <button onClick={this,addNote}>Add</button>
        </div>

      </div>
    );

  }
}
