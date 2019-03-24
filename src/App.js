import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             N.D.R.K Institue Of Technology
          </p>
          <a
            className="App-link"
            href="https://www.google.com/maps/dir/12.9049109,77.6337056/N+D+R+K+Institute+Of+Tecnolagy,+Karnataka+573213/@12.941027,76.2735428,9z/data=!3m1!4b1!4m18!1m7!3m6!1s0x3ba539d5c7c7d605:0xb57005b13a667a6e!2sN+D+R+K+Institute+Of+Tecnolagy,+Karnataka+573213!3b1!8m2!3d12.9756621!4d76.0344765!4m9!1m1!4e1!1m5!1m1!1s0x3ba539d5c7c7d605:0xb57005b13a667a6e!2m2!1d76.0344765!2d12.9756621!3e3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hassan
          </a>
        </header>
      </div>
    );
  }
}

export default App;
