import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Age: <span></span></p>
          <div>
            <button>Age UP</button>
            <button>Age DOWN</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
