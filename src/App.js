import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
      {/* as header is used on all pages we can puit it outside */}
      <Header /> 
        <Routes>
          <Route exact path="/checkout" element={[<Checkout />]} />
          <Route exact path="/" element={[ <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
