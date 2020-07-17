import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  // state = { age: 21 };

  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   });
  // }

  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>Age from store: <span>{this.props.age}</span></p>
            <div>
              <button onClick={this.props.onAgeUp}>Age UP</button>
              <button onClick={this.props.onAgeDown}>Age DOWN</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    age: state.age
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
