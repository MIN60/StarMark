import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { dash } from './dashboard/dash.js';



function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
              <Route path='/dashboard' element={<dash />}></Route>
          </Routes>
        </Router>
      </div>
    </div>    
  );
}

export default App;