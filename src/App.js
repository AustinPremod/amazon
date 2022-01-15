import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/checkout" element={ [<Header /> ] }/>
          <Route exact path="/" element={ [<Header /> ,<Home />] }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
