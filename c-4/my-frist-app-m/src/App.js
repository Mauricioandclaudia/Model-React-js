import React, { Component } from "react";
// External Packages
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Menu from "./pages/Home/Menu";

// CSS
//import "./App.css";
export default class App extends Component {
  //apartir de aqui viernes 
constructor(props) {
  super(props)
  this.state = {
    inUserLogin: false
  }
}

    //apartir de aqui viernes 
  
  render() {
      //apartir de aqui viernes 
  
    const{ inUserLogin } = this.state
    const
    if (inUserLogin) {

    }
      //apartir de aqui viernes 
  
    return (
      <Router>
        <div className="App">
         <Menu inUserLogin={inUserLogin} />

          <Switch>
            <Route exact path="/notes">
              <Home />
            </Route>
            <Route exact path="/notes">
            <CurrencyCoverter />
              <Notes />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// import logo from "./logo.svg";
// import "./App.css";

// // Components
// import Clock from "./components/Clock/Clock";
// import Card from "./components/Card/Card";
// import Counter from "./components/Counter";
// import Button from "./components/Button";
// // import Notes from './components/Notes'
// import Form from "./components/Form";
// import CurrencyExchange from './components/ConditionalRendering/'
// import ConditionalRendering from "./components/ConditionalRendering";

// const data = [
//   {
//     category: "PROGRAMMING",
//     title: "8 VS Code Extensions You Might Love",
//     description:
//       "CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more",
//     author: "Marvin Wendt in Better Programming",
//     publicationDate: "May 4",
//     readTime: "3 min read",
//     image: "https://picsum.photos/id/1/200/230",
//   },
//   {
//     category: "PROGRAMMING",
//     title: "Title 2",
//     description:
//       "CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more",
//     author: "Marvin Wendt in Better Programming",
//     publicationDate: "May 10",
//     readTime: "5 min read",
//     image: "https://picsum.photos/id/2/200/230",
//   },
//   {
//     category: "PROGRAMMING",
//     title: "Title 2",
//     description:
//       "CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more",
//     author: "Marvin Wendt in Better Programming",
//     publicationDate: "May 10",
//     readTime: "5 min read",
//     image: "https://picsum.photos/id/3/200/230",
//   },
// ];

