import React, { Component } from "react";
// Components
import Header from "../../components/Header";
import Note from "../../components/Note";
// Custom components
import NewNote from "./components/NewNote";
// CSS
import "./Notes.css";
export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this._renderNotes = this._renderNotes.bind(this);
    this.handlerNewNote = this.handlerNewNote.bind(this);
  }
  componentDidMount() {
    fetch("https://reactsessions-ac545.firebaseio.com/.json")
      .then((response) => response.json())
      .then(({ notes }) => {
        var notesArray = [];
        for (let key in notes) {
          notesArray.push({
            key,
            title: notes[key]["title"],
            content: notes[key]["content"],
          });
        }
        this.setState({
          notes: notesArray,
        });
      });
  }
  _renderNotes() {
    const { notes } = this.state;
    return notes.map(({ key, title, content }) => {
      return <Note key={key} title={title} content={content} />;
    });
  }
  handlerNewNote(note) {
    fetch("https://reactsessions-ac545.firebaseio.com/notes.json", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ name }) => {
        const { notes } = this.state;
        note["key"] = name;
        this.setState({
          notes: [...notes, note],
        });
      });
  }
  render() {
    return (
      <div className="Container">
        {this.props.isUserLogedIn ? (
          <div>
            <Header
              title={"Blog de notas"}
              description={
                "Aqui aprenderemos a manejar el estado interno y subir el estado del hijo al padre"
              }
            />
            <div className="Notes-container">
              <ul>{this._renderNotes()}</ul>
              <NewNote handlerNewNote={this.handlerNewNote} />
            </div>
          </div>
        ) : (
          <h1>Loggeate perro</h1>
        )}
      </div>
    );
  }
}
