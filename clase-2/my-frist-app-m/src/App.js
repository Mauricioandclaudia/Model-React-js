import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//     return ( <
//         div className = "App" >
//         <
//         header className = "App-header" >
//         <
//         img src = { logo }
//         className = "App-logo"
//         alt = "logo" / >
//         <
//         p >
//         Edit < code > src / App.js < /code> and save to reload. <
//         /p> <
//         a className = "App-link"
//         href = "https://reactjs.org"
//         target = "_blank"
//         rel = "noopener noreferrer" >
//         Learn React <
//         /a> <
//         /header> <
//         /div>
//     );
// }




// Components
// import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'

const data = [
    {
        'category': 'PROGRAMMING',
        'title': '8 VS Code Extensions You Might Love',
        'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
        'author': 'Marvin Wendt in Better Programming',
        'publicationDate': 'May 4',
        'readTime': '3 min read',
    },
    {
        'category': 'PROGRAMMING',
        'title': 'Title 2',
        'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
        'author': 'Marvin Wendt in Better Programming',
        'publicationDate': 'May 10',
        'readTime': '5 min read',
    },
    {
        'category': 'PROGRAMMING',
        'title': 'Title 2',
        'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
        'author': 'Marvin Wendt in Better Programming',
        'publicationDate': 'May 10',
        'readTime': '5 min read',
    }
]

export default class App extends Component {

    _renderCards() {
        return data.map(({
            category,
            title,
            description,
            author,
            publicationDate,
            readTime
        }) => {
            return (
                <Card
                    category={category}
                    title={title}
                    description={description}
                    author={author}
                    publicationDate={publicationDate}
                    readTime={readTime}
                />
            )
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        Bootcamp white - <strong>React</strong>
                    </h1>
                </header>
                <div className='cards-container'>
                    {this._renderCards()}
                </div>
                {/* <Clock /> */}
            </div>
        )
    }
}






//export default App;













