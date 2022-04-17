import logo from './logo.svg';
import './App.css';
import {initializeFirebase} from './firebase';
import GameSubmit from './GameSubmitForm.js';
import React from 'react';
import HowItWorks from './HowItWorks';

/**
 * Main App component that you see on the main page.
 * @typedef {object} Props
 * @extends {Component<Props>}
 * @return {React.Component}
 */
function App() {
  initializeFirebase();

  return (
    <div className="App">
      <header className="App-header">
        <hr />
        <GameSubmit />
        <img src={logo} className="App-logo" alt="logo" />
        <HowItWorks />
      </header>
    </div>
  );
}

export default App;
