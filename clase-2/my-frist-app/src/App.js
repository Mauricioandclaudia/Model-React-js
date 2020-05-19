import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Components new
import Card from './Components/Card/Card'

const data = [
  {
    category: "PROGRAMING",
    title: "8 vs Code EXtensions",
    description: "Codesnap, GitHub",
    author: "Marvin Wendt in botter",
    publicationDate: "May 3",
    readTime: "9 min read",
  },
  {
    category: "PROGRAMING",
    title: "8 vs Code EXtensions",
    description: "Codesnap, GitHub",
    author: "Marvin Wendt in botter",
    publicationDate: "May 3",
    readTime: "9 min read",
  },
  {
    category: "PROGRAMING",
    title: "8 vs Code EXtensions",
    description: "Codesnap, GitHub",
    author: "Marvin Wendt in botter",
    publicationDate: "May 3",
    readTime: "9 min read",
  }
];
// import Clock from './Components/Clock/Clock'

// function App() {
//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }






export default class App extends Component {

  // renderClock() {
  //   Clock
  // }

  render () {

  let cards = data

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1>
            Bootcamp whrite - <strong>React</strong>
          </h1>
        </header>
        <div className="cards-container">

          {
          data.map(e => (
              <Card
            category="PROGRAMING"
            title="8 vs Code EXtensions"
            description="Codesnap, GitHub"
            author="Marvin Wendt in botter"
            publicationDate="May 3"
            readTime="9 min read"
          />

          ))
          }
        </div>
        // {/* <Clock /> */}
      </div>
    );
  }
}

// export default App;
