import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import Clock from "./components/Clock/Clock";
import Card from "./components/Card/Card";
import Counter from "./components/Counter";
import Button from "./components/Button";
// import Notes from './components/Notes'
import Form from "./components/Form";
import CurrencyExchange from './components/ConditionalRendering/'
import ConditionalRendering from "./components/ConditionalRendering";

const data = [
  {
    category: "PROGRAMMING",
    title: "8 VS Code Extensions You Might Love",
    description:
      "CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more",
    author: "Marvin Wendt in Better Programming",
    publicationDate: "May 4",
    readTime: "3 min read",
    image: "https://picsum.photos/id/1/200/230",
  },
  {
    category: "PROGRAMMING",
    title: "Title 2",
    description:
      "CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more",
    author: "Marvin Wendt in Better Programming",
    publicationDate: "May 10",
    readTime: "5 min read",
    image: "https://picsum.photos/id/2/200/230",
  },
  {
    category: "PROGRAMMING",
    title: "Title 2",
    description:
      "CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more",
    author: "Marvin Wendt in Better Programming",
    publicationDate: "May 10",
    readTime: "5 min read",
    image: "https://picsum.photos/id/3/200/230",
  },
];

export default class App extends Component {
  _renderCards() {
    return data.map(
      (
        {
          category,
          title,
          description,
          author,
          publicationDate,
          readTime,
          image,
        },
        index
      ) => {
        return (
          <Card
            key={`card_${index}`}
            category={category}
            title={title}
            description={description}
            author={author}
            publicationDate={publicationDate}
            readTime={readTime}
            image={image}
          />
        );
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bootcamp white - <strong>React</strong>
          </h1>
          <Clock />
          <Counter step={2} finalCounter={100} cutCounter={2} />
          <Button />
        </header>
        <div className="cards-container">{this._renderCards()}</div>
        {/* <Notes />   */}
      </div>
    );
  }
}
