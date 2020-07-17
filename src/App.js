import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { age: 21 };

  onAgeUp = () => {
    this.setState({
      ...this.state,
      age: ++this.state.age
    });
  }

  onAgeDown = () => {
    this.setState({
      ...this.state,
      age: --this.state.age
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>Age: <span>{this.state.age}</span></p>
            <div>
              <button onClick={this.onAgeUp}>Age UP</button>
              <button onClick={this.onAgeDown}>Age DOWN</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
