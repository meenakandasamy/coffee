

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Master from "./Home/Master"
import Contact from "./Home/Contact";
import Branches from "./Home/Branches";
import Menu from "./Home/Menu";
import Coffeeimage from "./Home/Coffeeimage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/" element={<Master/>} />
          <Route exact path="/" element={<Menu/>} />
          <Route exact path="/" element={<Contact/>} />
          <Route exact path="/" element={<Branches/>} />
          <Route exact path="/" element={<Coffeeimage/>} />
          </Routes>
          </Router>
    </div>
  );
}

export default App;
