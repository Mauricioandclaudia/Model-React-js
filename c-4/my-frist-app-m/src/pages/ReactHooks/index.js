import React, { useState, useEffect } from 'react'

import "./"
import Header from "../../components/Header";
// Css
import "./Home.css";
function Hooks() {
    const [count, seCount] = useState(0);
    
  return (
    <div className="Container">
      <div>
        <Header
          title={"Kodemia modulo 3"}
          description={"Aqui aprenderemos React JS"}
        />
        <p>me clikeaste {count} ve{count == 1 ? 's': 'veces' /p>
        <button></button>
      </div>
    </div>
  );
        }
}

export default Hooks;
