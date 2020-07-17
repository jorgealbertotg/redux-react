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
          <p><button onClick={() => props.updateA(props.b)}>Update A</button></p>
        </div>
        <div>
          <p><strong>B: </strong><span>{props.b}</span></p>
          <p><button onClick={() => props.updateB(props.a)}>Update B</button></p>
        </div>
      </header>
    </div>
  );
}

const mapStoreToProps = store => {
  /*
  return {
    a: store.a,
    b: store.b
  };
  */
  return {
    a: store.rA.a,
    b: store.rB.b
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateA: (b) => dispatch({type: 'UPDATE_A', b: b}),
    updateB: (a) => dispatch({type: 'UPDATE_B', a: a})
  };
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
