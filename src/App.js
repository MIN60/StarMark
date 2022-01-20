import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./logmain/login.js";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
