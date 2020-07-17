import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p><strong>A: </strong><span>{props.a}</span></p>
          <p><button onClick={props.updateA}>Update A</button></p>
        </div>
        <div>
          <p><strong>B: </strong><span>{props.b}</span></p>
          <p><button onClick={props.updateB}>Update B</button></p>
        </div>
      </header>
    </div>
  );
}

const mapStoreToProps = store => {
  return {
    a: store.a,
    b: store.b
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateA: () => dispatch({type: 'UPDATE_A'}),
    updateB: () => dispatch({type: 'UPDATE_B'})
  };
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
