import logo from './logo.svg';
import './App.css';
import {initializeFirebase} from './firebase';
import GameSubmit from './GameSubmitForm.js';
import React from 'react';

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
        <GameSubmit />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
