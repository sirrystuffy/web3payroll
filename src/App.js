import React, { useState, useEffect } from "react";
import Home from "./Home";
import initialize from "./metamask/contract";
import axios from "axios"
import './App.css';

function App() {
  const[text, setText] = useState("");
  
  useEffect(() => {
    axios.get("http://localhost:5000/backend").then(response => {
      setText(response.data)
    })
  }, []) //Pass in an empty array to ensure it only returns once. 


  
  return (
    <div className="App">
      <Home/>
      <section>
        <button id="connectButton" onClick={initialize} disabled >Connect MetaMask</button>
      </section>
      {text}
    </div>
  );
  
}

export default App;