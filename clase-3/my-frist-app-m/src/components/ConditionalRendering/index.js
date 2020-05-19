import React, { Components } from 'react';
 //import React, { Components } from "react";

export default class ConditionalRendering extends Component { 

constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
 }
render() {
    const { firstName, lastName } = this.state;
    let saludo = null
    if( firstName !== '' & lastName !== '') {
        saludo = <p>hola {lastName} {firstName}</p>
    }

    return(
        <div className="container">
        <h1>Conditional Rendering</h1>
        {saludo}
        </div>
    );
}


}