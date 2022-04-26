import Navbar from "./Navbar";
import Home from "./Home";
import Account from "./Account";
import Timecards from "./Timecards";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const[text, setText] = useState("");
  
  useEffect(() => {
    axios.get("http://localhost:5000/employees").then(response => {
      const workers = response.data.employees;
      // console.log(workers[0].email);
      setText(workers[0].email);
    })
  }, []) //Pass in an empty array to ensure it only returns once. 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="account" element={<Account />} />
      <Route path="timecards" element={<Timecards />} />
    </Routes>
    <section>
        <button id="connectButton" onClick={initialize} disabled>Connect MetaMask</button>
    </section>
    {text}
  </BrowserRouter>

  );
}

export default App;