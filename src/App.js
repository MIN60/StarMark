import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Dash } from './dashboard/dash.js';
import { Login } from './src/home/fullLogin.js';


function App() {
  return (
    <>
    <div className="App">
      <div id = "login"></div>
      <div>
        <Router>
          <Routes>
              <Route path='/' element={<Login />}></Route>
              <Route path='/dashboard' element={<Dash />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
    </>    
  );
}

export default App;