import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
     <Dashboard />
     </BrowserRouter>
    </div>
  );
}

export default App;
