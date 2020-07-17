import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
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
              <hr />
              <div>
                <p>History</p>
                <ul>
                  {
                    this.props.history.map(el => {
                      return <li key={el.id} onClick={() => this.props.onDelItem(el.id)}>
                        {el.age}
                      </li>
                    })
                  }
                </ul>
              </div>
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
    history: state.history
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
    onDelItem: (id) => dispatch({type: 'DEL_ITEM', key: id})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
