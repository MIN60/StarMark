import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Dashboard } from './dashboard/dash.js';
import { Login } from './logmain/login.js';



function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
              <Route path='/Dashboard' element={<Dashboard />}></Route>
              <Route path='/Login' element={<Login />}></Route>

          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;