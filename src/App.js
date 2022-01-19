import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { dash } from './dashboard/dash.js';
import { Login } from './home/Login.js';


function App() {
  return (
    <div className="App">
      <div id = "login"></div>
      <div>
        <Router>
          <Routes>
              <Route path='/dashboard' element={<dash />}></Route>
              <Route path='/Login' element={<Login />}></Route>
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;