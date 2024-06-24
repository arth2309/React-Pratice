import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.';
import {BrowserRouter} from 'react-router-dom'
import  CountContext from './store/count-context'
import { Count } from './Type';

function App() {
  return (
    <div >
      <BrowserRouter>
    <CountContext.Provider value={{
      count : 0
    }}>
          <Dashboard />
    </CountContext.Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;
