import React from "react";

//css
import './Home.css'
import Header from '../../components/Header'
function Home() {
    return (
        <div className="Container">
            <div>
                <h1>Kodemia Module 3</h1>
                <p>aqui aprenderemos  a usar <strong>React.js</strong></p>
                <Header 
                title={'Kodemia modulo 3'}
                description={'Aqui aprenderas React.js'}
                />
            </div>
        </div>
    )
}

export default Home;