import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/actions';
import './App.css';

class App extends Component {

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
              {this.props.loading && <img src={logo} alt="logo" className="App-logo" />}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    age: state.age,
    loading: state.loading
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
